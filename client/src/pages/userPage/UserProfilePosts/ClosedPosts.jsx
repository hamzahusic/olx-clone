import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoResult from "../../../components/NoResult";
import UserProfile from "../userProfile";
import { useSelector } from "react-redux";
import Article from "../../../components/Article";
import ClipLoader from "react-spinners/ClipLoader";

const UserClosedPosts = () => {

    const user = useSelector((state) => state.isLogged)
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        if(!user)
            return 

        const fetchActiveArticle = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/data/user/${user.idK}/Zavrsen`,{
                    method:"POST"
                })
    
                if(!response.ok)
                    throw Error("Error getting user articles")
    
                const data = await response.json()
                setPosts(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchActiveArticle()
    },[user])

    return ( 
        <UserProfile>
            <div className="flex gap-5 pb-4">
                        <Link to={'/profile/my/active'} className="nonactive-tab">Aktivni</Link>
                        <Link to={'/profile/my/closed'} className="active-tab">Završeni oglasi</Link>
                        <Link to={'/profile/my/impressions'} className="nonactive-tab">Dojmovi</Link>
                        <Link to={'/profile/my/saved'} className="nonactive-tab">Spašeni oglasi</Link>
            </div>
            <div className="min-h-[70vh]" style={{display:!posts.length>0 && "grid",placeItems:!posts.length>0 && "center"}}>
                {posts.length>0 && !loading && 
                <div className="grid grid-cols-[repeat(auto-fill,minmax(233px,1fr))] gap-4">
                    { posts.map(article => (
                        <Article 
                            key={article.idA}
                            id={article.idA}
                            image={article.Slikas[0].slika_link} 
                            title={article.naslov} 
                            time={new Date(article.datum_promjene).toLocaleDateString("de-DE")} 
                            price={article.cijena.toLocaleString("de-DE")} 
                            tags={[article.lokacija,article.stanje]} 
                            available={article.dostupno}
                        />
                    ))}
             </div>
                }
                {!posts.length>0 && !loading && <NoResult text={"Nemate završenih oglasa"}/>}
                {!posts.length>0 && loading && <ClipLoader color={"#002f34"} size={45}/>}
            </div>
        </UserProfile>
     );
}
 
export default UserClosedPosts;