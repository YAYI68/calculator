import { createContext, useState } from "react";

export const CalcContext = createContext();
const CalcProvider = ({ children }) => {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const [isNegative, setIsNegative] = useState(false); // State to track negation
  const [operatorClicked, setOperatorClicked] = useState(false);
  const [theme,setTheme] = useState("second")
   // State to track if an operator has been clicked

  const handleClickBtn = (value) => {
    if (value === "=") {
      try {
        // Replace ÷ symbol with /
        const sanitizedExpression = expression.replace(/÷/g, "/");
        // Evaluate expression
        setResult(eval(sanitizedExpression));
      } catch (err) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setResult("");
      setExpression("");
      setIsNegative(false);
      setOperatorClicked(false); // Reset operatorClicked state
    } else if (value === "%") {
      setExpression((prevExpression) => `(${prevExpression}) / 100`);
      setOperatorClicked(false); // Reset operatorClicked state
    } else if (value === "±") {
      // Toggle the negation state
      setIsNegative((prevState) => !prevState);
      // Modify the expression based on negation state
      if (isNegative) {
        setExpression((prevExpression) => prevExpression.replace("-", ""));
      } else {
        setExpression((prevExpression) => "-" + prevExpression);
      }
      setOperatorClicked(false); // Reset operatorClicked state
    } else if (isNaN(parseInt(value))) {
      // Check if the clicked button is an operator
      // If an operator has already been clicked, ignore subsequent operator clicks
      if (operatorClicked) {
        return;
      }
      setExpression((prevExpression) => prevExpression + value);
      setOperatorClicked(true); // Set operatorClicked to true
    } else {
      setExpression((prevExpression) => prevExpression + value);
      setOperatorClicked(false); // Reset operatorClicked state
    }
  };

  const valueProvider = { result, expression, handleClickBtn,theme,setTheme };

  return (
    <CalcContext.Provider value={valueProvider}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
