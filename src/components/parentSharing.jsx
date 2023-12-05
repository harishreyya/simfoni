import { useState } from 'react';
import { Categories } from './categories';
import { CatergoryProducts } from './categoryproducts';

export const ParentSharing = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div>
      <Categories onSelectCategory={handleSelectCategory} />
      <CatergoryProducts categoryId={selectedCategoryId} />
    </div>
  );
};

