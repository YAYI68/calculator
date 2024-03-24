
import { useContext } from 'react';
import { CalcContext } from './Context/CalcContext';
import buttonColors from './buttonColors';

const Button = ({ value , className }) => {
  const { handleClickBtn } = useContext(CalcContext);

  // Get the color class for the current button value
  const colorClass = buttonColors[value] || 'bg-blue-500'; // Default to blue if no specific color is defined

  // Determine the grid class based on the button value
  const gridClass = value === '0' ? 'col-span-2' : 'col-span-1';

  return (
    <div className={gridClass}>
      <button
        className={`w-full p-4 text-white text-xl font-bold  ${className}`}
        onClick={() => handleClickBtn(value)}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
