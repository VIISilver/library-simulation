module.exports = {

    addBook: (req, res, next) => {
        const db = req.app.get('db');
        const { title, genre, author, description, img } = req.body;

        db.add_book([title, genre, author, description, img])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    getBooks: (req, res, next) => {
        const db = req.app.get('db');

        db.get_books()
            .then((books) => res.status(200).send(books))
            .catch(() => res.status(200).send());
    },

    editBook: (req, res, next) => {
        const db = req.app.get('db');
        const { title, genre, author, description, img } = req.body;
        console.log('editBook fired')

        db.edit_book([title, genre, author, description, img])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    }
}