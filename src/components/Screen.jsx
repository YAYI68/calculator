import { useContext } from 'react';
import { CalcContext } from './Context/CalcContext';

const Screen = () => {
    const { expression, result } = useContext(CalcContext)
    const {theme} = useContext(CalcContext)
    return (
        <div className={`w-full  px-4 py-2 text-sm text-white  flex flex-col gap-3 ${theme==="first"? "bg-base1":"bg-base2"} `}>
            <div mode='single' max={40}>
                <div className='flex flex-1 items-start justify-start p-2 text-[1rem]'>{result}</div>
            </div>
            <div mode='single' max={40}>
                <div className='flex flex-1 items-end justify-end p-2 text-[1.2rem]'>{expression === '' ? 0 : expression}</div>
            </div>
        </div>
    )
}

export default Screen
