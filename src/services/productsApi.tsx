import axios from "axios";
import endPoints from "./api";

const addProduct = async (body: FormProductType) => {
  console.log(body, "body");

  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    endPoints.products.addProducts,
    body,
    config
  );
  return response.data;
};
const deleteProduct = async (id: number) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

const updateProduct = async (id: number, body: FormProductType) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };
  const response = await axios.put(
    endPoints.products.updateProducts(id),
    body,
    config
  );
  return response.data;
};

export { addProduct, deleteProduct, updateProduct };
