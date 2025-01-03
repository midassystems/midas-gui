use crate::error::Result;
// use midas_client::historical::{Historical, RetrieveParams};

#[tauri::command]
pub async fn get_session_list() -> Result<()> {
    println!("Hello! You've been greeted from Rust!");
    Ok(())
}

#[tauri::command]
pub async fn get_session_data() -> Result<()> {
    println!("Hello! You've been greeted from Rust!");
    Ok(())
}
