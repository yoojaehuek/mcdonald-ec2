import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { API_URL } from "../../../config/contansts";
import axios from "axios";
import ProductTable from "../../Component/ProductTable/ProductTable";

const AProduct = () => {
  const { subcategory_id } = useParams();// 주소창에서 subcategory_id 를 가져옴
  const [ products, setProducts ] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/api/product/subcategory/${subcategory_id}`)
    .then(res => {
        setProducts(res.data);
        console.log("상품관리자에서 받은 상품정보: ",res.data);
    }).catch(err => {
        console.error(err);
    })
  }, [subcategory_id])

  return (
    <>
      <ProductTable data={products} setData={setProducts}/>
    </>
  );
};

export default AProduct;
