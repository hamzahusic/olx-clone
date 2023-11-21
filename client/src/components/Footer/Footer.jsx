import googleIcon from '../../assets/footerImg/googlestore.svg'
import appStoreIcon from '../../assets/footerImg/appstore.svg'
import phoneIcon from '../../assets/footerImg/phone.svg'

const Footer = () => {

    const date = new Date();

    return ( 
        <footer className={`p-5  text-sm bg-white`}>
            <div className='flex gap-40 items-start py-5 justify-center'>
                <ul className='flex flex-col gap-2'>
                    <a href=""><li className='mb-2 font-[500]'>INFORMACIJE I KONTAKT</li></a>
                    <a href=""><li>O nama</li></a>
                    <a href=""><li>Uslovi korištenja</li></a>
                    <a href=""><li>Online sigurnost</li></a>
                    <a href=""><li>Marketing</li></a>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <a href=""><li className='mb-2 font-[500]'>OSTALI LINKOVI</li></a>
                    <a href=""><li>OLX.ba blog</li></a>
                    <a href=""><li>OLX.ba na Facebooku</li></a>
                    <a href=""><li>Shopovi</li></a>
                    <a href=""><li>Pridruži se OLX timu</li></a>
                    <a href=""><li>Šta je OLX dostava</li></a>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <a href=""><li className='mb-2 font-[500]'>VAŠ OLX</li></a>
                    <a href=""><li>OLX kredit</li></a>
                    <a href=""><li>Sigurnost i zaštita</li></a>
                    <a href=""><li>Pravila i uslovi korištenja</li></a>
                </ul>
                <a href="/" className='flex items-center justify-center font-[600] border-2 border-[#002f34] gap-2 px-4 py-3'>
                    <img src={phoneIcon}/>
                    Podrška korisnicima
                </a>
                <div className='flex flex-col gap-4'>
                    <a href="/">
                        <img src={appStoreIcon}/>
                    </a>
                    <a href="/">
                        <img src={googleIcon}/>
                    </a>
                </div>
            </div>
            <div className='py-5 text-center'>
                <p>Copyright © 2009 - {date.getFullYear()} Pik d.o.o. Sva prava zadržana.</p>
            </div>
        </footer>
     );
}
 
export default Footer;