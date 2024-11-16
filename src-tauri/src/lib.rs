mod backtest;
mod context;
mod error;
mod live;
mod market;
mod news;
mod window;

use backtest::{
    get_backtest_by_id, get_backtest_list, get_current_backtest, BacktestCache, BacktestList,
    CurrentBacktestId,
};
use context::Context;
use live::{getSessionData, getSessionList};
use market::{load_chart_layout, load_layout, update_chart_layout, Charts};
use news::{fetch_news, NewsCache};
use tauri::Manager;
use tokio::sync::Mutex;
use window::{seperate_window, store_cookies};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let context = Context::init().expect("Error loading config.");

    tauri::Builder::default()
        .manage(context.get_config()) // Make the configuration available as state
        .manage(context.get_historical_client())
        .manage(context.get_trading_client())
        .manage(Mutex::new(BacktestCache::new()))
        .manage(Mutex::new(BacktestList::new()))
        .manage(Mutex::new(NewsCache::default()))
        .manage(Mutex::new(None as CurrentBacktestId))
        .manage(Mutex::new(Charts::default()))
        .invoke_handler(tauri::generate_handler![
            get_backtest_list,
            get_backtest_by_id,
            get_current_backtest,
            getSessionList,
            getSessionData,
            fetch_news,
            load_layout,
            update_chart_layout,
            load_chart_layout,
            seperate_window,
            store_cookies
        ])
        .setup(|app| {
            let handle = app.handle(); // Get the AppHandle
            let window = handle.get_webview_window("main").unwrap(); // Use handle to get the window
            window.set_title("Midas")?;

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
