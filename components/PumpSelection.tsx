import {useState} from "react";
import SelectionButton from "./SelectionButtons";

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
          <div className='flex flex-col'>
          <h1 className='text-center text-kb-green-dark text-2xl md:pt-0 mr-2'>Pumpen-Typ</h1>
            <div className='flex flex-row justify-center gap-3 pt-2'>
                {Object.keys(optionsNew).map((element) => (
                    <SelectionButton key={element} onClickAction={() => {console.log(element);setSelection(element);setNestedSelection('')}} element={element} selection={selection}/>
                ))}

            </div>
            <div className='flex flex-row justify-center gap-3 pt-4 flex-wrap'>
                {
                  // @ts-ignore
                  Object.keys(optionsNew[selection]).map((element) => (
                    <SelectionButton key={element} onClickAction={() => {setNestedSelection(element)}} element={element} selection={nestedSelection}/>
                  ))
                }
            </div>
              {nestedSelection !== '' &&
                  <div className='flex flex-row justify-center gap-3 pt-4 flex-wrap'>
                      {
                        // @ts-ignore
                        Object.keys(optionsNew[selection][nestedSelection]).map((element) => (
                          <SelectionButton key={element} onClickAction={() => {setNestedNestedSelection(element)}} element={element} selection={nestedNestedSelection}/>
                        ))
                      }
                  </div>
              }
          </div>
        </>
    )

}

export default PumpSelection;