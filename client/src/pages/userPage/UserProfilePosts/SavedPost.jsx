import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoResult from "../../../components/NoResult";
import UserProfile from "../userProfile";
import { useSelector } from "react-redux";
import Article from "../../../components/Article";

const SavedPosts = () => {

    const [posts,setPosts] = useState([]);
    const user = useSelector((state) => state.isLogged)

    const fetchSavedArticle = async () => {

        if(!user)
            return 
        
        try {
            const response = await fetch(`http://localhost:8080/api/saved/1`)
    
            if(!response.ok)
                throw Error("Error getting user articles")
    
            const data = await response.json()
            setPosts(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSavedArticle()
    },[])

    return ( 
        <UserProfile>
            <div className="flex gap-5 pb-4">
                        <Link to={'/profile/my/active'} className="nonactive-tab">Aktivni</Link>
                        <Link to={'/profile/my/closed'} className="nonactive-tab">Završeni oglasi</Link>
                        <Link to={'/profile/my/impressions'} className="nonactive-tab">Dojmovi</Link>
                        <Link to={'/profile/my/saved'} className="active-tab">Spašeni oglasi</Link>
            </div>
            <div className="min-h-[70vh]" style={{display:!posts.length>0 && "grid",placeItems:!posts.length>0 && "center"}}>
                {posts.length>0 && 
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(233px,1fr))] gap-4">
                    {posts.map(article => (
                        <div key={article.Artikal.idA} className="relative">
                            <div className=" absolute top-1 right-1 z-10 bg-gray-900/70 tracking-wide rounded-md py-1 px-3 text-white">
                                {new Date(article.datum_spasavanja).toLocaleDateString("de-DE")}
                            </div>
                            <Article 
                            id={article.Artikal.idA}
                            image={article.Artikal.Slikas[0].slika_link} 
                            title={article.Artikal.naslov} 
                            time={new Date(article.Artikal.datum_promjene).toLocaleDateString("de-DE")} 
                            price={article.Artikal.cijena.toLocaleString("de-DE")} 
                            tags={[article.Artikal.lokacija,article.Artikal.stanje]} 
                            available={article.Artikal.dostupno}
                            />
                        </div>
                   ))}
                </div>
                }
                {!posts.length>0 && <NoResult text={"Nemate spašenih oglasa"}/>}
            </div>
        </UserProfile>
     );
}
 
export default SavedPosts;