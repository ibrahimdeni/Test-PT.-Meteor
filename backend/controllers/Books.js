import Books from "../models/BookModel.js";

export const addBooks = async (req, res) => {
  const { name, author, publisher, published, pages, isbn } = req.body;
  try {
    await Books.create({
      name: name,
      author: author,
      publisher: publisher,
      published: published,
      pages: pages,
      isbn: isbn,
      status: "inactive",
    });
    res.json({ msg: "Succeed Adding Book" });
  } catch (error) {
    console.log(error);
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Books.findAll({});
    res.json(books);
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (req, res) => {
  try {
    const books = await Books.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(books);
  } catch (error) {
    console.log(error);
  }
};

export const updateBooks = async (req, res) => {
  try {
    await Books.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "The Book has just been Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Books.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Succeed Deleting the Book" });
  } catch (error) {
    console.log(error.message);
  }
};
