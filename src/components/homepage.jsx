import { AllItems } from "./allitems"
import { Header } from "./header"
// import  {Search } from "./search"
import { Products } from "./Product"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export const HomePage = ()=>{
    return <div>
       <Header/>
        {/* <Search/> */}
           {/* <Products/> */}
           <div className="home-body">
            <BrowserRouter>
            <Routes>
        <Route path='/products' element={<Products/> }/>
      </Routes>
            
            </BrowserRouter>
           <AllItems/>
           </div>
           
    </div>
}