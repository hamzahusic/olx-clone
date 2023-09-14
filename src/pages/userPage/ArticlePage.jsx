import { Link, useParams } from "react-router-dom";
import UserLayout from "../../components/Layouts/UserLayout";
import instantDelivery from '../../assets/articleImg/delivery-truck-new.svg'
import saveAricle from '../../assets/articleImg/save.svg'
import savedAricle from '../../assets/articleImg/saved.svg'
import share from '../../assets/articleImg/share-new.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import slikaTest from '../../assets/articleImg/testImg.jpg'
import logo from "../../assets/logoOLX.svg"
import phoneIcon from '../../assets/articleImg/phone.svg'
import messageIcon from '../../assets/articleImg/message.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { useState } from "react";

const ArticlePage = () => {

    const {id} = useParams();
    const [save,setSave] = useState(false);
    const [artcileInfo,setArticleInfo] = useState([
        {
            name:"Tuzla",
            icon: "Icon",    
        },
        {
            name:"Koristeno",
            icon: "Icon",
        },
        {
            name:"Obnovljen",
            icon: "Icon",
            value:'14.09.2023'
        },
        {
            name:"ID",
            icon: "Icon",
            value:55102817
        },
        {
            name:"Pregledi",
            icon: "Icon",
            value:2507,
        }
    ])


    const saveArticle = () => {
        setSave(!save)
    }


    return ( 
        <UserLayout>
            <div className="flex max-w-[1180] p-4 items-start justify-center gap-4 bg-[#f1f4f5]">
                <div className=" flex flex-col gap-4">
                    <div className="bg-white p-4">
                        <h1 className="text-[26px] font-light">Renault Megane 1.5 DCI 2019 NEW-MODEL</h1>
                        <div className="flex gap-2 items-center">
                            <p className=" text-[34px] font-bold">21.900 KM</p>
                            <p className="flex gap-2 bg-[#002f34] py-1 px-2 text-white text-[12px] rounded-sm">
                                <img src={instantDelivery} className=" brightness-[100]" width={24}/>
                                Dostupno odmah
                            </p>
                        </div>
                        <div className="flex justify-between items-center pb-5">
                            <Link to={"/"}>Vozila &gt; Automobili</Link>
                            <div className="flex gap-2">
                                <img src={share} alt="" className=" cursor-pointer"/>
                                <div className=" cursor-pointer" onClick={saveArticle}>
                                    {!save && <img src={saveAricle} alt="" />}
                                    {save && <img src={savedAricle} alt="" />}
                                </div>
                            </div>
                        </div>
                        <div className=" max-w-[800px]">
                            <Swiper
                                pagination={{
                                type: 'fraction',
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={slikaTest} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                
                            </Swiper>
                        </div>
                    </div>
                    <div className="bg-white p-4">
                        <div className="flex gap-2">
                                {
                                    artcileInfo.map((article) => (
                                        <p className="py-1 px-3 text-[12px] font-semibold border-[1px] border-gray-400 rounded-sm">
                                            {article.name} {article?.value ? ': ' + article.value : ''}
                                        </p>
                                    ))
                                }
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="bg-white p-4">
                        OSTALO
                    </div>
                    <div className="bg-white p-4">
                        KRAJ
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="p-5 bg-white">
                        <p className="text-sm font-bold">OLX SHOP</p>
                        <div className="flex gap-3 py-4">
                            <img src={logo} alt="" width={60} className=" bg-black px-2 py-[17px] rounded-full"/>
                            <div>
                                <p className=" font-semibold tracking-wide pb-1 text-base">ASHAAUTO</p>
                                <p className=" text-[12px]">Online prije jednog sata</p>
                            </div>
                        </div>
                        <p className=" text-sm text-center bg-[#002f341c] font-semibold py-2 px-4 rounded-md">Korisnik odgovara veoma brzo</p>
                    </div>
                    <div className="flex bg-white p-3 gap-2">
                        <Link to={"/"} className="bg-white border-2 border-[#002f34] flex gap-2 items-center justify-center py-3 px-6 rounded-md w-[50%]">
                            <img src={phoneIcon} alt="" width={17}/>
                            Broj
                        </Link>
                        <Link to={"/"} className="bg-white border-2 border-[#002f34] flex gap-2 items-center justify-center py-3 px-6 rounded-md w-[50%]">
                            <img src={messageIcon} alt="" width={17}/>
                            Poruka
                        </Link>
                    </div>
                </div>
            </div>

        </UserLayout>
     );
}
 
export default ArticlePage;