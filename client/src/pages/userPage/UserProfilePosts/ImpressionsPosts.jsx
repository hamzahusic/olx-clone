import { useState } from "react";
import { Link } from "react-router-dom";
import NoResult from "../../../components/NoResult";
import UserProfile from "../userProfile";

const UserImpressionsPost = () => {
    const [posts,setPosts] = useState(null);

    return ( 
        <UserProfile>
            <div className="flex gap-5 pb-4">
                        <Link to={'/profile/my/active'} className="nonactive-tab">Aktivni</Link>
                        <Link to={'/profile/my/closed'} className="nonactive-tab">Završeni oglasi</Link>
                        <Link to={'/profile/my/impressions'} className="active-tab">Dojmovi</Link>
                        <Link to={'/profile/my/saved'} className="nonactive-tab">Spašeni oglasi</Link>
            </div>
            <div className="min-h-[70vh] grid place-items-center">
                {posts && 
                <div>
                    All active posts
                </div>
                }
                {!posts && <NoResult text={"Nemate dojmova"}/>}
            </div>
        </UserProfile>
     );
}
 
export default UserImpressionsPost;