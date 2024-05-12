import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty } from '../redux/productSlice/actions';
import { deleteFromCart } from '../redux/cartSlice/actions';

const CartCard = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    const correspondingProduct = cart.productInfo.find(
      (product) => product.id === id
    );

    dispatch(deleteFromCart(correspondingProduct.id));
    dispatch(increaseQty(correspondingProduct.id, correspondingProduct.qty));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="cartImage" src={product.data.image} alt="product" />

        <div className="space-y-2">
          <h4 className="cartName">{product.data.name}</h4>
          <p className="cartCategory">{product.data.category}</p>
          <p>
            BDT <span className="cartPrice">{product.data.price}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="removeFromCart"
          onClick={() => deleteHandler(product.id)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
