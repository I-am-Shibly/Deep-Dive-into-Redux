import React from 'react';
import { useSelector } from 'react-redux';

const Bill = ({ cartItems }) => {
  const cart = useSelector((state) => state.cart);

  let totalPrice = cart.productInfo.reduce((total, product) => {
    const correspondingProduct = cartItems.find(
      (item) => item.id === product.id
    );

    if (correspondingProduct) {
      return total + product.qty * Number(correspondingProduct.data.price);
    }

    return total;
  }, 0);

  return (
    <div className="billDetailsCard">
      <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
      <div className="space-y-4">
        {/* sub total */}
        {cart.productInfo.map((product) => {
          const correspondingProduct = cartItems.find(
            (item) => product.id === item.id
          );

          if (correspondingProduct) {
            return (
              <div className="flex items-center justify-between">
                <p>Sub Total {correspondingProduct.data.name}</p>
                <p>
                  BDT{' '}
                  <span className="subtotal">
                    {product.qty * Number(correspondingProduct.data.price)}
                  </span>
                </p>
              </div>
            );
          }

          return (
            <div className="flex items-center justify-between">Nothing</div>
          );
        })}

        {/* Total */}
        <div className="flex items-center justify-between pb-4">
          Total: {totalPrice}
        </div>
        <button className="placeOrderbtn">place order</button>
      </div>
    </div>
  );
};

export default Bill;
