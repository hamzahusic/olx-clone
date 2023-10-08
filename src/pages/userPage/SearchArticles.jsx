import Article from "../../components/Article";
import Filters from "../../components/Header/Filters";
import UserLayout from "../../components/Layouts/UserLayout";

const SearchArticles = () => {
    const image = "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    return ( 
        <UserLayout>
            <Filters/>
            <div className=" p-5 bg-[#f1f4f5] grid grid-cols-[repeat(auto-fill,minmax(233px,1fr))] gap-4">
                <Article id={1} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                <Article id={2} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                <Article id={3} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                <Article id={4} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
            </div>
        </UserLayout>
     );
}
 
export default SearchArticles;