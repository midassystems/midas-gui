use crate::error::Result;
use midas_client::{historical::Historical, trading::Trading};
use serde::Deserialize;
use std::path::PathBuf;
use std::sync::Arc;

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
pub struct Config {
    pub common: CommonConfig,
    pub dashboard: DashboardConfig,
}

impl Config {
    fn from_toml(config_path: &PathBuf) -> Result<Self> {
        let config_str = std::fs::read_to_string(&config_path).unwrap_or_else(|_| {
            panic!(
                "Config file not found: {}. Please ensure it exists.",
                config_path.display()
            )
        });

        let config: Config = toml::from_str(&config_str).expect("Failed to parse config file");
        Ok(config)
    }
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
pub struct CommonConfig {
    pub log_level: String,
    pub historical_url: String,
    pub trading_url: String,
    pub api_key: String,
}

impl Default for CommonConfig {
    fn default() -> Self {
        CommonConfig {
            log_level: "info".to_string(),
            historical_url: "http://127.0.0.1:8080".to_string(),
            trading_url: "http://127.0.0.1:8081".to_string(),
            api_key: "api_key".to_string(),
        }
    }
}

#[derive(Debug, Deserialize, Clone, PartialEq, Eq)]
pub struct DashboardConfig {
    pub window_title: String,
    pub default_theme: String,
    pub refresh_interval: u64,
    pub finnhub_url: String,
    pub finnhub_key: String,
    pub num_charts: u8,
    pub chart_symbols: Vec<String>,
}

impl Default for DashboardConfig {
    fn default() -> Self {
        DashboardConfig {
            window_title: "Dashboard".to_string(),
            default_theme: "dark".to_string(),
            refresh_interval: 60,
            finnhub_url: "https://finnhub.io/api/v1/news?category=general&token={finnhub_key}"
                .to_string(),
            finnhub_key: "api_key".to_string(),
            num_charts: 4,
            chart_symbols: vec![
                "FOREXCOM:SPXUSD".to_string(),
                "CBOT:ZM1!".to_string(),
                "CME:HE1!".to_string(),
                "CBOT:ZC1!".to_string(),
            ],
        }
    }
}

#[allow(dead_code)]
pub struct Context {
    config: Config,
    historical_client: Arc<Historical>,
    trading_client: Arc<Trading>,
}

impl Context {
    pub fn init() -> Result<Self> {
        let config_path = Self::config_path();
        let config = Config::from_toml(&config_path)?;
        let historical_client = Historical::new(&config.common.historical_url);
        let trading_client = Trading::new(&config.common.trading_url);

        Ok(Context {
            config,
            historical_client: Arc::new(historical_client),
            trading_client: Arc::new(trading_client),
        })
    }
    pub fn get_trading_client(&self) -> Arc<Trading> {
        // Lock the client asynchronously
        Arc::clone(&self.trading_client)
    }
    pub fn get_historical_client(&self) -> Arc<Historical> {
        // Lock the client asynchronously
        Arc::clone(&self.historical_client)
    }

    pub fn get_config(&self) -> Config {
        self.config.clone()
    }
    fn config_path() -> PathBuf {
        let config_path: PathBuf;

        if cfg!(test) {
            // This works for unit tests
            config_path = PathBuf::from("tests/config/gui-config.toml");
        } else if std::env::var("CARGO_MANIFEST_DIR").is_ok() {
            // This works for integration tests
            let manifest_dir = std::env::var("CARGO_MANIFEST_DIR").unwrap();
            config_path = PathBuf::from(format!("{}/config_real.toml", manifest_dir));
        } else {
            // Check if we're in a development environment (optional)
            if std::env::var("RUST_ENV").unwrap_or_default() == "dev" {
                let exe_dir = std::env::current_exe().expect("Unable to get executable directory");
                let exe_dir = exe_dir
                    .parent()
                    .expect("Unable to find parent directory of executable");

                // Attempt to find the config file in the same directory as the executable
                config_path = exe_dir.join("../../../config_real.toml");
            } else {
                // For production, check the user's config directory
                let home_dir = std::env::var("HOME").expect("Unable to get HOME directory");
                config_path = PathBuf::from(format!("{}/.config/midas/gui-config.toml", home_dir));
            }
        }
        config_path
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_config_from_toml() -> Result<()> {
        let config_path = PathBuf::from("tests/config/gui-config.toml");

        // Test
        let _ = Config::from_toml(&config_path)?;

        Ok(())
    }

    #[tokio::test]
    async fn test_context_init() -> Result<()> {
        let config_path = PathBuf::from("tests/config/gui-config.toml");
        let config = Config::from_toml(&config_path)?;

        // Test
        let context = Context::init()?;

        // Validate
        assert_eq!(config, context.config);

        Ok(())
    }
}
