import type { NextPage } from 'next'
import {useState} from "react";

const Home: NextPage = () => {

  let [ausbringmenge, setAusbringmenge] =  useState(0.0);
  let [geschwindigkeit, setGeschwindigkeit] =  useState(0.0);
  let [reichweite, setReichweite] =  useState(0.0);
  let [zapfwellendrehzahl, setZapfwellendrehzahl] =  useState(0.0);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-evenly p-5 text-3xl'>
          <h1>Kacke Ballern</h1>
      </div>
      <div className='flex flex-row justify-evenly p-5'>
          <div>
            <h1 className='text-center'>Ausbringmenge</h1>
            <input type="number" value={ausbringmenge} onChange={(e) => setAusbringmenge(parseFloat(e.target.value))}/>
          </div>
          <div>
            <h1 className='text-center'>Geschwindigkeit</h1>
            <input type="number" value={geschwindigkeit} onChange={(e) => setGeschwindigkeit(parseFloat(e.target.value))}/>
          </div>
      </div>
      <div className='flex flex-row justify-evenly p-5'>
          <div>
            <h1 className='text-center'>Reichweite</h1>
            <input type="number" value={reichweite} onChange={(e) => setReichweite(parseFloat(e.target.value))}/>
          </div>
          <div>
            <h1 className='text-center'>Zapfwellendrehzahl</h1>
            <input type="number" value={zapfwellendrehzahl} onChange={(e) => setZapfwellendrehzahl(parseFloat(e.target.value))}/>
          </div>
      </div>
      <div className='flex flex-row justify-evenly p-5'>
        <p>Ergebnis: {ausbringmenge + geschwindigkeit + reichweite + zapfwellendrehzahl}</p>
      </div>
    </div>
  )
}

export default Home
