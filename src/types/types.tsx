interface Category {
  creationAt: string;
  id: number;
  image: string;
  name: string;
  updatedAt: string;
}
interface ProductType {
  category: Category;
  creationAt: string;
  description: string;
  id: number;
  images: string[];

  price: number;
  title: string;
  updatedAt: string;
}
interface AlertOptionsType {
  active: boolean;
  message: string;
  type: string;
  autoClose: boolean;
}

interface ParamsType {
  id: string;
}

interface UserType {
  email: null | string;
  imageUrl: null | string;
  name: null | string;
  avatar: null | string;
}

interface FormProductType {
  title: string | FormDataEntryValue | null;
  price: number | string | FormDataEntryValue | null;
  description: string | FormDataEntryValue | null;
  categoryId: number | string | FormDataEntryValue | null;
  images: string[];
}
