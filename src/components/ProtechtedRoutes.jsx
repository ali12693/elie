import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ShopContext } from "../DataContext";

const ProtechtedRoutes = ({ children }) => {
  const { IsAuthenticated } = useContext(ShopContext);

  if (!IsAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtechtedRoutes;
