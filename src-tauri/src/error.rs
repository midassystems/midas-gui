use thiserror::Error;

#[derive(Debug, Error)]
pub enum Error {
    // #[error("Api Error: {0}")]
    // ApiError(String),
    #[error("Midas Api Error: {0}")]
    MidasApiError(#[from] midas_client::error::Error),
}
pub type Result<T> = std::result::Result<T, String>;
