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
import Article from "../../components/Article";
import NotLogIn from "../../components/NotLogIn";
import { shallowEqual, useDispatch, useSelector } from "react-redux";


const ArticlePage = () => {
    const image = "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    const {id} = useParams();
    const [save,setSave] = useState(false);
    const [articleImages,setArticleImages] = useState([slikaTest,slikaTest,slikaTest,slikaTest])
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
    const [articleDetails,setArticleDetails] = useState([
        {
            "name" : "Proizvodjač",
            "value" : "Volkswagen"
        },
        {
            "name" : "Proizvodjač",
            "value" : "Volkswagen"
        },
        {
            "name" : "Proizvodjač",
            "value" : "Volkswagen"
        },
        {
            "name" : "Proizvodjač",
            "value" : "Volkswagen"
        },
        {
            "name" : "Proizvodjač",
            "value" : "Volkswagen"
        },
        {
            "name" : "Proizvodjač",
            "value" : "Volkswagen"
        },
        {
            "name" : "Proizvodjač",
            "value" : "Volkswagen"
        },
    ])
    const [arcitleTraits,setTraits] = useState([
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        },
        {
            name:"Veličina felgi",
            value:17
        }
    ])
    const [textDetail,setTextDetail] = useState("Golf 2.0TDI Highline Uvoz njemacka! Placeno sve do registacije!");

    const saveArticle = () => setSave(!save);
    
    const user = useSelector(state => state.isLogged);  

    const dispach = useDispatch();

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
                                {user &&  
                                <div className=" cursor-pointer" onClick={saveArticle}>
                                    {!save && <img src={saveAricle} alt="" />}
                                    {save && <img src={savedAricle} alt="" />}
                                </div>
                                }
                            </div>
                        </div>
                        <div className=" max-w-[800px]">
                            <Swiper
                                pagination={{
                                type: 'fraction',
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper lg:min-h-[600px]"
                            >
                                {
                                    articleImages.map((image) => (
                                        <SwiperSlide>
                                            <img src={image} alt=""/>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="bg-white p-4">
                        <div className="flex gap-2">
                                {
                                    artcileInfo.map((article) => (
                                        <p className="py-1 px-3 text-[12px] font-semibold border-[1px] border-gray-300 rounded-md">
                                            {article.name} {article?.value ? ': ' + article.value : ''}
                                        </p>
                                    ))
                                }
                        </div>
                        <div className=" grid grid-cols-2 gap-4 py-6 border-b-[1px] border-gray-300">
                            {
                                articleDetails.map((detail) => (
                                    <div className="p-2 border-[1px] border-gray-300 rounded-md text-sm flex gap-3 items-center">
                                        <img src={logo} alt="" width={40} className=" bg-black px-2 py-[14px] rounded-full"/>
                                        <div>
                                            <p className="p-0 m-0">{detail.name}</p>
                                            <p className=" font-semibold p-0 m-0">{detail.value}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="py-6">
                            <h2 className="text-2xl pb-1">Osobine</h2>
                            <div className="grid grid-cols-2 py-4">
                                {
                                    arcitleTraits.map((trait) => (
                                        <div className=" grid grid-cols-2 text-sm py-1">
                                            <p>{trait.name}</p>
                                            <p className=" font-semibold">{trait.value}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                                <h2 className="text-2xl pb-1">Detaljni opis</h2>
                                <p className="py-3 px-4">{textDetail}</p>
                        </div>
                    </div>
                    <div className="bg-white p-4">
                        <h2 className="text-2xl pb-1">Postavi pitanje <span className=" text-base">[{0}]</span></h2>
                        {/* PITANJA OD SVIH KORISNIKA*/} 
                        {!user && <NotLogIn/>}
                        {user && 
                        <div>
                            <textarea type="text" rows={7} rese className="bg-gray-100 p-4 w-full outline-none my-3 resize-none font-light" placeholder="Postavi pitanje korisniku"></textarea>
                            <button className="txt-color border-2 border-[#002f34] py-3 px-4 rounded-md text-sm">Postavi pitanje</button>
                        </div>}
                    </div>
                    <div className="bg-white p-4">
                        <h2 className="text-2xl pb-1">Ostali oglasi korisnika</h2>
                        <div className="flex justify-evenly max-w-3xl gap-4 py-4">
                            <Article id={1} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                            <Article id={2} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                            <Article id={3} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                            <Article id={4} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 sticky top-3">
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
                    <div className=" max-w-xs">
                        {!user && <NotLogIn/>}
                       {user && 
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
                        }
                    </div>
                </div>
            </div>

        </UserLayout>
     );
}
 
export default ArticlePage;