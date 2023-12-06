import { IoNotificationsOutline,IoCartOutline,IoSearchOutline, IoPersonOutline, IoHeartOutline, IoWalletOutline,IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const Header = () =>{
    return  <header className='flex header-wrap'>
    <div className='flex header-left'>
    <IoMenuOutline size={28} stroke="grey" />
  
    <img src="https://simfoni.com/wp-content/uploads/2021/03/Artboard-1-2.png" alt="" />
    <Link to={"/"}> 
    <p className='teal'>Home</p></Link>
    <p>BuyDesk</p>
    <p>History <span className='drop-icon'> ▼</span></p>
    <p>Dashboard</p>
    </div>
    <div className='flex header-right'>
        
        <input type="text" />
        <IoSearchOutline className='search-icon' size={18} stroke='grey'/>
        <br />
        <button className='help-btn flex'>Help</button>
        <br />
    <IoCartOutline size={26} stroke='grey'/>
<IoHeartOutline size={26} stroke='grey'/>
<IoWalletOutline size={26} stroke='grey'/> 
<IoNotificationsOutline size={26} stroke='grey' />
<IoPersonOutline size={26} stroke='grey' />
<img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_2fd3e8.svg" alt="" />
<div className='grey'>Sara Green</div>
    </div>
</header>
}