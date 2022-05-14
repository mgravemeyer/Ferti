import type { NextPage } from 'next'
import {useState, useEffect, useRef} from "react";
import Image from "next/image";
import distanceIcon from '../public/distance.png';
import tankerIcon from '../public/tanker.png';
import { useSpring, animated } from 'react-spring'

type SelectionButtonProps = {
  onClickAction: () => void,
  element: any,
  selection: any
}

const SelectionButton = ({onClickAction, element, selection}: SelectionButtonProps) => {
    const [props, set] = useSpring(() => ({
        transform: `scale(1)`,
        boxShadow: `0px 5px 15px 0px rgba(0, 0, 0, 0.10)`,
        config: { tension: 400, mass: 2, velocity: 5 }
    }))

    return (
        <animated.div
            style={props}
            onMouseEnter={() => set({transform: `scale(${ 1.1 })`, boxShadow: `0px ${'10px 20px'} 0px rgba(0, 0, 0, 0.10)`})}
            onMouseLeave={() => set({transform: `scale(${ 1 })`, boxShadow: `0px ${'5px 15px'} 0px rgba(0, 0, 0, 0.10)`})}
            onClick={onClickAction}
            key={element}
            className={`py-1 px-2 cursor-pointer ${element === selection ? 'bg-kb-green-dark text-kb-white' : 'bg-kb-white text-kb-green-dark'}`}
        >
            <p>{element}</p>
        </animated.div>
    )
}

const PumpSelection = () => {

    type json = {
        Verschlauchung: {
            Wangen : {
                'GL 80.2/3 12bar': string
                'GL 90.2/3 12 bar': string
                'GL 100.2 12 bar': string
                'GL 110.2/3 12 bar': string
            }
        }
        Pumpfass: {
            Vogelsang: {
                'VX 186-130': string
                'VX 186-184 - Drehkolbenpumpe': string
                'VX 186-184 - 1.44 : 1': string
                'VX 186-184 | 1.48 : 1': string
                'VX 186-184 | 1.6 : 1': string
                'VX 186-184 | 2 : 1': string
                'VX 186-260 | Drehkolbenpumpe': string
                'VX 186-260 | 1.6 : 1': string
                'VX 186-368 | Drehkolbenpumpe': string
                'VX 186-390 | Drehkolbenpumpe': string
            }
            Börger: {
                'FL 776': string,
                'FL 1036': string,
                'EL 1550': string,
            }
            Eisele: {
                'DK 22': string
                'DK 32': string
            }
            Wangen: {
                'GL 110.0': string,
                'GL 120.0': string,
                'GL 130.0': string,
                'GL 140.0': string,
            }
        }
        Vakuumfass: {
            Schleuderfass: {
                'test': string
            }
        }
    }

    const [selection, setSelection] = useState<string>('Verschlauchung');

    const [nestedSelection, setNestedSelection] = useState<string>('');

    const [nestedNestedSelection, setNestedNestedSelection] = useState<string>('');

    const optionsNew: json = {
        'Verschlauchung': {
            'Wangen': {
                'GL 80.2/3 12bar': 'test',
                'GL 90.2/3 12 bar': 'test',
                'GL 100.2 12 bar': 'test',
                'GL 110.2/3 12 bar': 'test'
            }
        },
        'Pumpfass': {
            'Vogelsang': {
                'VX 186-130': 'test',
                'VX 186-184 - Drehkolbenpumpe': '',
                'VX 186-184 - 1.44 : 1': 'test',
                'VX 186-184 | 1.48 : 1': 'test',
                'VX 186-184 | 1.6 : 1': 'test',
                'VX 186-184 | 2 : 1': 'test',
                'VX 186-260 | Drehkolbenpumpe': 'test',
                'VX 186-260 | 1.6 : 1': 'test',
                'VX 186-368 | Drehkolbenpumpe': 'test',
                'VX 186-390 | Drehkolbenpumpe': 'test',
            },
            'Börger': {
                'FL 776': '',
                'FL 1036': '',
                'EL 1550': '',
            },
            'Eisele': {
                'DK 22': '',
                'DK 32': '',
            },
            'Wangen': {
                'GL 110.0': '',
                'GL 120.0': '',
                'GL 130.0': '',
                'GL 140.0': '',
            }
        },
        'Vakuumfass': {
            'Schleuderfass': {
                'test': 'test'
            }
        }
    }



    return (
        <>
          <div className='flex flex-col pt-6'>
          <h1 className='text-center text-kb-green-dark text-2xl md:pt-0 mr-2'>Pumpen-Typ</h1>
            <div className='flex flex-row justify-center gap-3 pt-2'>
                {Object.keys(optionsNew).map((element) => (
                    <SelectionButton key={element} onClickAction={() => {console.log(element);setSelection(element);setNestedSelection('')}} element={element} selection={selection}/>
                ))}

            </div>
            <div className='flex flex-row justify-center gap-1 pt-2 flex-wrap'>
                {
                    // @ts-ignore
                    Object.keys(optionsNew[selection]).map((element) => (
                  <div onClick={() => {setNestedSelection(element)}} key={element} className={`py-1 px-2 cursor-pointer ${element === nestedSelection ? 'bg-kb-green-dark text-kb-white' : 'bg-kb-white text-kb-green-dark'}`}>
                    <p>{element}</p>
                  </div>
                ))
                }
            </div>
              {nestedSelection !== '' &&
                  <div className='flex flex-row justify-center gap-1 pt-2 flex-wrap'>
                      {
                          // @ts-ignore
                          Object.keys(optionsNew[selection][nestedSelection]).map((element) => (
                          <div onClick={() => {
                              setNestedNestedSelection(element)
                          }} key={element}
                               className={`py-1 px-2 cursor-pointer ${element === nestedNestedSelection ? 'bg-kb-green-dark text-kb-white' : 'bg-kb-white text-kb-green-dark'}`}>
                              <p>{element}</p>
                          </div>
                      ))
                      }
                  </div>
              }
          </div>
        </>
    )

}

const AnnimatedNumber = ({get, oldInput, prefix}: {get:number, oldInput:number, prefix:string}) => {

    let old = createNumberArray(oldInput);

    function createNumberArray(number: number) {
        const numberArray = number.toString().split('');
        for (let i = 0; numberArray.length < 5; i++) {
            if (numberArray[0] === '-') {
                numberArray[0] = '0';
            }
            numberArray.unshift('0');
        }
        return numberArray.map(x => x === '-' || x === '+' ? x : parseInt(x));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function animateNumber(number: number, element: any) {
        // Leert das Element
        element.innerHTML = '';
        // Berechnet den neuen Number Array
        const numberArray = createNumberArray(number);
        // Legt alles in das HTML Element
        createNumberHTML(numberArray, old, element);
        // Berechnet die Ticks die verändert werden sollen.
        const ticks = [...element.querySelectorAll("span[data-value]")];
        setTimeout(() => {
            // Animiert die Werte
            for (let tick of ticks) {
                let dist = parseInt(tick.getAttribute("data-value")) - 1;
                tick.style.transform = `translateY(-${dist * 100}%)`;
            }
        }, 0);
        // Setzten den Zahlen Array zu dem Alten Status
        // old = numberArray;
    }

    function createNumberHTML(numbers: any, old: any, element: any) {
        for (let i = 0; i < numbers.length; i++) {
            if (isNaN(numbers[i]) || isNaN(old[i])) {
                element.insertAdjacentHTML(
                    "beforeend",
                    `<span class="number-span" data-value="${calcDeltaSight(old[i], numbers[i]).length}">${calcDeltaSight(old[i], numbers[i]).join('')}</span>`
                );
            } else {
                element.insertAdjacentHTML(
                    "beforeend",
                    `<span class="number-span" data-value="${calcDeltaBetweenNumbers(old[i], numbers[i]).length}">${calcDeltaBetweenNumbers(old[i], numbers[i]).join('')}</span>`
                );
            }
        }
        return element;
    }

    function calcDeltaSight(oldSight: any, newSight: any) {
        return oldSight !== newSight ? [`<span class="number-span-nested">${oldSight}</span>`, `<span>${newSight}</span>`] : [`<span>${newSight}</span>`];
    }

    function calcDeltaBetweenNumbers(oldNumber: number, newNumber: number) {
        let numberArray = [oldNumber];
        let notFound = true;
        if (oldNumber === newNumber) return numberArray.map(x => `<span>${x}</span>`);
        while (notFound) {
            oldNumber++;
            if (oldNumber > 9) oldNumber = 0;
            numberArray.push(oldNumber);
            if (oldNumber === newNumber) notFound = false;
        }
        return numberArray.map(x => `<span class="number-span-nested">${x}</span>`);
    }

    useEffect(() => {
        const value = parseInt(old.join('')) + (get - oldInput);
        const prefixClass = '.' + prefix + '-numbers';
        animateNumber(value, document.querySelector(prefixClass));
    }, [animateNumber, get, oldInput, old])

    return (
        <div className={`${prefix}-numbers numbers`}>0000</div>
    )
}


type AddButtonProps = {
  label: string,
  get: number,
  add: () => void,
  reduce: () => void,
  change: (value: number) => void,
  className?: string,
  floatDigits: number,
  unit: string,
}

const AddButton = ({label, get, add, reduce, change, className, floatDigits, unit}: AddButtonProps) => {

    return (
      <div className={className}>
        <div className='flex flex-row items-end justify-center'>
            <h1 className='text-center text-kb-green-dark text-2xl md:pt-0 mr-2'>{label}</h1>
            <h1 className='text-center text-kb-green-dark md:pt-0'>{`(${unit})`}</h1>
        </div>
          <div className='flex flex-row justify-center'>
            <button className='text-6xl text-kb-green-dark px-3' onClick={() => reduce()}>-</button>
            <input pattern="\d*" width={2} style={{background: 'none'}} className='text-kb-green-dark border-t-0 border-x-0 border-b-2 appearance-none border-2 text-8xl border-gray-200 w-56 text-center leading-tight focus:outline-none focus:bg-white' type="number" value={get.toFixed(floatDigits)} onChange={(e) => change(parseFloat(e.target.value))}/>
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
  old: number
  prefix: string
}

const DisplayNumber = ({label, get, old, unit, className, icon, prefix}: DisplayNumberProps) => {

    return (
        <div className={`flex flex-row items-center ${className}`}>
          <div className='flex items-center h-full w-16 pr-4'>
            <Image alt='icon' src={icon} loading={'eager'}/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex flex-row items-baseline'>
              <AnnimatedNumber get={get} oldInput={old} prefix={prefix}/>
              <p className='text-kb-green-dark'>{unit}</p>
            </div>
            <p className='text-kb-green-dark'>{label}</p>
          </div>
        </div>
    )
}


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
      <div className='p-8 flex flex-col justify-between items-center h-screen'>
          <h1 className='text-4xl font-extrabold text-center'>Gülle-Nährstoffe einfach und richtig dosieren</h1>

          <div className='flex flex-col md:flex-row pt-8 pb-32'>
            <div className='pt-8 w-96'>
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
                         floatDigits={0}
                         unit='U/min'
              />
              <PumpSelection/>
            </div>
            <div className='flex flex-col justify-center pl-4 md:pl-8 mb:pb-4 pt-12 md:pt-0 pr-2'>
              <p className='text-2xl mb-4 text-kb-white bg-kb-green-dark pl-2'>Ergebnisse:</p>
              <DisplayNumber className='mb-4 pl-2' icon={tankerIcon} label='Ausbringmenge' get={ausbringmenge} old={oldAusbringmenge.current} unit='m³/ha' prefix={'ausbringmenge'}/>
              <DisplayNumber className='pl-2' icon={distanceIcon} label='Reichweite' get={reichweite} old={oldReichweite.current} unit='meter' prefix={'reichweite'}/>
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
