import { Categories } from "./components/categories";
import './App.css'
import { Search } from "./components/search";
import { Products } from "./components/Product";
import { HomePage } from "./components/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      {/* <Header/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/categories" element={<Categories/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
