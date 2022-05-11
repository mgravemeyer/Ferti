import type { NextPage } from 'next'
import {useState, useEffect} from "react";
import Image from "next/image";
import distanceIcon from '../public/distance.png';
import tankerIcon from '../public/tanker.png';

type AddButtonProps = {
  label: string,
  get: number,
  add: () => void,
  reduce: () => void,
  change: (value: number) => void,
  className?: string,
  floatDigits: number
}

const AddButton = ({label, get, add, reduce, change, className, floatDigits}: AddButtonProps) => {

    return (
      <div className={className}>
        <h1 className='text-center text-kb-green-dark text-2xl md:pt-0'>{label}</h1>
          <div className='flex flex-row justify-center'>
            <button className='text-6xl text-kb-green-dark px-3' onClick={() => reduce()}>-</button>
            <input pattern="\d*" width={2} style={{background: 'none'}} className='text-kb-green-dark border-t-0 border-x-0 border-b-2 appearance-none border-2 text-8xl border-gray-200 w-48 text-center leading-tight focus:outline-none focus:bg-white' type="number" value={get.toFixed(floatDigits)} onChange={(e) => change(parseFloat(e.target.value))}/>
            <button className='text-4xl text-kb-green-dark px-3' onClick={() => add()}>+</button>
          </div>
      </div>
    )
}

type DisplayNumberProps = {
  label: string,
  get: number,
  unit: string,
  className?: string
  icon: any
}

const DisplayNumber = ({label, get, unit, className, icon}: DisplayNumberProps) => {

    return (
        <div className={`flex flex-row items-center ${className}`}>
          <div className='flex items-center h-full w-16 pr-4'>
            <Image alt='icon' src={icon}/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex flex-row items-baseline'>
              <p className='text-kb-green-dark text-2xl'>{get}&nbsp;</p>
              <p className='text-kb-green-dark'>{unit}</p>
            </div>
            <p className='text-kb-green-dark'>{label}</p>
          </div>
        </div>
    )
}


const Home: NextPage = () => {

  let [ausbringmenge, setAusbringmenge] =  useState(0.0);
  let [geschwindigkeit, setGeschwindigkeit] =  useState(10.0);
  let [reichweite, setReichweite] =  useState(0.0);
  let [zapfwellendrehzahl, setZapfwellendrehzahl] =  useState(200);

  useEffect(() => {
        setAusbringmenge(geschwindigkeit * zapfwellendrehzahl);
        setReichweite(geschwindigkeit * geschwindigkeit);
  }, [geschwindigkeit, zapfwellendrehzahl])

  return (
      <div className='p-8 flex flex-col justify-between items-center h-screen'>
          <h1 className='text-4xl font-extrabold text-center'>Gülle-Nährstoffe einfach und richtig dosieren</h1>

          <div className='flex flex-col md:flex-row pt-8 pb-32'>
            <div className='pt-8'>
              <AddButton label='Geschwindigkeit'
                         get={geschwindigkeit}
                         add={() => setGeschwindigkeit(geschwindigkeit + 0.5)}
                         reduce={() => setGeschwindigkeit(geschwindigkeit - 0.5)}
                         change={(value) => setGeschwindigkeit(value)}
                         className='pb-8 md:pb-16'
                         floatDigits={1}
              />
              <AddButton label='Zapfwellendrehzahl'
                         get={zapfwellendrehzahl}
                         add={() => setZapfwellendrehzahl(zapfwellendrehzahl + 50)}
                         reduce={() => setZapfwellendrehzahl(zapfwellendrehzahl - 50)}
                         change={(value) => setZapfwellendrehzahl(value)}
                         floatDigits={0}
              />
            </div>
            <div className='flex flex-col justify-center pl-4 md:pl-8 mb:pb-4 pt-12 md:pt-0 w-60'>
              <p className='text-2xl mb-4 text-kb-white bg-kb-green-dark pl-2'>Ergebnisse:</p>
              <DisplayNumber className='mb-4 pl-2' icon={tankerIcon} label='Ausbringmenge' get={ausbringmenge} unit='m³/ha'/>
              <DisplayNumber className='pl-2' icon={distanceIcon} label='Reichweite' get={reichweite} unit='meter'/>
            </div>
          </div>

          <footer className="bg-kb-white flex flex-col gap-0 md:flex-row">
            <span className="text-sm text-kb-green-dark text-center text-kb-green-dark">
              <p className='md:mr-8'>© 2022 Hermann Max</p>
            </span>
            <ul className="flex flex-wrap items-center text-sm text-kb-green-dark">
                <li>
                    <a href="#" className="hover:underline text-kb-green-dark mr-2">Datenschutzbestimmungen</a>
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
