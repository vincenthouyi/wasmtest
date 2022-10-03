use base64::{decode, encode};
use std::string::String;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn base64_encode(cleartext: String) -> String {
    encode(cleartext)
}
