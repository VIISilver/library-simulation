create table book_inventory(
    book_id serial primary key,
    in_stock boolean,
    title text,
    genre text,
    author text,
    description text,
    img text
)