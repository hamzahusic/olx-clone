import { Link, useNavigate } from 'react-router-dom';
import olxLogo from '../../assets/logoOLX.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleLogIn } from '../../redux/actions/RegistrationActions/Actions';

const RegisterPage = () => {

    const [ime,setIme] = useState('');
    const [prezime,setPrezime] = useState('');
    const [email,setEmail] = useState('');
    const [sifra,setSifra] = useState('');
    const [adresa,setAdresa] = useState('');
    const [brojTelefona,setBrojTelefona] = useState('');
    const [slika,setSlika] = useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRegister = async (e) => {
        e.preventDefault();

        if(!ime || !prezime || !email || !sifra || !adresa ||!brojTelefona){
            alert("Unesite sve informacije")
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/auth/register',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify({
                    ime:ime,
                    prezime:prezime,
                    email:email,
                    sifra:sifra,
                    adresa:adresa,
                    broj_telefona:brojTelefona,
                    zadnja_prijava: new Date(),
                    slika_link : slika
                })
            })

            if(!response.ok)
                throw Error("Unesite sve informacije")

            const data = await response.json()

            console.log(data);

            dispatch(handleLogIn(data.user))
            navigate('/')

        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return ( 
        <div className='bgp min-h-screen grid place-items-center relative overflow-hidden'>
            <div className='white-outline-space absolute animate-circle'></div>
            <div className='bg-white px-5 py-7 mt-10 mb-5 rounded-sm md:min-w-[400px]  z-50'>
                <img src={olxLogo} width={110} className=' mx-auto'/>
                <p className=' text-[22px] mt-7'>Registracija</p>
                    <form action="" className='flex flex-col'>
                        <label htmlFor="name" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2 ' >IME</label>
                        <input type="text" name="name" className='bg-gray-100 outline-none p-3 rounded-md' required onChange={(e) => setIme(e.target.value)}/>
                        <label htmlFor="name" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>PREZIME</label>
                        <input type="text" name="name" className='bg-gray-100 outline-none p-3 rounded-md' required onChange={(e) => setPrezime(e.target.value)}/>
                        <label htmlFor="name" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>EMAIL</label>
                        <input type="email" name="name" className='bg-gray-100 outline-none p-3 rounded-md' required onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="pass" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>ŠIFRA</label>
                        <input type="text" name="pass" className='bg-gray-100 outline-none p-3 rounded-md' required onChange={(e) => setSifra(e.target.value)}/>
                        <label htmlFor="adresa" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>ADRESA</label>
                        <input type="text" name="adresa" className='bg-gray-100 outline-none p-3 rounded-md' required onChange={(e) => setAdresa(e.target.value)}/>
                        <label htmlFor="telefon" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>BROJ TELEFONA</label>
                        <input type="number" name="telefon" className='bg-gray-100 outline-none p-3 rounded-md' required onChange={(e) => setBrojTelefona(e.target.value)}/>
                        <label htmlFor="slika" className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>UNESITE LINK SLIKE</label>
                        <input type="text" name="slika" className='bg-gray-100 outline-none p-3 rounded-md' onChange={(e) => setSlika(e.target.value)}/>
                        <div className='py-5 text-base flex gap-2'>
                            <input type="checkbox" required className='txt-xl'/>
                            Slažem se sa uslovima korištenja
                        </div>
                        <button className='bgp text-white py-3 text-sm font-semibold rounded-md' onClick={handleRegister}>Registruj se</button>
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