exports.createProduct = (req, res, next) => {
  const nama = req.body.nama;
  const price = req.body.price;

  res.json({
    message: "Create Product Succes!!!",
    data: [
      {
        id: 1,
        nama: nama,
        price: price,
      },
    ],
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "Get All Products Succes",
    data: [
      {
        id: 1,
        nama: "Nasi Padang",
        price: 8000,
      },
    ],
  });
  next();
};
