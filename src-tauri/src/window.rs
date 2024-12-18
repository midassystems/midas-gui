use crate::error::Result;
use std::sync::Mutex;
use tauri::AppHandle;
use tauri::{Manager, Wry};
use tauri::{WebviewUrl, WebviewWindowBuilder};

pub struct CookieManager {
    pub cookies: Mutex<Option<String>>,
}

#[tauri::command]
pub fn store_cookies(app: AppHandle<Wry>, cookies: String) {
    let state = app.state::<CookieManager>();
    println!("Cookies stored: {}", cookies);
    *state.cookies.lock().unwrap() = Some(cookies);
}

// #[tauri::command]
// pub fn apply_cookies(window: tauri::Window) {
//     let state = window.state::<CookieManager>();
//     if let Some(cookies) = state.cookies.lock().unwrap().clone() {
//         let script = format!("document.cookie = '{}';", cookies);
//         window.eval(&script).unwrap();
//     }
// }

#[tauri::command]
pub fn seperate_window(app_handle: AppHandle, url: String, window_label: String) -> Result<()> {
    // Check if a window with the label already exists
    if app_handle.get_webview_window(&window_label).is_some() {
        // println!("Window with label '{}' already exists!", window_label);
        return Ok(()); // Exit early if the window exists
    }

    // Create a new window to display the URL content
    let new_window = WebviewWindowBuilder::new(
        &app_handle,
        window_label,
        WebviewUrl::External(url.parse().unwrap()), // Load external URL directly
    )
    .title("Midas")
    .resizable(true)
    .inner_size(1000.0, 800.0)
    .decorations(true)
    .always_on_top(true)
    .build()
    .unwrap();

    new_window.show().unwrap();
    Ok(())
}
