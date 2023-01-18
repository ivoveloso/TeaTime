import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ProductCategoryMain from "./pages/ProductCategoryMain.js";
import ModernTea from "./pages/ModernTea.js";
import NotFound from "./pages/NotFound";
import "./App.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <div className="flex-column justify-center align-center min-100-vh bg-primary"> */}
        <div style={{ height: "100%" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/productmain" element={<ProductCategoryMain />} />
            <Route path="/moderntea" element={<ModernTea />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
