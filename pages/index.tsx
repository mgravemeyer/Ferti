import type { NextPage } from 'next'
import {useState} from "react";

const Home: NextPage = () => {

  let [ausbringmenge, setAusbringmenge] =  useState(0.0);
  let [geschwindigkeit, setGeschwindigkeit] =  useState(0.0);
  let [reichweite, setReichweite] =  useState(0.0);
  let [zapfwellendrehzahl, setZapfwellendrehzahl] =  useState(0.0);

  return (
      <div className='flex flex-col justify-between h-screen bg-kb-green'>
            <div className='flex flex-col mt-6'>
              <div className='flex flex-row justify-evenly p-5 text-3xl'>
                  <h1 className='text-kb-white text-4xl lg:text-7xl'>Kacke Ballern</h1>
              </div>
              <div className='flex flex-row justify-evenly p-5'>
                  <div>
                    <h1 className='text-center text-kb-white'>Ausbringmenge</h1>
                    <input type="number" value={ausbringmenge} onChange={(e) => setAusbringmenge(parseFloat(e.target.value))}/>
                  </div>
                  <div>
                    <h1 className='text-center text-kb-white'>Geschwindigkeit</h1>
                    <input type="number" value={geschwindigkeit} onChange={(e) => setGeschwindigkeit(parseFloat(e.target.value))}/>
                  </div>
              </div>
              <div className='flex flex-row justify-evenly p-5'>
                  <div>
                    <h1 className='text-center text-kb-white'>Reichweite</h1>
                    <input type="number" value={reichweite} onChange={(e) => setReichweite(parseFloat(e.target.value))}/>
                  </div>
                  <div>
                    <h1 className='text-center text-kb-white'>Zapfwellendrehzahl</h1>
                    <input type="number" value={zapfwellendrehzahl} onChange={(e) => setZapfwellendrehzahl(parseFloat(e.target.value))}/>
                  </div>
              </div>
              <div className='flex flex-row justify-evenly p-5 text-kb-white'>
                <p>Ergebnis: {ausbringmenge + geschwindigkeit + reichweite + zapfwellendrehzahl}</p>
              </div>
            </div>
          <div>
          <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-kb-white">
                © 2022 <a href="https://google.com" className="hover:underline">Hermann und Max</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 text-kb-white">Datenschutzbestimmungen</a>
                </li>
                <li>
                    <a href="#" className="hover:underline text-kb-white">Kontakt</a>
                </li>
            </ul>
          </footer>
        </div>
      </div>
  )
}

export default Home
