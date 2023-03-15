const products = require("../data/products");

const getProducts = async (request, response, next) => {
  try {
    response.status(200).send({ data: products });
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const getProduct = async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const product = products.find((item) => id === item.id);
    if (id && product) {
      response.status(200).send({ data: product });
    } else {
      throw new Error("Cann't found product by id");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const addProduct = async (request, response, next) => {
  try {
    const currentProduct = request.body;
    if (
      currentProduct.name &&
      currentProduct.price &&
      currentProduct.properties &&
      currentProduct.stock &&
      currentProduct.description
    ) {
      const product = {
        ...currentProduct,
        id: Math.floor(Math.random() * 1000000),
      };
      products.push(product);
      response.status(200).send({ data: product });
    } else {
      throw new Error("Cann't found product by id");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const deleteProduct = async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const index = products.findIndex((item) => id === item.id);
    if (id && index > -1) {
      products.splice(index, 1);
      response.status(200).send({ status: "deleted" });
    } else {
      throw new Error("Cann't found product by id");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const updateProduct = async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const currentProduct = request.body;
    const product = products.find((item) => id === item.id);
    if (id && product) {
      const updatedProduct = {
        ...product,
        ...currentProduct,
        id: product.id,
      };
      const index = products.findIndex((item) => id === item.id);
      products.splice(index, 1);
      products.push(updatedProduct);
      response.status(200).send({ status: "updated", data: updatedProduct });
    } else {
      throw new Error("Cann't found product by id");
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
