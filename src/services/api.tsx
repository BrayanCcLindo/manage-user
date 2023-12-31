const API = "https://api.escuelajs.co";
const VERSION = "v1";

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id: string) => `${API}/api/${VERSION}/products/${id}/`,
    allproducts: `${API}/api/${VERSION}/products/`,
    getProducts: (limit: number, offset: number) =>
      `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/${VERSION}/products`,
    updateProducts: (id: number) => `${API}/api/${VERSION}/products/${id}/`,
    deleteProduct: (id: number) => `${API}/api/${VERSION}/products/${id}/`,
  },
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories/`,
    addCategory: `${API}/api/${VERSION}/categories/`,
    getCategoryItems: (id: number) =>
      `${API}/api/${VERSION}/categories/${id}/products/`,
    updateCategory: (id: string) => `${API}/api/${VERSION}/categories/${id}/`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload/`,
  },
};

export default endPoints;
