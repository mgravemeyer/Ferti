import type { NextPage } from 'next'
import {useState, useEffect, useRef} from "react";
import distanceIcon from '../public/distance.png';
import tankerIcon from '../public/tanker.png';
import nutritionIcon from '../public/nutrition.png';
import Navigation from "../components/Navigation";
import PumpSelection from "../components/PumpSelection";
import AddButton from "../components/AddButton";
import DisplayNumber from "../components/DisplayNumber";
import DisplayNumberNutrition from "../components/DisplayNumberNutrition";


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
      <div className='flex flex-col justify-between h-full overflow-scroll'>
          <div className='flex flex-col p-6 sm:px-20 lg:px-44 md:py-10'>
              <Navigation/>
              <div className='flex flex-col justify-between items-center'>
                  <h1 className='text-3xl md:text-4xl font-extrabold text-center pb-10 text-kb-green-dark'>Gülle-Nährstoffe einfach und richtig dosieren</h1>

                  <div className='flex flex-col md:flex-row w-full  h-full pb-8 justify-center'>
                    <div className='pb-8 md:flex-initial md:w-96'>
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
                    <div className='flex flex-col justify-center md:justify-start pl-4 md:pl-14 mb:pb-4 md:pt-0 pr-2 w-full md:pb-20 md:flex-initial md:w-80'>
                      <p className='text-2xl mb-4 text-kb-white bg-kb-green-dark pl-2 md:mt-32'>Ergebnisse:</p>
                      <DisplayNumber className='mb-4 pl-2' icon={tankerIcon} label='Ausbringmenge' get={ausbringmenge} old={oldAusbringmenge.current} unit='m³/ha' prefix={'ausbringmenge'}/>
                      <DisplayNumber className='mb-4 pl-2' icon={distanceIcon} label='Reichweite' get={reichweite} old={oldReichweite.current} unit='meter' prefix={'reichweite'}/>
                      <DisplayNumberNutrition className='pl-2' icon={nutritionIcon} label={'(Angaben für kg/ha)'} get={reichweite} old={oldReichweite.current} unit='kg/ha' prefix={'reichweite'}/>
                    </div>
                  </div>
              </div>
          </div>
          <footer className="relative sm:px-20 bottom-4 lg:px-44 flex flex-col gap-0 md:flex-row justify-center items-center justify-between">
            <span className="text-sm text-kb-green-dark text-center text-kb-green-dark">
              <a href='www.maximiliangravemeyer.com' className='hover:underline md:mr-8'>© 2022 Maximilian Gravemeyer</a>
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
