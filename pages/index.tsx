import type { NextPage } from 'next'
import {useState} from "react";

type AddButtonProps = {
  label: string,
  get: number,
  add: () => void,
  reduce: () => void,
  change: (value: number) => void,
}

const AddButton = ({label, get, add, reduce, change}: AddButtonProps) => {

    return (
      <div>
        <h1 className='text-center text-kb-white text-2xl pt-12 md:pt-0'>{label}</h1>
          <div className='flex flex-row justify-center'>
            <button className='text-6xl text-kb-white px-3' onClick={() => reduce()}>-</button>
            <input pattern="\d*" width={2} style={{background: 'none'}} className='text-kb-white border-t-0 border-x-0 border-b-2 appearance-none border-2 text-8xl border-gray-200 rounded w-48 py-2 text-center leading-tight focus:outline-none focus:bg-white' type="number" value={get} onChange={(e) => change(parseFloat(e.target.value))}/>
            <button className='text-4xl text-kb-white px-3' onClick={() => add()}>+</button>
          </div>
      </div>
    )
}


const Home: NextPage = () => {

  let [ausbringmenge, setAusbringmenge] =  useState(0.0);
  let [geschwindigkeit, setGeschwindigkeit] =  useState(0.0);
  let [reichweite, setReichweite] =  useState(0.0);
  let [zapfwellendrehzahl, setZapfwellendrehzahl] =  useState(0.0);

  return (
      <>

      <AddButton label='Geschwindigkeit'
                 get={geschwindigkeit}
                 add={() => setGeschwindigkeit(geschwindigkeit + 1)}
                 reduce={() => setGeschwindigkeit(geschwindigkeit - 1)}
                 change={(value) => setGeschwindigkeit(value)}
      />


      <div className='flex flex-col justify-between bg-kb-green h-full'>
            <div className='flex flex-col mt-6'>
              <div className='flex flex-row justify-evenly p-5 text-3xl'>
                  <h1 className='text-kb-white font-bold text-4xl s:text-5xl lg:text-7xl'>Kacke Ballern</h1>
              </div>
              <div className='flex flex-col md:flex-row justify-evenly p-10'>
                  <div>
                    <h1 className='text-center text-kb-white text-2xl'>Ausbringmenge</h1>
                    <div className='flex flex-row justify-center pt-3'>
                        <p style={{background: 'none'}} className='text-kb-white border-2 appearance-none border-2 text-8xl border-gray-200 rounded w-48 py-2 text-center leading-tight focus:outline-none focus:bg-white'>{ausbringmenge}</p>
                    </div>
                  </div>
              </div>
              <div className='flex flex-col md:flex-row justify-evenly pt-8'>
                  <div>
                    <h1 className='text-center text-kb-white text-2xl'>Reichweite</h1>
                      <div className='flex flex-row justify-center pt-3'>
                        <p style={{background: 'none'}} className='text-kb-white border-2 appearance-none border-2 text-8xl border-gray-200 rounded w-48 py-2 text-center leading-tight focus:outline-none focus:bg-white'>{reichweite}</p>
                      </div>
                  </div>
                  <div>
                    <h1 className='text-center text-kb-white text-2xl pt-12 md:pt-0'>Zapfwellendrehzahl</h1>
                      <div className='flex flex-row justify-center'>
                        <button className='text-6xl text-kb-white px-3' onClick={() => setZapfwellendrehzahl(zapfwellendrehzahl - 1)}>-</button>
                        <input pattern="\d*" width={2} style={{background: 'none'}} className='text-kb-white border-t-0 border-x-0 border-b-2 appearance-none border-2 text-8xl border-gray-200 rounded w-48 py-2 text-center leading-tight focus:outline-none focus:bg-white' type="number" value={zapfwellendrehzahl} onChange={(e) => setZapfwellendrehzahl(parseFloat(e.target.value))}/>
                        <button className='text-4xl text-kb-white px-3' onClick={() => setZapfwellendrehzahl(zapfwellendrehzahl + 1)}>+</button>
                      </div>
                  </div>
              </div>
              <div className='flex flex-row justify-evenly py-16 text-kb-white'>
                <p className='text-5xl pt-8 font-extrabold'>Ergebnis: {ausbringmenge + geschwindigkeit + reichweite + zapfwellendrehzahl}</p>
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

      </>
  )
}
export default Home
