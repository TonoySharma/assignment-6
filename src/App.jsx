
import { useState } from 'react'
import './App.css'
import ActiveCount from './components/banner/ActiveCount'
import Banner from './components/banner/Banner'
import EmptyCard from './components/emptyCard/EmptyCard'
import Footer1 from './components/footerSection/Footer1'
import Footer2 from './components/footerSection/Footer2'
import Navber from './components/navber/Navber'
import AllCards from './components/premiumCards/AllCards'
import GetStarted from './components/premiumCards/GetStarted'



const getModels = async () => {
  const res = await fetch("/Models.json")
  return res.json()
}

const modelPromise = getModels()



function App() {
  const [activeTap, setActiveTap] = useState ("Products");
  // console .log (activeTap);
  const [carts, setCarts] = useState([])
  // console.log(carts);
 const [selectedType, setSelectedType] = useState("available");
//  console.log(selectedType);

  return (
   <>
    <Navber carts={carts}></Navber>
    <Banner></Banner>
    <ActiveCount></ActiveCount>
    
            {/* taps button */}
          <div className="tabs tabs-box justify-center mt-8 bg-transparent mb-10">
            <input type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${selectedType === "available" ? "bg-gradient-to-r from-[#6A5AF9] to-[#A43BF3] text-white" :"text-black"} font-semibold`} aria-label="Products" onClick={() => {
              setActiveTap("Products");
              setSelectedType("available");
            }}/>

            <input type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${selectedType === "selected" ? "bg-gradient-to-r from-[#6A5AF9] to-[#A43BF3] text-white" :"text-black"} font-semibold`} aria-label={`cart (${carts.length})`} onClick={()=> {setActiveTap("card");
              setSelectedType("selected");
            }} />
          </div>

    {activeTap === "Products" && <AllCards modelPromise={modelPromise} carts={carts} setCarts={setCarts}></AllCards>}

    {activeTap === "card" && <EmptyCard carts={carts} setCarts={setCarts}></EmptyCard>}

    <GetStarted></GetStarted>
    <Footer1></Footer1>
    <Footer2></Footer2>
   
   </>
  )
}

export default App
