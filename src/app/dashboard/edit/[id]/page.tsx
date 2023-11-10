"use client";

import EditFormProduct from "@/components/editFormProduct";
import FormProduct from "@/components/formProducts";
import endPoints from "@/services/api";
import axios from "axios";
import { useEffect, useState } from "react";

interface ParamsType {
  id: string;
}

function Id({ params }: { params: ParamsType }) {
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  const { id } = params;
  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    try {
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return <EditFormProduct product={product} />;
}

export default Id;
