import { useState } from "react";
import { ProductCard } from "../../Components";
import { useFetch } from "../../Hooks/useFetch";
import { FilterBar } from "./components/FilterBar";
import { useSearchParams } from "react-router-dom";

export const ProductsList = () => {
  const [showFilterBar, setShowFilterBar] = useState(false);

  // using React-router-dom Hook
  const [parameters] = useSearchParams();
  const searchQ = parameters.get("q");
  console.log(searchQ);

  // URLSearchParams() :Returns a URLSearchParams object instance.
  // const searhQuery= new URLSearchParams('q');
  // console.log("searhQuery",searhQuery);

  const url = searchQ
    ? `http://localhost:8000/products?q=${searchQ}`
    : "http://localhost:8000/products";
  console.log("url",url);
  const { result: products, isLoading } = useFetch(url);

  return (
    <main className=" bg-white dark:bg-gray-900">
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({products && products.length})
          </span>
          <span>
            <button
              onClick={() => setShowFilterBar(!showFilterBar)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {isLoading && <h1>Product is Loading ...</h1>}
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        {showFilterBar && <FilterBar setShowFilterBar={setShowFilterBar} />}
      </section>
    </main>
  );
};
