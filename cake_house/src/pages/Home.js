import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

import header1 from "../components/header";


import logo from "../assets/Logo_Cake.png";
import img_homevorcher from "../assets/img_HomeVorcher.png"
import img_HomeGreen from "../assets/img_HomeGreen.png";
import img_HomeOareng from "../assets/img_HomeOreng.png";
import img_HomePink from "../assets/img_HomePink.png";
import { useState, useEffect } from "react";
import HomeSlide from "../components/HomeSlide";

import { collection, getDocs, doc, docs } from 'firebase/firestore/lite';
import { db } from "../firebase";

function Home() {
    const [cakes, setcakes] = useState([]);

    const getCakes = async () => {
        try {
            const cakesSnapshot = await getDocs(collection(db, 'cakes'));
            const cakesArray = cakesSnapshot.docs.map((doc) => ({
                idcake: doc.id,
                ...doc.data()
            }));
            setcakes(cakesArray);
        } catch (error) {
            console.error('Error fetching cakes:', error);
        }
    };
    useEffect(() => {
        getCakes();
    }, []);


    const defaultStyle = {
        backgroundColor: "",
        color: ""
    };
    const hoverStyle = {
        backgroundColor: "#8F3C02",
        color: "white"
    };
    const [style1, setStyle1] = useState(defaultStyle);
    const [style2, setStyle2] = useState(defaultStyle);
    const handleClick = () => {
        window.scrollTo(0, 0); // Di chuyển đến đầu trang
        // Tiếp tục chuyển hướng đến trang khác
    };
    return (
        <div className="home">
            <div className="home_wellcome" >
                <div className="img_home_div">
                    <HomeSlide />
                </div>
                <div className="HomeName">
                    <h1>Cake</h1>
                    <img src={logo}></img>
                    <h1>House</h1>

                </div>
            </div>
            <div className="home_slogan">
                <h2> Cake house</h2>
                <img src={logo}></img>

                <h5>Bánh nhà làm. Đặc biệt ngon như nhà làm!</h5>
            </div>
            <div className="Category">
                <div class="my-div">
                    <div class="line1"></div>
                    <div class="BestSeller">
                        <h2>Những loại bánh của Cake House</h2>
                    </div>
                    <div class="line2"></div>

                </div>
               
                <div className="home_voucher" style={{ backgroundImage: `url(${img_homevorcher})` }}>
                    <h5>FLASH SALES</h5>
                    <div className="home_voucher_persen">
                        <h2>50</h2>
                        <h7>%</h7>
                    </div>
                    <h4>15/8 - 27/8</h4>
                </div>
            </div>

            <div className="BackgroundBe">
                <div class="my-div">
                    <div class="line1"></div>
                    <div class="BestSeller">
                        <h2>Bánh bán chạy nhất</h2>
                    </div>
                    <div class="line2"></div>

                </div>
               
            </div>
            <div className="Home_Introduce">
                <div className="Home_Infomation">
                    <div className="Home_Infomation_Name">
                        <p>Cake House</p>
                    </div>
                    <div className="Home_Infomation_1">
                        <p>Chuyên cung cấp những loại bánh cao cấp, được làm thủ công hoàn toàn bằng nguyên liệu chất lượng cao.</p>
                        <p>Hương vị ngọt ngào từ những miếng bánh đầu tiên. Chinh phục được cả những khách hàng khó tính nhất.</p>
                        <p>Phù hợp với các tiệc trà, buổi sinh nhật, bữa ăn thân mật,...</p>
                    </div>
                </div>
                <div className="Home_Introduce_Img">
                    <div className="Introduce_Img">
                        <div className="Intro_img_1_div">
                            <img className="Intro_img_1" src={img_HomeGreen}></img>
                        </div>
                        <div className="Intro_img_2_div">
                            <img className="Intro_img_2" src={img_HomeOareng}></img>
                        </div>
                    </div>

                    <div className="Introduce_Img3">
                        <img className="Intro_img_3" src={img_HomePink}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;