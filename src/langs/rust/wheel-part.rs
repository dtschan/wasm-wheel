extern crate rand;

#[no_mangle]
pub fn name() -> *const u8 {
	let n = b"Rust\0";
	return n as *const u8;
}

#[allow(non_snake_case)]
#[no_mangle]
pub fn feelingLucky() -> i32 {
	return (((rand::random::<u8>() + 1) as f32) / 2.56).ceil() as i32;
}