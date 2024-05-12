import React from 'react';
import CartCard from '../CartCard';
import Bill from '../Bill';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);

  const productInCart = products.filter((storeProduct) =>
    cartItems.productInfo.some(
      (cartProduct) => cartProduct.id === storeProduct.id
    )
  );

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {productInCart.length > 0
              ? productInCart.map((product) => (
                  <CartCard product={product} key={product.id} />
                ))
              : 'No item in cart!'}
          </div>

          <Bill cartItems={productInCart} />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
