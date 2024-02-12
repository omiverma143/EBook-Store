import { ProductCard } from "../../../Components";
import { useFetch } from "../../../Hooks/useFetch";

export const FeaturedProducts = () => {
 
  const url = "http://localhost:8000/featured_products";
  const {result:products,isLoading} =useFetch(url)
  

  return (
    <section className="my-20">
      {isLoading && (<h1> Loading ....</h1>)}
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};
