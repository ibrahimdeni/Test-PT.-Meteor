import Categories from "../models/CategoryModel.js";

export const addCategories = async (req, res) => {
  const { name } = req.body;
  try {
    await Categories.create({
      name: name,
    });
    res.json({ msg: "Succeed Adding Category" });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll({});
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const categories = await Categories.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (req, res) => {
  try {
    await Categories.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "The Category has just been Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Categories.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Succeed Deleting the Category" });
  } catch (error) {
    console.log(error.message);
  }
};
