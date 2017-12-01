create table book_shelf(
    book_shelf_id serial primary key,
    cart_id integer,
    user_id integer,
    book_id integer
)