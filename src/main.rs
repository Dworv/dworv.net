#[macro_use] extern crate rocket;

#[get("/")]
fn home() -> rocket::response::content::RawHtml<String> {
    rocket::response::content::RawHtml(String::from(r#"<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css"
</head>
<body>
<h1>My First Heading</h1>
<p>My first paragraph.</p>
</body>
</html>"#))
}

#[get("/style.css")]
fn style() -> rocket::response::content::RawCss<String> {
    rocket::response::content::RawCss(std::fs::read_to_string("style.css").unwrap())
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![home, style])
}