import { Link, useNavigate, useParams } from "react-router-dom";
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
import locationIcon from '../../assets/location.png'
import priceTagIcon from '../../assets/price-tag.png'
import clockIcon from '../../assets/clock.png'
import infoIcon from '../../assets/info.png'
import checkIcon from '../../assets/check.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { useEffect, useState } from "react";
import Article from "../../components/Article";
import NotLogIn from "../../components/NotLogIn";
import {useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader"

const ArticlePage = () => {
    const image = "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    const {id} = useParams();
    const [save,setSave] = useState(false);
    const [articleInfo,setArticleInfo] = useState([])
    const [loading,setLoading] = useState(true);
    const saveArticle = () => setSave(!save);
    const user = useSelector(state => state.isLogged);  
    const dispach = useDispatch();
    const navigate = useNavigate()

    const getCarInformation = async () => {

        try {
            const response = await fetch(`http://localhost:8080/api/get/automobili/${id}`)
            
            if(!response.ok)
                    throw Error("Error getting car info")

            const data = response.json();

            const result = await data;
            setArticleInfo(result)
            setLoading(false)
            console.log(result)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        getCarInformation()
    },[])

    return ( 
        <UserLayout>
            {!loading && articleInfo && <div className="flex max-w-[1180] p-4 items-start justify-center gap-4 bg-[#f1f4f5]">
                <div className=" flex flex-col gap-4">
                    <div className="bg-white p-4">
                        <h1 className="text-[26px] font-light">{articleInfo[0].naslov}</h1>
                        <div className="flex gap-2 items-center justify-between pb-3">
                            <div className="flex items-center gap-2">
                                <p className=" text-[34px] font-bold">{articleInfo[0].cijena.toLocaleString("de-DE")}KM</p>
                                {articleInfo[0].dostupno && <p className="flex gap-2 bg-[#002f34] py-1 px-2 text-white text-[12px] rounded-sm">
                                    <img src={instantDelivery} className=" brightness-[100]" width={24}/>
                                    Dostupno odmah
                                </p>}
                            </div>
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

                                    articleInfo[0].Slikas.map((image) => (
                                        <SwiperSlide>
                                            <img src={image.slika_link} alt="" key={image} className=" min-h-[600px] w-full object-fill"/>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="bg-white p-4">
                        <div className="flex gap-2">
                        <p className="py-1 px-3 text-[12px] font-semibold border-[1px] border-gray-300 rounded-md uppercase flex items-center gap-1">
                            <img src={locationIcon} alt="" width={14} />
                            {articleInfo[0].lokacija}
                        </p>
                        <p className="py-1 px-3 text-[12px] font-semibold border-[1px] border-gray-300 rounded-md uppercase flex items-center gap-1">
                            <img src={priceTagIcon} alt="" width={14} />
                            {articleInfo[0].stanje}
                        </p>
                        <p className="py-1 px-3 text-[12px] font-semibold border-[1px] border-gray-300 rounded-md flex items-center gap-1">
                            <img src={clockIcon} alt="" width={14} />
                            OBNOVLJEN : {new Date(articleInfo[0].datum_promjene).toLocaleDateString()}
                        </p>
                        <p className="py-1 px-3 text-[12px] font-semibold border-[1px] border-gray-300 rounded-md flex items-center gap-1">
                            <img src={infoIcon} alt="" width={13} />
                            ID : {articleInfo[0].idA}
                        </p>
                        </div>
                        <div className=" grid grid-cols-2 gap-4 py-6 border-b-[1px] border-gray-300">
                            {
                                Object.keys(articleInfo[0].KategorijaVozilo).filter(el => el != "idKV").map((detail) => (
                                    <div className="p-2 border-[1px] border-gray-300 rounded-md text-sm flex gap-3 items-center">
                                        <img src={logo} alt="" width={40} className=" bg-black px-2 py-[14px] rounded-full"/>
                                        <div>
                                            <p className="p-0 m-0 first-letter:uppercase">{detail.replace('_',' ')}</p>
                                            <p className=" font-semibold p-0 m-0">{detail == "registrovan_do" ? new Date(articleInfo[0].KategorijaVozilo[detail]).toLocaleDateString() : articleInfo[0].KategorijaVozilo[detail]}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="py-6">
                            <h2 className="text-2xl pb-1">Osobine</h2>
                            <div className="grid grid-cols-2 py-4">
                                {
                                    articleInfo[0].KategorijaCheckBoxDetaljs.map((trait) => (
                                        <div className=" grid grid-cols-2 text-sm py-1">
                                            <p>{trait.vrijednost_checkboxa}</p>
                                            <img src={checkIcon} alt="" width={14} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                                <h2 className="text-2xl pb-1">Detaljni opis</h2>
                                <p className="py-3 px-4">{articleInfo[0].opis}</p>
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
                        <p className="text-sm font-bold">OLX KORISNIK</p>
                        <div className="flex gap-3 py-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src={articleInfo[0].Korisnik.slika_link} className="bg-gray-800 w-full h-full object-cover scale-[1.3] p-1"/>
                            </div>
                            <div>
                                <p className=" font-semibold tracking-wide pb-1 text-base">{articleInfo[0].Korisnik.ime} {articleInfo[0].Korisnik.prezime}</p>
                                <p className=" text-[12px]"><span className=" font-semibold">Online</span> : {new Date(articleInfo[0].Korisnik.zadnja_prijava).toLocaleDateString()} u {new Date(articleInfo[0].Korisnik.zadnja_prijava).toLocaleTimeString()}</p>
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
            </div>}
            {loading && !articleInfo.length>0 && 
                <div className="w-full grid place-items-center py-56">
                    <ClipLoader color={"#002f34"} size={45}/>
                </div>
            }
        </UserLayout>
     );
}
 
export default ArticlePage;