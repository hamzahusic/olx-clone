import UserLayout from "../../components/Layouts/UserLayout";
import Categories from "../../components/Header/Categories"
import categoriesImg from '../../assets/categories.svg'
import Article from "../../components/Article";
import olxShopIcon from '../../assets/olxshopnew.svg'
import olxCatIcon from '../../assets/more-listing.svg'

const UserPage = () => {
    const image = "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    
    return ( 
        <UserLayout>
            <Categories/>
            <div className="p-4 bg-[#f1f4f5]">
                <div className="flex items-center justify-between pt-3 pb-7">
                    <h2 className=" text-[28px]">Izdvojeni oglasi</h2>
                    <button className="flex items-center justify-center text-sm gap-2 border-2 border-[#002f34] px-4 py-3 rounded-md">
                        <img src={categoriesImg} width={17}/>
                        Filtriraj izdvojene oglase
                    </button>
                </div>
                
                <div className="grid grid-cols-[repeat(auto-fill,minmax(233px,1fr))] justify-center gap-4 ">
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                    <Article image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>

                </div>
                <div className="flex items-center justify-center">
                  <button className="txt-color border-2 border-[#002f34] py-3 px-3 rounded-md text-md my-20">Prikaži više oglasa</button>
                </div>
            </div>
            <div className="bg-gray-800 text-white flex items-center justify-center gap-5 py-2 ">
                <img src={olxShopIcon} alt="" />
                <div>
                    <h3 className="pb-4 text-2xl font-semibold">Otvorite OLX shop.</h3>
                    <p className="text-2xl font-light max-w-5xl">Promovišite vaš biznis i maksimizirajte prihode uz minimalan utrošak energije.</p>
                </div>
                <a href="/" className="bg-white txt-color px-8 py-3 rounded-md">Pogledaj pakete</a>
            </div>
            <div className="flex justify-center items-start gap-6 bg-[#cbf7ee] py-4">
                <img src={olxCatIcon} alt="" width={134} />
                <div>
                    <p className="max-w-5xl">
                        <span className=" font-medium pr-1">
                         Popularne kategorije:
                        </span>
                        vozila,
                        nekretnine,
                        servisi i usluge,
                        poslovi,
                        mobilni uređaji,
                        kompjuteri,
                        tehnika,
                        biznis i industrija,
                        odjeća i obuća,
                        životinje,
                        literatura,
                        umjetnost,</p>
                </div>
            </div>
        </UserLayout>
     );
}
 
export default UserPage;