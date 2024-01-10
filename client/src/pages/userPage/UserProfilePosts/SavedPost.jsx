import { useState } from "react";
import { Link } from "react-router-dom";
import NoResult from "../../../components/NoResult";
import UserProfile from "../userProfile";

const SavedPosts = () => {

    const [posts,setPosts] = useState([]);

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
                <div>
                    All closed posts
                </div>
                }
                {!posts.length>0 && <NoResult text={"Nemate spašenih oglasa"}/>}
            </div>
        </UserProfile>
     );
}
 
export default SavedPosts;