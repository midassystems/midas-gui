use crate::context::Config;
use crate::error::Result;
use chrono::serde::ts_seconds::deserialize as from_ts;
use chrono::{DateTime, Utc};
use reqwest::Client;
use serde::{Deserialize, Serialize}; //
use std::collections::HashMap;
use tauri::State;
use tokio::sync::Mutex;

// A struct to hold the cached news and its last update time
#[derive(Debug, Clone)]
pub struct NewsCache {
    pub items: HashMap<i32, NewsItem>, // Now using HashMap to store NewsItems by id
    pub last_updated: Option<i64>,
}

impl Default for NewsCache {
    fn default() -> Self {
        Self {
            items: HashMap::new(),
            last_updated: None,
        }
    }
}

#[derive(Debug, Serialize, Clone, Deserialize)]
pub struct NewsItem {
    category: String,
    #[serde(deserialize_with = "from_ts")]
    datetime: DateTime<Utc>,
    headline: String,
    id: i32,
    image: String,
    related: String,
    source: String,
    summary: String,
    url: String,
}

// Fetch fresh news from the API
#[tauri::command]
pub async fn refresh_news(config: State<'_, Config>) -> Result<Vec<NewsItem>> {
    // Create a new HTTP client
    let client = Client::new();

    // Make the HTTP GET request
    let response = client
        .get(&config.dashboard.finnhub_url)
        .send()
        .await
        .map_err(|err| err.to_string())?;

    // Check if the response status is successful (2xx)
    if response.status().is_success() {
        // Parse the response JSON into a vector of NewsItem
        let news_items: Vec<NewsItem> = response
            .json()
            .await
            .map_err(|err| format!("Failed to parse JSON response: {}", err))?;

        Ok(news_items) // Return the news items if successful
    } else {
        // Handle error response from the API
        Err(format!(
            "Error fetching news: Received HTTP status code {}",
            response.status()
        ))
    }
}

// Fetch news from the cache or refresh if stale
#[tauri::command]
pub async fn fetch_news(
    config: State<'_, Config>,
    state: State<'_, Mutex<NewsCache>>,
) -> Result<Vec<NewsItem>> {
    let mut news_cache = state.lock().await;

    // Check if the cache is empty or stale (older than 1 hour)
    if news_cache.last_updated.is_none()
        || news_cache.last_updated.unwrap() < Utc::now().timestamp() - 3600
    {
        let new_news = refresh_news(config).await.map_err(|err| err.to_string())?;

        // Add new items to the cache, avoiding duplicates (by id)
        for item in new_news {
            news_cache.items.insert(item.id, item);
        }

        // Update the last_updated timestamp
        news_cache.last_updated = Some(Utc::now().timestamp());
    }

    // Convert the HashMap values (news items) back to a Vec and return
    Ok(news_cache.items.values().cloned().collect())
}
