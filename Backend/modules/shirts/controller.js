const db = require("../../models");
const Shirts = db.Shirts;

/*Get Controller */
exports.getShirts = async (req, res) => {
  try {
    const shirts = await Shirts.findAll({attributes: { exclude: ["createdAt","updatedAt"] }});
    if (Shirts.count() === 0) {
      return res.status(404).json({ message: "Not Found" });
    } else {
      return res.status(200).send(shirts);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/*Post Controller */
exports.postShirts = async (req, res) => {
  try {
    let { price, picture, colour, size, name, quantity } = req.body;
    let shirt = { price, picture, colour, size, name, quantity };
    await Shirts.create(shirt);
    res.status(201).json({ message: "Created Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
