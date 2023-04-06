#[macro_use] extern crate rocket;

#[get("/download/<id>")]
fn download() -> &'static str {
    "Nice download"
}

#[post("/upload")]
fn upload() -> &'static str {
    "Nice upload"
}

#[delete("/delete/<id>")]
fn delete() -> &'static str {
    "Nice delete"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![download, upload])
}