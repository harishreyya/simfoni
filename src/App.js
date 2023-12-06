import { Categories } from "./components/categories";
import './App.css'
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Products } from "./components/Product";
import { HomePage } from "./components/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CatergoryProducts } from "./components/categoryproducts";

function App() {
  return (
    <div className="App">
      
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/productCategories" element={<CatergoryProducts/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
