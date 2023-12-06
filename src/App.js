import { Categories } from "./components/categories";
import './App.css'
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Products } from "./components/Product";
import { HomePage } from "./components/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TopMenu } from "./components/TopMenu";
import { ParentSharing } from "./components/parentSharing";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>
      <TopMenu/>
     
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/categories" element={<ParentSharing/>}/>
      <Route path="/products" element={<Products/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
