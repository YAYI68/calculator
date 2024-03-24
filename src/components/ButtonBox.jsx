import { useContext } from "react";
import Button from "./Button";
import { CalcContext } from "./Context/CalcContext";

const ButtonBox = () => {
  const {theme} = useContext(CalcContext)
  return (
    <div className=" w-full  grid grid-cols-4 gap-1 pt-1  h-fit">
      <Button value="AC" className={`${theme==='first'?'bg-secondarybase1':'bg-secondarybase2'}`} />
      <Button value="±" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="%" className={`${theme==='first'?'bg-secondarybase1':'bg-secondarybase2'}`} />
      <Button value="÷" className={`${theme==='first'?'bg-[#ff9f0c]':'bg-[#cc0000]'}`} />
      <Button value="7" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="8" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="9" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="*" className={`${theme==='first'?'bg-[#ff9f0c]':'bg-[#cc0000]'}`} />
      <Button value="4" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="5" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} /> 
      <Button value="6" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="-" className={`${theme==='first'?'bg-[#ff9f0c]':'bg-[#cc0000]'}`} />
      <Button value="1" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="2" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="3" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`}/>
      <Button value="+" className={`${theme==='first'?'bg-[#ff9f0c]':'bg-[#cc0000]'}`} />
      <Button value="0" className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="." className={`${theme==='first'?'bg-thirdbase1 hover:bg-hoverbase1':'bg-thirdbase2 hover:bg-hoverbase2'}`} />
      <Button value="=" className={`${theme==='first'?'bg-[#ff9f0c]':'bg-[#cc0000]'}`} />
    </div>
    
  );
};

export default ButtonBox;
