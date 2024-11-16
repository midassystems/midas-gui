use crate::error::Result;
// use midas_client::historical::{Historical, RetrieveParams};

#[tauri::command]
pub async fn getSessionList() -> Result<()> {
    println!("Hello! You've been greeted from Rust!");
    Ok(())
}

#[tauri::command]
pub async fn getSessionData() -> Result<()> {
    println!("Hello! You've been greeted from Rust!");
    Ok(())
}
