import { Link, useNavigate, useParams } from "react-router-dom";
import UserLayout from "../../components/Layouts/UserLayout";
import instantDelivery from '../../assets/articleImg/delivery-truck-new.svg'
import saveAricle from '../../assets/articleImg/save.svg'
import savedAricle from '../../assets/articleImg/saved.svg'
import share from '../../assets/articleImg/share-new.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import logo from "../../assets/logoOLX.svg"
import phoneIcon from '../../assets/articleImg/phone.svg'
import messageIcon from '../../assets/articleImg/message.svg'
import locationIcon from '../../assets/location.png'
import priceTagIcon from '../../assets/price-tag.png'
import clockIcon from '../../assets/clock.png'
import infoIcon from '../../assets/info.png'
import checkIcon from '../../assets/check.png'

import proizvodjacIcon from '../../assets/carIcon/proizvodjac.png'
import modelIcon from '../../assets/carIcon/model.png'
import gorivoIcon from '../../assets/carIcon/gorivo.svg'
import godisteIcon from '../../assets/carIcon/godiste.svg'
import kilometrazaIcon from '../../assets/carIcon/kilometraza.svg'
import kubikazaIcon from '../../assets/carIcon/kubikaza.svg'
import kilovataIcon from '../../assets/carIcon/snaga.svg'
import brojVrataIcon from '../../assets/carIcon/broj vrata.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { useEffect, useState } from "react";
import Article from "../../components/Article";
import NotLogIn from "../../components/NotLogIn";
import {useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader"

const ArticlePage = () => {

    const {id} = useParams();
    const [save,setSave] = useState(false);
    const [articleInfo,setArticleInfo] = useState([])
    const [otherArticles,setOtherArticles] = useState([])
    const [loading,setLoading] = useState(true);
    const [otherArticleloading,setOtherArticleLoading] = useState(true);

    const saveArticle = () => setSave(!save);
    const user = useSelector(state => state.isLogged);  

    const carMainInfo = {
        "proizvodjac":{
            name:"Proizvođač",
            icon : proizvodjacIcon
        },
        "model":{
            name:"Model",
            icon : modelIcon
        },
        "gorivo":{
            name:"Gorivo",
            icon : gorivoIcon
        },
        "godiste":{
            name:"Godište",
            icon : godisteIcon
        },
        "kilometraza":{
            name:"Kilometraža",
            icon : kilometrazaIcon
        },
        "kubikaza":{
            name:"Kubikaža",
            icon : kubikazaIcon
        },
        "kilovata":{
            name:"Snaga motora (KW)",
            icon : kilovataIcon
        },
        "broj_vrata":{
            name:"Broj vrata",
            icon : brojVrataIcon
        }
    }

    const getOtherUserArticles = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/get/${userId}/items/4`)
            
            if(!response.ok)
                throw Error("Error getting car info")

            const data = response.json();
            const result = await data;
            
            setOtherArticles(result)
            setOtherArticleLoading(false)
            console.log(result)
        } catch (error) {
            setOtherArticles(null)
            console.error(error)
        }
    } 

    const getCarInformation = async () => {

        try {
            const response = await fetch(`http://localhost:8080/api/get/automobili/${id}`)
            
            if(!response.ok)
                    throw Error("Error getting car info")

            const data = response.json();

            const result = await data;
            
            if(result){
                setArticleInfo(result)
                setLoading(false)
                getOtherUserArticles(result[0].idK)
            }

            console.log(result)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        getCarInformation()
        window.scrollTo({top:0,behavior: 'smooth'})
    },[id])

    return ( 
        <UserLayout>
            {!loading && articleInfo && <div className="flex max-w-[1180] p-4 items-start justify-center gap-4 bg-[#f1f4f5]">
                <div className=" flex flex-col gap-4">
                    <div className="bg-white p-4">
                        <h1 className="text-[26px] font-light">{articleInfo[0].naslov}</h1>
                        <div className="flex gap-2 items-center justify-between pb-3">
                            <div className="flex items-center gap-2">
                                <p className=" text-[34px] font-bold">{articleInfo[0].cijena == 0 ? "Na upit" : Number(articleInfo[0].cijena).toLocaleString("de-DE")+"KM"}</p>
                                {articleInfo[0].dostupno && <p className="flex gap-2 bg-[#002f34] py-1 px-2 text-white text-[12px] rounded-sm">
                                    <img src={instantDelivery} className=" brightness-[100]" width={24}/>
                                    Dostupno odmah
                                </p>}
                            </div>
                            <div className="flex gap-2">
                                <div className="select-none text-sm flex gap-1 items-center bg-gray-200/50 p-3 rounded">
                                    <img src={share} alt="" className=" cursor-pointer"/>
                                    Podijeli
                                </div>
                                {user &&  
                                <div className=" cursor-pointer text-sm flex gap-1 items-center bg-gray-200/50 p-3 rounded select-none" onClick={saveArticle}>
                                    {!save && <img src={saveAricle} alt="" />}
                                    {save && <img src={savedAricle} alt="" />}
                                    Spasi oglas
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
                                        <SwiperSlide key={image.slika_link}>
                                            <img src={image.slika_link} alt="" className=" min-h-[600px] w-full object-fill select-none"/>
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
                            OBNOVLJEN : {new Date(articleInfo[0].datum_promjene).toLocaleDateString("de-DE")}
                        </p>
                        <p className="py-1 px-3 text-[12px] font-semibold border-[1px] border-gray-300 rounded-md flex items-center gap-1">
                            <img src={infoIcon} alt="" width={13} />
                            ID : {articleInfo[0].idA}
                        </p>
                        </div>
                        {articleInfo[0].KategorijaVozilo &&
                            <div className=" grid grid-cols-2 gap-4 py-6 border-b-[1px] border-gray-300">
                                    {Object.keys(articleInfo[0].KategorijaVozilo).slice(1,9).map((detail) => (
                                        <div className="p-2 border-[1px] border-gray-300 rounded-md text-sm flex gap-3 items-center" key={detail}>
                                            <img src={carMainInfo[detail].icon} alt="" width={35} className=""/>
                                            <div>
                                                <p className="p-0 m-0 first-letter:uppercase">{carMainInfo[detail].name}</p>
                                                <p className=" font-semibold p-0 m-0 first-letter:uppercase">{detail=="kilometraza" ? Number(articleInfo[0].KategorijaVozilo[detail]).toLocaleString("de-DE")+"km" : articleInfo[0].KategorijaVozilo[detail]}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        }
                        <div className="py-6">
                            {articleInfo[0].KategorijaVozilo && <h2 className="text-2xl pb-1">Specifikacije</h2>}
                            {articleInfo[0].KategorijaVozilo &&
                                <div className="grid grid-cols-2 py-4">
                                    {Object.keys(articleInfo[0].KategorijaVozilo).slice(9).map((detail) => (
                                        <div className="grid grid-cols-2 text-sm py-1" key={detail}>
                                            <p className=" first-letter:uppercase">{detail.replace('_',' ')}</p>
                                            <p className=" font-medium text-gray-700 first-letter:uppercase">{detail == "registrovan_do" ? new Date(articleInfo[0].KategorijaVozilo[detail]).toLocaleDateString("de-DE") : articleInfo[0].KategorijaVozilo[detail] == 0 || articleInfo[0].KategorijaVozilo[detail] == null ? 'Ostalo' : articleInfo[0].KategorijaVozilo[detail] }</p>
                                        </div>
                                    ))}
                                </div>
                            }
                            {articleInfo[0].KategorijaCheckBoxDetaljs.length >0 && <h2 className="text-2xl pb-1">Osobine</h2>}
                            {articleInfo[0].KategorijaCheckBoxDetaljs.length >0 && <div className="grid grid-cols-2 py-4">
                                {articleInfo[0].KategorijaCheckBoxDetaljs.map((trait) => (
                                        <div className="grid grid-cols-2 text-sm py-1" key={trait.vrijednost_checkboxa}>
                                            <p>{trait.vrijednost_checkboxa}</p>
                                            <img src={checkIcon} alt="" width={14} />
                                        </div>
                                    ))
                                }
                            </div>}
                        </div>
                        {articleInfo[0].opis && <div>
                                <h2 className="text-2xl pb-1">Detaljni opis</h2>
                                <p className="py-3 px-4">{articleInfo[0].opis}</p>
                        </div>}
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
                    {!otherArticleloading && otherArticles && <div className="bg-white p-4">
                        <h2 className="text-2xl pb-1">Ostali oglasi korisnika</h2>
                        <div className="flex max-w-3xl gap-4 py-4 [&>*]:max-w-[192px]">
                            {otherArticles.map((article) => (
                                <Article 
                                    key={article.idA}
                                    id={article.idA}
                                    image={article.Slikas[0].slika_link} 
                                    title={article.naslov} 
                                    time={new Date(article.datum_promjene).toLocaleDateString("de-DE")} 
                                    price={article.cijena.toLocaleString("de-DE")} 
                                    tags={[article.lokacija,article.stanje]} 
                                    available={article.dostupno}/>
                            ))}
                        </div>
                    </div>}
                </div>
                <div className="flex flex-col gap-4 sticky top-3">
                    <div className="p-5 bg-white">
                        <p className="text-sm font-bold">OLX KORISNIK</p>
                        <div className="flex gap-3 py-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src={articleInfo[0].Korisnik.slika_link ? articleInfo[0].Korisnik.slika_link : logo} className="bg-gray-800 w-full h-full object-cover scale-[1.3] p-1"/>
                            </div>
                            <div>
                                <p className=" font-semibold tracking-wide pb-1 text-base">{articleInfo[0].Korisnik.ime} {articleInfo[0].Korisnik.prezime}</p>
                                <p className=" text-[12px]"><span className=" font-semibold">Online</span> : {new Date(articleInfo[0].Korisnik.zadnja_prijava).toLocaleDateString("de-DE")} u {new Date(articleInfo[0].Korisnik.zadnja_prijava).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
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