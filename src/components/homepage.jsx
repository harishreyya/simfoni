import { AllItems } from "./allitems"
import { Header } from "./header"
import  {Search } from "./search"
import { Products } from "./Product"
import { Categories } from "./categories"
import { ParentSharing } from "./parentSharing"


export const HomePage = ()=>{
    return <div>
       
       
           <div className="home-body">
            <ParentSharing/>
            
           <AllItems/>
           </div>
    </div>
}