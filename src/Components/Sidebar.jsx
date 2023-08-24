import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import {
  Input, RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
    const [searchParams, setSearchParams]= useSearchParams();
  const [range, setRange] = useState([100, 10000]);
  const [category, setCategory]= useState(searchParams.getAll("category") || [])
  const [company, setCompany] =useState(searchParams.getAll("company") || [])
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
//   useEffect(()=>{
//     let params={
//         category,
//         company
//     }
//     if(range[0] !==0){
//         params.price_gte= range[0];
//     }
//     if(range[1] !== 0){
//         params.price_lte=range[1];
//     }

//     setSearchParams(params)
//   },[category,range,company])
// console.log(range[0], range[1])

  const handleFiltering=()=>{
    let params={
                category,
                company
            }
            if(range[0] !==0){
                params.price_gte= range[0];
            }
            if(range[1] !== 0){
                params.price_lte=range[1];
            }
        
            setSearchParams(params)
  }
  return (
    <DIV>
      <div>Filter</div>
      <div className='price'>
        <h4>Price</h4>
        
        <RangeSlider
          aria-label="price-range"
          min={0}
          max={5000}
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
      </div>
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
        <h4>company</h4>
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
      <button onClick={handleFiltering}>Apply Filter</button>
    </DIV>
  );
};

export default Sidebar;

const DIV = styled.div`
  /* Your styling here */

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
    font-weight: bold;
    background-color: gray;
    border-radius: 15px;
    width: 120px;
    margin-top:10px;
    padding: 5px;
  }


`
