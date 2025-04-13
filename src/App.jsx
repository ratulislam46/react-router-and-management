
import { Suspense } from 'react'
import './App.css'
import Daisynavbar from './Components/DaisyNavbar/Daisynavbar'
import JsonNavbar from './Components/Navbar/JsonNavbar'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions.jsx/PricingOptions'
import DaisyCard from './Components/DaisyCard/DaisyCard'
import Rechart from './Components/Rechart/Rechart'
import axios from 'axios'
import MarkChart from './Components/MarkChart/MarkChart'


const pricingPromise = fetch('PricingData.json').then(res => res.json());

const marksPromise = axios ('markData.json');


function App() {


  return (
    <>
      <header>
        <JsonNavbar></JsonNavbar>

        {/* <Navbar></Navbar> */}

        {/* <Daisynavbar></Daisynavbar> */}
      </header>
      <main>

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Rechart></Rechart>

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <MarkChart marksPromise={marksPromise}></MarkChart>
        </Suspense>

      </main>


    </>
  )
}

export default App
