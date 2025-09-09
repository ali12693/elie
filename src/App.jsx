import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopHeader from "./components/topHeader";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Rectangle from "./components/Rectangle";
import BathAndBody from "./components/BathAndBody";
import BedAndBath from "./components/BedAndBath";
import ProductCollection from "./components/ProductCollection";
import DiscountOffers from "./components/DiscountOffers";
import Subscribe from "./components/Subscribe";
import Footer from "./components/footer";
import TrendingProductsSlider from "./components/TrendingProductsSlider";
import TrendingProduct from "./components/TrendingProduct";

import NotFound from "./components/NotFound";
import ProductsPage from "./Pages/ProductsPage";
import AddToCartSection from "./Pages/AddToCartSection";
import ProductsSummary from "./Pages/productsSummary";
import SignUp from "./components/SignUp";
import ProtechtedRoutes from "./components/ProtechtedRoutes";
import ShowPopUpOfLogOut from "./components/ShowPopUpTOLogOut";
import { ShopContext } from "./DataContext";
           
const MainLayout = ({ children }) => (
 
  <>
    <TopHeader />
    <Header />
    {children}
    <Footer />
  </>
);

const App = () => {
   const{ShowPopUptoLogOut}=useContext(ShopContext)
   
   
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/login" element={<SignUp />} />

      
        <Route
          path="/"
          element={
            <ProtechtedRoutes>
              <MainLayout>
               {ShowPopUptoLogOut&& <ShowPopUpOfLogOut/>}
                <Navbar />
                <Rectangle />
                <BathAndBody />
                <BedAndBath />
                <TrendingProductsSlider />
                <TrendingProduct />
                <ProductCollection />
                <DiscountOffers />
                <Subscribe />
              </MainLayout>
            </ProtechtedRoutes>
          }
        />

        <Route
          path="/productspage"
          element={
            <ProtechtedRoutes>
              <MainLayout>
                <ProductsPage />
              </MainLayout>
            </ProtechtedRoutes>
          }
        />

        <Route
          path="/addtocart"
          element={
            <ProtechtedRoutes>
              <MainLayout>
                <AddToCartSection />
              </MainLayout>
            </ProtechtedRoutes>
          }
        />

        <Route
          path="/productssummary"
          element={
            <ProtechtedRoutes>
              <MainLayout>
                <ProductsSummary />
              </MainLayout>
            </ProtechtedRoutes>
          }
        />

        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
