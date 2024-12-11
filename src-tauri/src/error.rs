use thiserror::Error;

#[derive(Debug, Error)]
pub enum Error {
    #[error("Midas Api Error: {0}")]
    MidasApiError(#[from] midas_client::error::Error),
}
pub type Result<T> = std::result::Result<T, String>;
