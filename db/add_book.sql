insert into book_inventory(
    in_stock,
    title,
    genre,
    author,
    description,
    img
)
values(
    true,
    $1,
    $2,
    $3,
    $4,
    $5
)