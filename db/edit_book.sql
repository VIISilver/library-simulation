update book_inventory
set title = $1, genre = $2, author = $3, description = $4, img = $5
where book_id = $6;