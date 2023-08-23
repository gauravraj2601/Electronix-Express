import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Crud/action';
// import style from './AddForm.css'; // Import your custom CSS file

const AddForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name: productName,
      price: productPrice,
      description: productDescription
    };

    dispatch(addProduct(productData));
    setProductName('');
    setProductPrice('');
    setProductDescription('');
  };

  return (
    <div className="add-form-container">
      <h1>Add Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
        
        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddForm;
