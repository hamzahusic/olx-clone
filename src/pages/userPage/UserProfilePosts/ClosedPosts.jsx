import { useState } from "react";
import { Link } from "react-router-dom";
import NoResult from "../../../components/NoResult";
import UserProfile from "../userProfile";

const UserClosedPosts = () => {

    const [posts,setPosts] = useState(null);

    return ( 
        <UserProfile>
            <div className="flex gap-5 pb-4">
                        <Link to={'/profile/my/active'} className="nonactive-tab">Aktivni</Link>
                        <Link to={'/profile/my/closed'} className="active-tab">Završeni oglasi</Link>
                        <Link to={'/profile/my/impressions'} className="nonactive-tab">Dojmovi</Link>
            </div>
            <div className="min-h-[70vh] grid place-items-center">
                {posts && 
                <div>
                    All closed posts
                </div>
                }
                {!posts && <NoResult text={"Nemate završenih oglasa"}/>}
            </div>
        </UserProfile>
     );
}
 
export default UserClosedPosts;