import { useState } from "react";
import Article from "../../components/Article";
import Filters from "../../components/Header/Filters";
import UserLayout from "../../components/Layouts/UserLayout";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const SearchArticles = () => {
    const image = "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    const [result,setResult] = useState(false);

    const user = useSelector(state => state.isLogged,shallowEqual);
    const dispach = useDispatch();

    return ( 
        <UserLayout>
            <Filters/>
            {!result && 
                <div className="bg-yellow-100 text-center py-32 text-[#002f34] text-3xl">
                    UPSSS! NO RESULT {user ? "SOMETHING" : "NOTHING"}   
                </div>
            }
            {result && <div className=" p-5 bg-[#f1f4f5] grid grid-cols-[repeat(auto-fill,minmax(233px,1fr))] gap-4">
                <Article id={1} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                <Article id={2} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                <Article id={3} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
                <Article id={4} image={image} title={"GARMIN WATCH"} time={"prije 2 minute"} price={"150KM"} tags={['Dizel','Novo']} available={true}/>
            </div>}
        </UserLayout>
     );
}
 
export default SearchArticles;