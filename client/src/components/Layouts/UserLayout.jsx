import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const UserLayout = ({children}) => {
    return ( 
        <div>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
     );
}
 
export default UserLayout;