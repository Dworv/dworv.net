#[macro_use] extern crate rocket;

#[get("/")]
fn home() -> rocket::response::content::RawHtml<String> {
    rocket::response::content::RawHtml(std::fs::read_to_string("front/main/index.html").unwrap())
}

#[get("/style.css")]
fn style() -> rocket::response::content::RawCss<String> {
    rocket::response::content::RawCss(std::fs::read_to_string("front/main/style.css").unwrap())
}

#[get("/script.js")]
fn script() -> rocket::response::content::RawJavaScript<String> {
    rocket::response::content::RawJavaScript(std::fs::read_to_string("front/main/script.js").unwrap())
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![home, style, script])
}