import { Link } from 'react-router-dom';
import olxLogo from '../../assets/logoOLX.svg';

const RegisterPage = () => {
    return ( 
        <div className='bgp min-h-screen grid place-items-center'>
            <div className='bg-white px-5 py-7 rounded-sm md:min-w-[400px]'>
                <img src={olxLogo} width={110} className=' mx-auto'/>
                <p className=' text-[22px] mt-7'>Registracija</p>
                    <form action="" className='flex flex-col'>
                        <label htmlFor="name" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>KORISNIČKO IME ILI EMAIL</label>
                        <input type="text" name="name" className='bg-gray-100 outline-none p-3 rounded-md'/>
                        <label htmlFor="pass" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>ŠIFRA</label>
                        <input type="password" name="pass" className='bg-gray-100 outline-none p-3 rounded-md'/>
                        <label htmlFor="username" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>VAŠE OLX IME</label>
                        <input type="text" name="username" className='bg-gray-100 outline-none p-3 rounded-md'/>
                        <label htmlFor="gender" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>SPOL</label>
                        <select name="gender" className='bg-gray-100 outline-none p-3 rounded-md'>
                            <option value="">Izaberite spol</option>
                            <option value="muski">Muški</option>
                            <option value="zensi">Ženski</option>
                        </select>
                        <label htmlFor="region" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>REGIJA</label>
                        <select name="region" className='bg-gray-100 outline-none p-3 rounded-md'>
                            <option value="">Odaberite regiju</option>
                            <option value="tuzlanski kanton">Tuzlanski kanton</option>
                            <option value="kanton sarajevo">Kanton Sarajevo</option>
                        </select>
                        <div className='py-5 text-base flex gap-2'>
                            <input type="checkbox" className='txt-xl'/>
                            Slažem se sa uslovima korištenja
                        </div>
                        <button className='bgp text-white py-3 text-sm font-semibold rounded-md'>Registruj se</button>
                        <div className='mt-7 flex justify-evenly'>
                            <span className='text-base text-gray-400 font-thin'>
                                Imate korisnički račun? 
                            </span>
                            <Link to={"/login"} className='font-semibold'>Prijavite se</Link>
                        </div>
                    </form>
            </div>
        </div>
     );
}
 
export default RegisterPage;