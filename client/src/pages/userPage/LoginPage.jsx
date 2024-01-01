import { Link, useNavigate } from 'react-router-dom';
import olxLogo from '../../assets/logoOLX.svg';
import { useDispatch } from 'react-redux';
import { handleLogIn } from '../../redux/actions/RegistrationActions/Actions';
import { useState } from 'react';

const LoginPage = () => {

    const [email,setEmail] = useState('');
    const [sifra,setSifra] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/auth/login',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify({
                    email:email,
                    sifra:sifra
                })
            })

            if(!response.ok)
                throw Error("Pogresna sifra ili email")

            const data = await response.json();

            dispatch(handleLogIn(data.user))
            navigate('/')
        } catch (error) {
            alert(error)
        }           

    }

    return ( 
        <div className='bgp min-h-screen grid place-items-center'>
            <div className='bg-white px-5 py-7 rounded-sm md:min-w-[400px]'>
                <img src={olxLogo} width={110} className=' mx-auto'/>
                <p className=' text-[22px] mt-7'>Prijava</p>
                    <form action="" className='flex flex-col'>
                        <label htmlFor="name" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>KORISNIČKO IME ILI EMAIL</label>
                        <input type="text" name="name" value={email} className='bg-gray-100 outline-none p-3 rounded-md' onChange={(e) =>setEmail(e.target.value)}/>
                        <label htmlFor="pass" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>ŠIFRA</label>
                        <input type="password" name="pass" value={sifra} className='bg-gray-100 outline-none p-3 rounded-md' onChange={(e) =>setSifra(e.target.value)}/>
                        <Link to={"/"} className='py-3  ml-auto'>Zaboravili ste šifru?</Link>
                        <button className='bgp text-white py-3 text-sm font-semibold rounded-md' onClick={(e) => handleLogin(e)}>Prijavi se</button>
                        <div className='mt-7 flex justify-evenly'>
                            <span className='text-base text-gray-400 font-thin'>
                                Nemate korisnički račun? 
                            </span>
                            <Link to={"/register"} className='font-semibold'>Registruj se</Link>
                        </div>
                    </form>
            </div>
        </div>
     );
}
 
export default LoginPage;