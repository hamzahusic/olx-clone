import closeIcon from '../assets/close.svg'
const PopUp = ({isOpen,onClose,children,title}) => {
    return  isOpen ? (   
            <div className="bg-black/20 fixed top-0 right-0 bottom-0 left-0 z-[9999] grid place-content-center">
                <div className="bg-white w-full md:min-w-[600px] rounded">
                    <div className='flex justify-between items-center px-5 py-3 border-b-[1px] border-gray-100'>
                        <p className=' font-medium text-base'>{title}</p>
                        <button onClick={onClose}>
                            <img src={closeIcon} width={14}/>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
     ) : null;
}
 
export default PopUp;