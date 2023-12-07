import React ,{useState}from 'react';
import Product from '../../components/Product/Product';
import BtnMore from '../../components/BtnMore/BtnMore';
import './Menu.scss';
import VisualBackGround from '../../components/VisualBackGround/VisualBackGround';

function Menu() {
    const [select, setSelect] = useState("single");//단품,세트메뉴 선택 
    const [productCount, setProductCount] = useState(6); // 초기 Product 개수 

    const singleProducts = [
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
    const setProducts = [
        {id:1, koName:"더블 비프 미트칠리버거 세트", engName:"Double Beef Meat Chili Burger", image:"/upload/product/setMenu (1).png"},
        {id:2, koName:"미트칠리 BLT 버거 세트", engName:"Meat Chili BLT Burger", image:"/upload/product/setMenu (2).png"},
        {id:3,koName:"빅맥® 세트", engName:"Big Mac®", image:"/upload/product/singleMenu (3).png"},
        {id:4,koName:"더블 쿼터파운더® 치즈 세트", engName:"Double Quarter Pounder® with Cheese", image:"/upload/product/setMenu (4).png"},
        {id:5,koName:"쿼터파운더® 치즈 세트", engName:"Quarter Pounder® with Cheese", image:"/upload/product/setMenu (5).png"},
        {id:6,koName:"맥크리스피™ 디럭스 버거 세트", engName:"McCrispy™ Deluxe Burger", image:"/upload/product/setMenu (6).png"},
        {id:7,koName:"맥크리스피™ 클래식 버거 세트", engName:"McCrispy™ Classic Burger", image:"/upload/product/setMenu (7).png"},
        {id:8,koName:"맥스파이시® 상하이 버거 세트", engName:"McSpicy® Shanghai Burger", image:"/upload/product/setMenu (8).png"},
        {id:9,koName:"1955® 버거 세트", engName:"1955® Burger", image:"/upload/product/setMenu (9).png"},
        {id:10,koName:"1955® 버거 세트", engName:"1955® Burger", image:"/upload/product/setMenu (9).png"},
    ]
    /**버튼을 누르면 보여지는 상품의 개수를 늘려주는 함수 */
    const increaseProductCount = () => {
        setProductCount((prevCount) => prevCount + 6);
    };
    return (
    <> 
        <VisualBackGround/>
        <div id='menu-form'>
            <div><div id='select'> 
                <button 
                    className={`select-btn ${select==='single' ? 'active' : ''}`}
                    onClick={() => {setSelect('single'); setProductCount(6);}}
                >단품메뉴</button> 
                <button 
                    className={`select-btn ${select==='set' ? 'active' : ''}`}
                    onClick={() => {setSelect('set'); setProductCount(6);}}
                >세트메뉴</button> 
            </div></div>
            <div>
            {
                select === 'single' ?  
                <div>
                    <h3 id='prd-count'>{singleProducts.length} Products</h3>
                    <div className="menu-grid">
                        {singleProducts.slice(0, productCount).map((singleProducts, index) => <Product key = {index} props={singleProducts} />)}
                    </div>
                </div>
                :
                <div>
                    <h3 id='prd-count'>{setProducts.length} Products</h3>
                    <div className="menu-grid">
                        {setProducts.slice(0, productCount).map((setProducts, index) => <Product key = {index} props={setProducts} />)}
                    </div>
                </div>
            }
            </div>
            <BtnMore onClick={increaseProductCount} />
        </div>
    </>
    );
}

export default Menu;
