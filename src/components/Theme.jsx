import { useContext } from "react";
import { CalcContext } from "./Context/CalcContext";

const Theme = () => {
    const { setTheme } = useContext(CalcContext);

    const handleChange = (data)=>{
        setTheme(data)
    }
    
  return (
    <div className='w-full px-[8rem] py-[2rem] absolute top-10 left-10'>
        <select name="" id="" onChange={(e)=>handleChange(e.target.value)} className="border-2 p-2 rounded-sm ">
            <option value={'first'} >First Theme </option>
            <option value={'second'} >Second Theme</option>
        </select>
    </div>
  )
}

export default Theme