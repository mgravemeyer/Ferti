import type { NextPage } from 'next'
import {useState} from "react";

type AddButtonProps = {
  label: string,
  get: number,
  add: () => void,
  reduce: () => void,
  change: (value: number) => void,
  className?: string
}

const AddButton = ({label, get, add, reduce, change, className}: AddButtonProps) => {

    return (
      <div className={className}>
        <h1 className='text-center text-kb-green-dark text-2xl md:pt-0'>{label}</h1>
          <div className='flex flex-row justify-center'>
            <button className='text-6xl text-kb-green-dark px-3' onClick={() => reduce()}>-</button>
            <input pattern="\d*" width={2} style={{background: 'none'}} className='text-kb-green-dark border-t-0 border-x-0 border-b-2 appearance-none border-2 text-8xl border-gray-200 rounded w-48 py-2 text-center leading-tight focus:outline-none focus:bg-white' type="number" value={get} onChange={(e) => change(parseFloat(e.target.value))}/>
            <button className='text-4xl text-kb-green-dark px-3' onClick={() => add()}>+</button>
          </div>
      </div>
    )
}

type DisplayNumberProps = {
  label: string,
  get: number
}

const DisplayNumber = ({label, get}: DisplayNumberProps) => {

    return (
      <div className='flex flex-col md:flex-row justify-evenly p-10'>
        <div>
            <h1 className='text-center text-kb-green-dark text-2xl'>{label}</h1>
            <div className='flex flex-row justify-center pt-3'>
            <p style={{background: 'none'}} className='text-kb-green-dark border-2 appearance-none border-2 text-8xl border-gray-200 w-48 py-2 text-center leading-tight focus:outline-none focus:bg-white'>{get}</p>
            </div>
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
      <div className='p-8 flex flex-col justify-between items-center md:items-start h-screen'>
          <h1 className='text-4xl font-extrabold'>Kacke Ballern</h1>

          <div className='flex flex-row'>
              <div className='pb-12'>
                <AddButton label='Geschwindigkeit'
                           get={geschwindigkeit}
                           add={() => setGeschwindigkeit(geschwindigkeit + 1)}
                           reduce={() => setGeschwindigkeit(geschwindigkeit - 1)}
                           change={(value) => setGeschwindigkeit(value)}
                           className='pb-8 md:pb-16'
                />
                <AddButton label='Zapfwellendrehzahl'
                           get={zapfwellendrehzahl}
                           add={() => setZapfwellendrehzahl(zapfwellendrehzahl + 1)}
                           reduce={() => setZapfwellendrehzahl(zapfwellendrehzahl - 1)}
                           change={(value) => setZapfwellendrehzahl(value)}
                />
            </div>
          </div>

          <footer className="bg-kb-white md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-kb-green-dark">
                © 2022 <a href="https://google.com" className="hover:underline">Hermann und Max</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 text-kb-green-dark">Datenschutzbestimmungen</a>
                </li>
                <li>
                    <a href="#" className="hover:underline text-kb-green-dark">Kontakt</a>
                </li>
            </ul>
          </footer>
      </div>
  )
}
export default Home
