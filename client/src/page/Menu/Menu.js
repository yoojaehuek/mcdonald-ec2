import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import BtnMore from "../../components/BtnMore/BtnMore";
import { API_URL } from "../../config/contansts";
import "./Menu.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function Menu() {
  const [select, setSelect] = useState("single"); //단품,세트메뉴 선택
  const [productCount, setProductCount] = useState(6); //페이지를 열었을때 보여지는상품개수
  const { subcategory_id } = useParams(); // 주소창에서 subcategory_id 를 가져옴
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState();
  const [btn1, setBtn1] = useState("");
  const [btn2, setBtn2] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/product/subcategory/${subcategory_id}`)
      .then((res) => {
        setProducts(res.data);
        if (subcategory_id === "1") {
          setBtn1("단품메뉴");
          setVisible(true);
          setBtn2("세트메뉴");
        } else if (subcategory_id === "2") {
          setBtn1("맥런치세트");
          setVisible(false);
        } else if (subcategory_id === "3") {
          setBtn1("단품메뉴");
          setVisible(true);
          setBtn2("세트메뉴");
        } else if (subcategory_id === "4") {
          setBtn1("해피스낵");
          setVisible(false);
        } else if (subcategory_id === "5") {
          setBtn1("사이드");
          setVisible(true);
          setBtn2("디저트");
        } else if (subcategory_id === "6") {
          setBtn1("맥카페");
          setVisible(true);
          setBtn2("음료");
        } else if (subcategory_id === "7") {
          setBtn1("AM 04:00~AM 10:30");
          setVisible(true);
          setBtn2("AM 10:30~AM 04:00");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [subcategory_id]);
  /** product_id 가 false 이면 singleProd 로, true면 setProd 로 담음 */
  const singleProd = products.filter((product) => !product.product_category);
  const setProd = products.filter((product) => product.product_category);

  /**버튼을 누르면 보여지는 상품의 개수를 늘려주는 함수 */
  const increaseProductCount = () => {
    setProductCount((prevCount) => prevCount + 6);
  };

  return (
    <>
      <div id="menu-form">
        <div>
          <div id="select">
            <button
              className={`select-btn ${select === "single" ? "active" : ""}`}
              onClick={() => {
                setSelect("single");
                setProductCount(6);
              }}
            >
              {btn1}
            </button>
            {visible === true ? (
              <button
                className={`select-btn ${select === "set" ? "active" : ""}`}
                onClick={() => {
                  setSelect("set");
                  setProductCount(6);
                }}
              >
                {btn2}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          {select === "single" ? ( //단품메뉴
            <div>
              <h3 id="prd-count">{singleProd.length} Products</h3>
              <div className="menu-grid">
                {singleProd.slice(0, productCount).map((product, index) => (
                  <Product key={index} props={product} />
                ))}
              </div>
            </div>
          ) : (
            <div> {/* 세트메뉴 */}
              <h3 id="prd-count">{setProd.length} Products</h3>
              <div className="menu-grid">
                {setProd.slice(0, productCount).map((product, index) => (
                  <Product key={index} props={product} />
                ))}
              </div>
            </div>
          )}
        </div>
        <BtnMore onClick={increaseProductCount} />
      </div>
    </>
  );
}

export default Menu;
