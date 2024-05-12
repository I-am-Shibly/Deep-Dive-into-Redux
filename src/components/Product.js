import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice/actions';
import { decreaseQty } from '../redux/productSlice/actions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const cartAddHandler = (id) => {
    dispatch(addToCart(id, 1));
    dispatch(decreaseQty(id, 1));
  };

  const {
    id,
    data: { productName, category, image, price, qty },
  } = product || {};

  return (
    <div className="productCard">
      <img className="productImage" src={image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="productName">{productName}</h4>
        <p className="productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="quantity">{qty}</span>
          </p>
        </div>
        <button
          className="btnAddToCart"
          onClick={() => cartAddHandler(id)}
          disabled={product.data.qty === 0}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
