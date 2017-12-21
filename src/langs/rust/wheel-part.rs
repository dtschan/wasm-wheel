extern crate rand;

use rand::{thread_rng, Rng};

#[no_mangle]
pub fn name() -> *const u8 {
	let n = b"Rust\0";
	return n as *const u8;
}

#[allow(non_snake_case)]
#[no_mangle]
pub fn feelingLucky() -> i32 {
	return thread_rng().gen_range(0, 101);
}