import React from "react";
import { Link } from "react-router-dom";
import { ListCategory } from "../helpers/ListCategory"
import { ListBestSeller } from "../helpers/ListBestSeller"
import CardCategory from "../components/CardCategory";
import CardCake from "../components/CardCake";
// import "../styles/Menu.css";
import "../styles/CardCake.css"
import "../styles/CategoryCake.css"
import { useState, useEffect } from "react";
import img_background from "../assets/img_background_category.png"
import img_category from "../assets/img_Category_Cake.png"
import img_cakecake from "../assets/cakecake.png"
import CategoryLeft from "../components/CategoryLeft";
import Tiramisu_Category from "../assets/Tiramisu_Category.png";
import img_Category_Cake from "../assets/img_Cake_Category.png";
import img_Cookies_Category from "../assets/img_Cookies_Category.png";
import img_Mochi_Category from "../assets/img_Mochi_Category.png";

function CategoryCake() {

    const [results, setResults] = useState([]);
    const [category, setCategory] = useState('');
    return (
        <div className="CategoryCake">
            
            <div className="background_category">
                <div className="background_category_info">
                    <h5>Các loại bánh từ</h5>
                    <h1>Cake House</h1>
                </div>
                <div className="background_category_img">
                    <img className="category_img" src={img_category}></img>
                </div>
            </div>
            <div className="category_header">
                <div className="category_header_img_div">
                    <img className="category_header_img" src={img_cakecake}></img>
                </div>
                <div className="category_header_info">
                    <p>Chuyên cung cấp các loại bánh Tiramisu, bánh Kem, Cookie, bánh mochi.</p>
                    <p>Cung cấp các set bánh phù hợp với các tiệc trà, party,...</p>
                </div>
            </div>
            <CategoryLeft
                image={Tiramisu_Category}
                name="Tiramisu"
                num={1}
            />
            
           
            <div className="Category_BanhKem">
                {/* {ListBestSeller.slice(0, 4).map((cardCake, key) => {
                return (
                    <CardCake
                    key={key}
                    image={cardCake.image}
                    name={cardCake.name}
                    price = {cardCake.price}
                    size = {cardCake.size}
                    />
                );
            })} */}
               
            </div>
            

        </div>
    );
}
export default CategoryCake;