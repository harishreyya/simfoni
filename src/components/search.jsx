import { useState } from 'react';
import axios from 'axios';
import { LoadingSpinner } from './LoadingSpinner';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const fetchData = async (searchKeyword) => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://wayfair.p.rapidapi.com/products/search',
      params: {
        keyword: searchKeyword,
      },
      headers: {
        'X-RapidAPI-Key': '92a86a1fd9msh31181e91e5f8351p100809jsndc3de2c0bed0',
        'X-RapidAPI-Host': 'wayfair.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setSearchResults(response.data.response.categoryAppData.categories);
    } catch (error) {
      console.error(error);
      alert("Result Not found")
    } finally {
      setLoading(false);
      
    }
  };

  const handleSearch = () => {
    setSearchResults([])
    fetchData(searchTerm);
  };

  return (
    <div>
      <div className='search-wrap'>
        <br />
        <div className='flex search-input-wrap'>
      <input
      className='search-bar'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='button flex' onClick={handleSearch}>Search</button>
      </div>
      <br />
      </div>
    
   <div className='search-result-wrap'>
      {Object.keys(searchResults).map((categoryId,index) => (
          <div className='search-result-card' key={index}>
            <img src="https://images.pexels.com/photos/5760872/pexels-photo-5760872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <p className='display-name'><b>{searchResults[categoryId].displayName}</b></p>
            <div className='grey'>{searchResults[categoryId].ireId}</div>
            <p ><b className='price'>$0.83</b><span className='grey'>/each</span></p>
            <div><b className='green'>Saving % 4.06</b></div>
            <div><b>Supplier:</b> Supplier</div>
            <div><b>Delivery by:</b> 24 dec 2023</div>
            <button className='button flex cart'>Add to Cart</button>
          </div>
        ))}
        </div>
       
        {loading && <LoadingSpinner />}
    </div>
  );
};

