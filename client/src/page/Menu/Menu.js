import React ,{useState}from 'react';
import Product from '../../components/Product/Product';
import './Menu.scss';
import VisualBackGround from '../../components/VisualBackGround/VisualBackGround';

function Menu() {
    const [select, setSelect] = useState("true");
    const products = [
        {koName:"더블 비프 미트칠리버거", engName:"Double Beef Meat Chili Burger", image:"/upload/product/singleMenu (1).png"},
        {koName:"미트칠리 BLT 버거", engName:"Meat Chili BLT Burger", image:"/upload/product/singleMenu (2).png"},
        {koName:"빅맥®", engName:"Big Mac®", image:"/upload/product/singleMenu (3).png"},
        {koName:"더블 쿼터파운더® 치즈", engName:"Double Quarter Pounder® with Cheese", image:"/upload/product/singleMenu (4).png"},
        {koName:"쿼터파운더® 치즈", engName:"Quarter Pounder® with Cheese", image:"/upload/product/singleMenu (5).png"},
        {koName:"맥크리스피™ 디럭스 버거", engName:"McCrispy™ Deluxe Burger", image:"/upload/product/singleMenu (6).png"},
        {koName:"맥크리스피™ 클래식 버거", engName:"McCrispy™ Classic Burger", image:"/upload/product/singleMenu (7).png"},
        {koName:"맥스파이시® 상하이 버거", engName:"McSpicy® Shanghai Burger", image:"/upload/product/singleMenu (8).png"},
        {koName:"1955® 버거", engName:"1955® Burger", image:"/upload/product/singleMenu (9).png"},
    ]

    return (
    <>
        <VisualBackGround/>
        <div id='menu-form'>
            <div><div id='select'> 
                <button onClick={setSelect('true')}>단품메뉴</button> 
                <button onClick={setSelect("false")}>세트메뉴</button> 
            </div></div>
            <div>
            {//문제점 렌더링이 너무 마니된다 렌더링이 머임?
                select === 'true' ?  
                <div>
                    <h3 id='prd-count'>{products.length} Products</h3>
                    <div className="menu-grid">
                        {products.map((product, index) => <Product key = {index} props={product} />)}
                    </div>
                </div>
                :
                <div>
                    <h3 id='prd-count'>{products.length} Products</h3>
                    <div className="menu-grid">
                        {products.map((product, index) => <Product key = {index} props={product} />)}
                    </div>
                </div>
            }
            </div>

        </div>
    </>
    );
}

export default Menu;
