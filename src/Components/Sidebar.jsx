import React, { useState,useEffect } from 'react';
import { styled } from 'styled-components';
// import {
//   Input,
//    RangeSlider,
//   RangeSliderTrack,
//   RangeSliderFilledTrack,
//   RangeSliderThumb,

// } from '@chakra-ui/react';
import { useSearchParams, useNavigate,useParams } from 'react-router-dom';


const Sidebar = ({minPrice, maxPrice}) => {
    const [searchParams, setSearchParams]= useSearchParams();
    const navigate = useNavigate();

    const [category, setCategory]= useState(searchParams.getAll("category") || [])
    const [company, setCompany] =useState(searchParams.getAll("company") || [])

    const {cate} = useParams();
    console.log(category)
    

    const [order, setOrder] = useState(searchParams.get("order") || "")

    
    /*

    const [range, setRange] = useState([
        searchParams.get("price_gte") || '',
        searchParams.get("price_lte") || ''
    ]);

  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  const handleMinInputChange = (value) => {
    const newMin = parseFloat(value);
    if (newMin < range[1]) {
      setRange([newMin, range[1]]);
    }
  };

  const handleMaxInputChange = (value) => {
    const newMax = parseFloat(value);
    if (newMax > range[0]) {
      setRange([range[0], newMax]);
    }
  };
*/

  const handleCategory=(e)=>{
        const {value}= e.target;
        let newAddedCategory=[...category];
        if(newAddedCategory.includes(value)){
            newAddedCategory=newAddedCategory.filter((el)=>el!==value);
        }
        else{
            newAddedCategory.push(value);
        }
        setCategory(newAddedCategory)
  }
  const handlecompany=(e)=>{
    const {value}= e.target;
    let newcompany=[...company];
    if(newcompany.includes(value)){
        newcompany= newcompany.filter((el)=>el!==value);
    }
    else{
        newcompany.push(value)
    }
    setCompany(newcompany)
}
const handleOrder=(e)=>{
  const {value}= e.target;
  setOrder(value);
}


const handleFiltering=()=>{
  let params={
    company
  }
    category && (params.category=category)
      order && (params.order=order)
          
      setSearchParams(params)
    // if(cate){
    //   category.push(cate)
    // }
}
 const handleClearFiltering=()=>{
  
  setCategory([]);
  setCompany([]);
  setOrder('');
  setSearchParams('');
  navigate('/product');
 }

// useEffect(()=>{
// cate!=="" && category.push(cate)
// // handleFiltering()
// },[cate])


  return (
    <DIV className='sideBar'>
      <div><h4>FILTERS</h4></div>
      <h4>Sort By Price</h4>
        <div  className='sort-price' onChange={handleOrder}>
               <input type="radio"
                        name='order'
                        value={""}
                        defaultChecked={order===""}
                    />
                    <label>Popularity</label>
                    <br />
                <input type="radio"
                        name="order" 
                        value={"asc"}
                        defaultChecked={order==="asc"}
                    />
                <label>Low To High</label>
                <br />
                <input type="radio"
                        name="order" 
                        value={"desc"}
                        defaultChecked={order==="desc"}
                />
                <label>High To Low</label>
        </div>
      {/* <div className='price'>
        <h4>Price Range</h4>
        
        <RangeSlider
          aria-label="price-range"
          min={minPrice}
          max={maxPrice+10000}
          step={1}
          defaultValue={range}
          value={range}
          onChange={handleSliderChange}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <div className='price-range'>
        <Input
          type="number"
          placeholder="Min"
          value={range[0]}
          onChange={(e) => handleMinInputChange(e.target.value)}
          
        />
        <Input
          type="number"
          placeholder="Max"
          value={range[1]}
          onChange={(e) => handleMaxInputChange(e.target.value)}
          
        />
        </div>
      </div> */}
      <div className='category-div'>
        <h4>CATEGORIES</h4> 
        <div>
            <input type="checkbox"
                    value={"camera"}
                    onChange={handleCategory}
                    checked={category.includes("camera")}
                />
            <label>Camera</label>
        </div>
        <div>
            <input type="checkbox"
                    value={"laptop"}
                    onChange={handleCategory}
                    checked={category.includes("laptop")}
                />
            <label>Laptop</label>
        </div>
        <div>
            <input type="checkbox"
                    value={"tablet"}
                    onChange={handleCategory}
                    checked={category.includes("tablet")}
                />
            <label>Tablet</label>
        </div>
        <div>
            <input type="checkbox"
                value={"smartphone"}
                onChange={handleCategory}
                checked={category.includes("smartphone")}
            />
            <label>Smartphone</label>
        </div>
        <div>
            <input type="checkbox"
                    value={"smartwatch"}
                    onChange={handleCategory}
                    checked={category.includes("smartwatch")}
                />
            <label>Smartwatch</label>
        </div>
        <div>
            <input type="checkbox"
                    value={"speaker"}
                    onChange={handleCategory}
                    checked={category.includes("speaker")}
                />
            <label>Speaker</label>
        </div>
        <div>
            <input type="checkbox"
                    value={"headphones"}
                    onChange={handleCategory}
                    checked={category.includes("headphones")}
                />
            <label>Headphones</label>
        </div>
        <div>
            <input type="checkbox"
                    value={"television"}
                    onChange={handleCategory}
                    checked={category.includes("television")}
                />
            <label>Television</label>
        </div>
        <div>
            <input type="checkbox" value={"gaming console"}
                    onChange={handleCategory}
                    checked={category.includes("gaming console")}
                />
            <label>Gaming Console</label>
        </div>
      </div>
      <div className='company'>
        <h4>BRANDS</h4>
        <div>
            <input type="checkbox"
                    value={"Samsung"}
                    onChange={handlecompany}
                    checked={company.includes("Samsung")}
                />
            <label>Samsung</label>
        </div>
        <div>
            <input type="checkbox"
                    value={"Apple"}
                    onChange={handlecompany}
                    checked={company.includes("Apple")}
                />
            <label>Apple</label>
        </div>
        <div>
            <input type="checkbox"
                    value={"Sony"}
                    onChange={handlecompany}
                    checked={company.includes("Sony")}
                />
            <label>Sony</label>
        </div>
        <div>
            <input type="checkbox"
                    value={"Microsoft"}
                    onChange={handlecompany}
                    checked={company.includes("Microsoft")}
                />
            <label>Microsoft</label>
        </div>
      </div>
      <div className='button-div'>
      <button onClick={handleFiltering}>Apply Filter</button>
      <button onClick={handleClearFiltering}>Clear Filter</button>
      </div>
    </DIV>
  );
};

export default Sidebar;

const DIV = styled.div`
  /* Your styling here */
text-align: start;
  .price-range{
    display: flex;
  }
  .price-range input{

  }
  .category-div{
    margin-top: 5px;
    text-align: start;
  }
  h4{
    font-weight: bold;
  }
  .company{
    margin-top: 5px;
    text-align: start;
  }
  button{
    font-weight: 600;
    background-color: gray;
    border-radius: 15px;
    width: 80px;
    margin-top:10px;
    padding: 5px;
    font-size: 12px;
  }
  .sort-price{
    text-align: start;
  }
.button-div{
  display: flex;
  justify-content: space-around;
}

`
