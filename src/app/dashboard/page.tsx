"use client";
import Chart from "@/commons/chart";
import { useAuth } from "@/hooks/useAuth";
import UseFetch from "@/hooks/useFetch";
import endPoints from "@/services/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PRODUCT_LIMIT, PRODUCT_OFFSET } from "../../constants/constants";

export default function Dashboard() {
  const auth = useAuth();
  const router = useRouter();
  if (!auth.userinfo) {
    router.push("/log-in");
  }
  const numberData = 5;
  const [pagination, setPagination] = useState([0, 5]);
  const [initialValue, finalvalue] = pagination;

  const data = UseFetch(
    endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)
  );

  const copyData = structuredClone(data);
  const dataPagination = copyData?.slice(initialValue, finalvalue);

  const handleNextButton = () => {
    setPagination(([startPage, endPage]) => [
      startPage + numberData,
      endPage + numberData,
    ]);
  };
  const handlePrevButton = () => {
    setPagination(([startPage, endPage]) => [
      startPage - numberData,
      endPage - numberData,
    ]);
  };

  const categoryLabel = dataPagination?.map(
    (product: ProductType) => product.category
  );
  const categoryCount = categoryLabel?.map(
    (category: Category) => category.name
  );
  const countOcurrences = (arr: string[]) =>
    arr?.reduce((prev: any, curr) => {
      return (prev[curr] = ++prev[curr] || 1), prev;
    }, {});

  const products = {
    datasets: [
      {
        label: "Categories",
        data: countOcurrences(categoryCount),
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
      },
    ],
  };

  return (
    <>
      <div className="mb-8 mt-2">
        <Chart chartData={products} />
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {auth.userinfo &&
                    dataPagination?.map((product: ProductType) => (
                      <tr key={`Product-item-${product.id}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <Image
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full"
                                src={product.images[0]}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {product.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {product.category.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            ${product.price}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p>Mostrando 5 items de {data?.length}</p>
              <div className="flex gap-4">
                {initialValue > 0 && (
                  <button
                    onClick={handlePrevButton}
                    className="px-3 py-2 rounded-md bg-gray-900 text-white"
                  >
                    Anterior
                  </button>
                )}
                {dataPagination?.length === numberData && (
                  <button
                    onClick={handleNextButton}
                    className="px-3 py-2 rounded-md bg-gray-900 text-white"
                  >
                    Siguiente
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
