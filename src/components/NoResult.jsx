import noArticlesIcon from '../assets/no-articles-olx.svg'

const NoResult = ({text}) => {
    return ( 
        <div className="w-full grid place-items-center">
            <div className="grid place-items-center gap-2">
                <img src={noArticlesIcon} className="max-w-[100px]"/>
                <p className="text-lg">{text}</p>
            </div>
        </div>
    );
}
 
export default NoResult;