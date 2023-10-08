import { Link } from 'react-router-dom';
import NoProfile from '../assets/ghost-user.svg'
const NotLogIn = () => {
    return ( 
        <div className="bg-[#e9fcfb] p-3 flex gap-3 items-start w-full my-1">
            <div>
                <img src={NoProfile} className='max-w-[60px]'/>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-[13px]'>Logujte se ili kreirajte račun na OLX-u da kontaktirate ovog korisnika.</p>
                <Link to="/" className='underline'>Logujte se ili kreirajte račun</Link>
            </div>
        </div>
     );
}
 
export default NotLogIn;