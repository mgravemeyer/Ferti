import Image from "next/image";
import DisplayNumberProps from "../types/DisplayNumberProps";
import AnimatedNumber from "./AnimatedNumber";
import DisplayNumberNutritionProps from "../types/DisplayNumberNutritionProps";

const DisplayNumberNutrition = ({label, getNTotal, getNh4n, getP2O5, getK20, oldNTotal, oldNh4n, oldP2O5, oldK20, className, icon}: DisplayNumberNutritionProps) => {

    const green = 'text-kb-green-light';
    const orange = 'text-kb-orange';
    const red = 'text-kb-red';

    let ntotalColor = ''
    let nh4nColor = ''
    let p2o5Color = ''
    let k20Color = ''

    if(getNTotal > 8000)
        { ntotalColor = red }
    else if (getNTotal > 3000)
        { ntotalColor = orange }
    else
        { ntotalColor = green }

    if(getNh4n > 3000)
        { nh4nColor = red }
    else if (getNh4n > 3000)
        { nh4nColor = orange }
    else
        { nh4nColor = green }

    if(getP2O5 > 4000)
        { p2o5Color = red }
    else if (getP2O5 > 3000)
        { p2o5Color = orange }
    else
        { p2o5Color = green }

    if(getK20 > 5000)
        { k20Color = red }
    else if (getK20 > 3000)
        { k20Color = orange }
    else
        { k20Color = green }


    return (
        <div className={`flex flex-row items-center ${className}`}>
          <div className='flex items-center h-full w-16 pr-4'>
            <Image alt='icon' src={icon} loading={'eager'}/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex flex-row items-baseline'>
              <AnimatedNumber color={ntotalColor} get={getNTotal} oldInput={oldNTotal} prefix={'NTotal'}/>&nbsp;
              <p className='text-kb-green-dark'>{'N Gesamt'}</p>
            </div>
            <div className='flex flex-row items-baseline'>
              <AnimatedNumber color={nh4nColor} get={getNh4n} oldInput={oldNh4n} prefix={'Nh4n'}/>&nbsp;
              <p className='text-kb-green-dark'>{'NH4-N'}</p>
            </div>
            <div className='flex flex-row items-baseline'>
              <AnimatedNumber color={p2o5Color} get={getP2O5} oldInput={oldP2O5} prefix={'PO5'}/>&nbsp;
              <p className='text-kb-green-dark'>{'P2O5'}</p>
            </div>
            <div className='flex flex-row items-baseline'>
              <AnimatedNumber color={k20Color} get={getK20} oldInput={oldK20} prefix={'K20'}/>&nbsp;
              <p className='text-kb-green-dark'>{'K2O'}</p>
            </div>
            <p className='text-kb-green-dark'>{label}</p>
          </div>
        </div>
    )
}

export default DisplayNumberNutrition;