use base64::{decode, encode};
use std::string::String;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn base64_encode(cleartext: String) -> String {
    encode(cleartext)
}

#[wasm_bindgen]
pub fn base64_decode(encoded: String) -> String {
    decode(encoded.as_bytes())
        .map(|t| String::from_utf8(t).unwrap_or_else(|e| e.to_string()))
        .unwrap_or_else(|e| e.to_string())
}
