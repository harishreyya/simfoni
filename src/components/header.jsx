import { FaShoppingCart, FaHeart, FaWallet ,FaUser,FaBars} from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';

export const Header = () =>{
    return  <header className='flex header-wrap'>
    <div className='flex header-left'>
    <FaBars size={22} color="black" />
    <img src="https://simfoni.com/wp-content/uploads/2021/03/Artboard-1-2.png" alt="" />
    <p>Catelog</p>
    <p>BuyDesk</p>
    <p>History</p>
    <p>Dashboard</p>
    </div>
    <div className='flex header-right'>
    <FaShoppingCart size={26}/>
<FaHeart size={26} />
<FaWallet size={26} /> 
<IoNotificationsOutline size={26} />
<FaUser size={26} />
    </div>
</header>
}