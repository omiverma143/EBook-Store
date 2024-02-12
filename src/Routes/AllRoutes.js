import { Route, Routes } from "react-router-dom";
import { HomePage, ProductsList,ProductDetail } from "../pages/Index";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products/" element={<ProductsList />} />
        <Route path="product/:id" element={<ProductDetail />}/>
      </Routes>
    </>
  );
};
