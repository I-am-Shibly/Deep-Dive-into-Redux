import React from 'react';
import Product from '../Product';
import InputForm from '../InputForm';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const products = useSelector((state) => state.products);

  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="productContainer">
          {products.length > 0
            ? products.map((product) => (
                <Product product={product} key={product.id} />
              ))
            : 'No product found'}
        </div>

        <div>
          <InputForm />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
