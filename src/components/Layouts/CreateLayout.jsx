import OLXLogo from '../../assets/logoOLX.svg'
import arrowLeft from '../../assets/chevron-left.svg'
import { Link } from 'react-router-dom';
const CreateArticleLayout = ({children,previousStep,nextStep,progress=25}) => {
    return ( 
        <div>
            <div className='sticky top-0 pt-3 bg-white'>
                <Link to={'/'}>
                    <img src={OLXLogo} className='max-w-[70px] ml-4 mb-3'/>
                    <div className='bg-gray-200'>
                        <p className={`border-b-4 border-[var(--pcolor)] block rounded`}  style={{ width: `${progress}%`}}></p>
                    </div>
                </Link>
            </div>
            <div className=' bg-[#f1f4f5] py-7 '>
                <div className='max-w-[800px] bg-white mx-auto md:h-[80vh] md:max-h-[80vh] overflow-y-scroll p-6'>
                    {children}
                </div>
            </div>
            <div className='border-t-2 border-gray-200 bg-white fixed bottom-0 left-0 right-0 z-50 py-2 px-4'>
                <div className='flex items-center justify-between max-w-[1100px] mx-auto'>
                    <button onClick={previousStep}>
                        <img src={arrowLeft}/>
                    </button>
                    <button className='p-3 border-2 border-[var(--pcolor)] rounded' onClick={nextStep}>Nastavi</button>
                </div>
            </div>
        </div>
     );
}
 
export default CreateArticleLayout;