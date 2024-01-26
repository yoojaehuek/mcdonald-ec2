import React, { useState, useEffect } from "react";
import './Faq.scss';
import AccordionItem from './Accordion';
import axios from 'axios';
import { API_URL } from '../../../../config/contansts';
import BottomMenu from "../Component/BottomMenu";
import Buttonmain from "../../../../components/Main/Button";

const Faq = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [searchT, setSearchT] = useState('');

  //then catch > promise에 대한 에러처리용
  useEffect(() => {
    axios.get(`${API_URL}/api/faq`)
      .then(response => {
        //console.log("response:",response);
        setCategories(response.data);
        setSelectedCategory({ category: '전체' });
      })
      .catch(error => console.error('에러:', error));
  }, []);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    setSearchT(e.target.value);
  };

  const uniqueCategories = Array.from(new Set(categories.map(category => category.category)));

  return (
    <>
    <BottomMenu/>
    <div className="customer-container">
      <div className="search-container">
        <div className="dropdown">
          <select className="dropmenu"
            value={selectedCategory.category}
            onChange={(e) => handleCategory({ category: e.target.value })}
          >
            {[...uniqueCategories].map(categoryName => (
              <option key={categoryName} value={categoryName}>{categoryName}</option>
            ))}
          </select>
        </div>
        <input
          className="custom-input"
          type="text"
          value={searchT}
          onChange={handleSearch}
          placeholder="검색"
        />
      </div>
      <div className="category-buttons">
        {uniqueCategories.map(categoryName => (
          <div key={categoryName} className="radio-button-container">
            <input
              type="radio"
              id={categoryName}
              value={categoryName}
              checked={selectedCategory.category === categoryName}
              onChange={() => handleCategory({ category: categoryName })}
            />
            <label htmlFor={categoryName}>{categoryName}</label>
          </div>
        ))}
      </div>
      <div className="accordion-container">
        {selectedCategory.category && selectedCategory.category !== '전체' ? (
          <div>
            {categories
              .filter(category => category.category === selectedCategory.category)
              .filter(item =>
                item.title.toLowerCase().includes(searchT.toLowerCase()) ||
                item.description.toLowerCase().includes(searchT.toLowerCase())
              )
              .map((item, index) => (
                <AccordionItem key={index} category={item} item={item} />
              ))}
          </div>  
        ) : (
          <div>
            {categories
              .filter(category => category.category !== '전체')
              .filter(item =>
                item.title.toLowerCase().includes(searchT.toLowerCase()) ||
                item.description.toLowerCase().includes(searchT.toLowerCase())
              )
              .map((item, index) => (
                <AccordionItem key={index} category={item} item={item} />
              ))}
          </div>
        )}
      </div>
    </div>
    <>
      <Buttonmain/>
    </>
    </>
  );
}

export default Faq;