import type { NextPage } from 'next'
import {useState, useEffect, useRef} from "react";
import distanceIcon from '../public/distance.png';
import tankerIcon from '../public/tanker.png';
import Navigation from "../components/Navigation";
import PumpSelection from "../components/PumpSelection";
import AddButton from "../components/AddButton";
import DisplayNumber from "../components/DisplayNumber";


const Home: NextPage = () => {

  let [ausbringmenge, setAusbringmenge] =  useState(1000);
  let [geschwindigkeit, setGeschwindigkeit] =  useState(10.0);
  let [reichweite, setReichweite] =  useState(1000);
  let [zapfwellendrehzahl, setZapfwellendrehzahl] =  useState(200);

  let oldAusbringmenge = useRef(0);
  let oldReichweite = useRef(0);

  useEffect(() => {
    oldAusbringmenge.current = ausbringmenge;
  }, [ausbringmenge])

  useEffect(() => {
    oldReichweite.current = reichweite;
    console.log(reichweite)
  }, [reichweite])

  useEffect(() => {
        setAusbringmenge(geschwindigkeit * zapfwellendrehzahl);
        setReichweite(geschwindigkeit * 8 + zapfwellendrehzahl);
  }, [geschwindigkeit, zapfwellendrehzahl])

  return (
      <div className='h-vh h-screen flex flex-col justify-between p-6 sm:px-20 lg:px-44 md:py-10'>
          <Navigation/>
          <div className='flex flex-col justify-between items-center'>
              <h1 className='text-3xl md:text-4xl font-extrabold text-center pb-10'>Gülle-Nährstoffe einfach und richtig dosieren</h1>

              <div className='flex flex-col md:flex-row h-full pb-8'>
                <div className='pb-8'>
                  <AddButton label='Geschwindigkeit'
                             get={geschwindigkeit}
                             add={() => setGeschwindigkeit(geschwindigkeit + 0.5)}
                             reduce={() => setGeschwindigkeit(geschwindigkeit - 0.5)}
                             change={(value) => setGeschwindigkeit(value)}
                             className='pb-8 md:pb-16'
                             floatDigits={1}
                             unit='km/h'
                  />
                  <AddButton label='Zapfwellendrehzahl'
                             get={zapfwellendrehzahl}
                             add={() => setZapfwellendrehzahl(zapfwellendrehzahl + 50)}
                             reduce={() => setZapfwellendrehzahl(zapfwellendrehzahl - 50)}
                             change={(value) => setZapfwellendrehzahl(value)}
                             className='pb-8 md:pb-16'
                             floatDigits={0}
                             unit='U/min'
                  />
                  <PumpSelection/>
                </div>
                <div className='flex flex-col justify-center pl-4 md:pl-14 mb:pb-4 md:pt-0 pr-2 md:pb-20'>
                  <p className='text-2xl mb-4 text-kb-white bg-kb-green-dark pl-2'>Ergebnisse:</p>
                  <DisplayNumber className='mb-4 pl-2' icon={tankerIcon} label='Ausbringmenge' get={ausbringmenge} old={oldAusbringmenge.current} unit='m³/ha' prefix={'ausbringmenge'}/>
                  <DisplayNumber className='pl-2' icon={distanceIcon} label='Reichweite' get={reichweite} old={oldReichweite.current} unit='meter' prefix={'reichweite'}/>
                </div>
              </div>
          </div>
          <footer className="bg-kb-white flex flex-col gap-0 md:flex-row justify-center items-center">
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
