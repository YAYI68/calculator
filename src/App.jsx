
import { useContext } from 'react'
import ButtonBox from './components/ButtonBox'


import Screen from './components/Screen'
import Theme from './components/Theme'
import { CalcContext } from './components/Context/CalcContext'

export default function App() {
  const {theme} = useContext(CalcContext)
  console.log({theme})
  return (
    <div className=' flex items-center justify-center h-screen relative'>
       <Theme />
    <div className={`${theme==="first"? "bg-base1":"bg-base2"} w-80 max-w-80 mx-auto p-1 shadow-lg`}>
    <Screen/>
    <ButtonBox/>
    </div>
    
    </div>
    
    
  )
}
