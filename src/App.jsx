
import { Suspense } from 'react'
import './App.css'
import Daisynavbar from './Components/DaisyNavbar/Daisynavbar'
import JsonNavbar from './Components/Navbar/JsonNavbar'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions.jsx/PricingOptions'
import DaisyCard from './Components/DaisyCard/DaisyCard'
import Rechart from './Components/Rechart/Rechart'


const pricingPromise = fetch('PricingData.json').then(res => res.json());

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

      </main>


    </>
  )
}

export default App
