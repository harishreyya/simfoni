import { useState } from 'react';
import axios from 'axios';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async (searchKeyword) => {
    const options = {
      method: 'GET',
      url: 'https://wayfair.p.rapidapi.com/products/search',
      params: {
        keyword: searchKeyword,
        sortby: '0',
        curpage: '1',
        itemsperpage: '48',
      },
      headers: {
        'X-RapidAPI-Key': '62ef5d8136msh78832de175babeap1f7b3ejsn8a47728230a4',
        'X-RapidAPI-Host': 'wayfair.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setSearchResults(response.data.response.categoryAppData.categories);
      console.log(response.data.response.categoryAppData.categories)
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    fetchData(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
      {Object.keys(searchResults).map((categoryId) => (
          <div key={categoryId}>
            {searchResults[categoryId].displayName}
          </div>
        ))}
        </div>
    </div>
  );
};

