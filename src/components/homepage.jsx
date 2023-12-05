import { AllItems } from "./allitems"
import { Header } from "./header"
import  {Search } from "./search"
import { Products } from "./Product"
import { Categories } from "./categories"
import { ParentSharing } from "./parentSharing"


export const HomePage = ()=>{
    return <div>
       
        {/* <Search/> */}
           {/* <Products/> */}
         {/* <ParentSharing/> */}
           <div className="home-body">
            
           <AllItems/>
           </div>
           {/* <Categories/> */}
    </div>
}