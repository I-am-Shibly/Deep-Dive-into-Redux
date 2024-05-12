import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/productSlice/actions';

const InputForm = () => {
  const [productInfo, setProductInfo] = useState();
  const dispatch = useDispatch();

  const handleInputData = (field, value) => {
    setProductInfo({
      ...productInfo,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(productInfo));
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="addProductForm"
        onSubmit={handleSubmit}
      >
        {/* product name */}
        <div className="space-y-2">
          <label for="inputName">Product Name</label>
          <input
            className="addProductInput"
            id="inputName"
            type="text"
            onChange={(e) => handleInputData('productName', e.target.value)}
            required
          />
        </div>
        {/* product category */}
        <div className="space-y-2">
          <label for="inputCategory">Category</label>
          <input
            className="addProductInput"
            id="inputCategory"
            type="text"
            onChange={(e) => handleInputData('category', e.target.value)}
            required
          />
        </div>
        {/* product image url */}
        <div className="space-y-2">
          <label for="inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="inputImage"
            type="text"
            onChange={(e) => handleInputData('image', e.target.value)}
            required
          />
        </div>
        {/* price & quantity container */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* price */}
          <div className="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="inputPrice"
              onChange={(e) => handleInputData('price', e.target.value)}
              required
            />
          </div>
          {/* quantity */}
          <div className="space-y-2">
            <label for="inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="inputQuantity"
              onChange={(e) => handleInputData('qty', e.target.value)}
              required
            />
          </div>
        </div>
        {/* submit button */}
        <button type="submit" id="inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default InputForm;
