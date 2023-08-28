import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Crud/action';
import styled from 'styled-components';
import { getProducts } from '../Redux/GetProducts/action';
import { useToast } from '@chakra-ui/react';

const AddForm = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCompany, setProductCompany] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productColors, setProductColors] = useState([]);
  const [productHighlights, setProductHighlights] = useState([]);

  const dispatch = useDispatch();
  const toast=useToast()

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name: productName,
      category: productCategory,
      price: productPrice,
      company: productCompany,
      image: [productImage],
      color: productColors,
      Highlights: productHighlights,
    };

    dispatch(addProduct(productData)).then(()=>{
      toast({
        title: 'Product Add Successful',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
       dispatch(getProducts())
    });
    // Reset form fields
    setProductName('');
    setProductCategory('');
    setProductPrice('');
    setProductCompany('');
    setProductImage('');
    setProductColors([]);
    setProductHighlights([]);
  };

  return (
    <FormContainer className='addForm'>
      <h1>Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <label >Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <label >Product Category:</label>
        <input
          type="text"
          id="productCategory"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          required
        />

        <label >Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />

        <label >Product Company:</label>
        <input
          type="text"
          id="productCompany"
          value={productCompany}
          onChange={(e) => setProductCompany(e.target.value)}
          required
        />

        <label >Product Image URL:</label>
        <input
          type="url"
          id="productImage"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
          required
        />

        <label >Product Colors (Comma-separated):</label>
        <input
          type="text"
          id="productColors"
          value={productColors}
          onChange={(e) => setProductColors(e.target.value.split(','))}
          required
        />

        <label >Product Highlights (Line-separated):</label>
        <textarea
          id="productHighlights"
          value={productHighlights.join('\n')}
          onChange={(e) => setProductHighlights(e.target.value.split('\n'))}
          required
        />

        <SubmitButton type="submit">Add Product</SubmitButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #a29d9d;
  font-weight: bold;

   h1{
    color: white;
    background-color: black;
   }
   input {
    border-radius: 5px;
  }
  textarea{
    border-radius: 5px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
  /* * {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}
*/
`; 

export default AddForm;
