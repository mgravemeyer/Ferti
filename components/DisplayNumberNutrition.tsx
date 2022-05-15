import Image from "next/image";
import DisplayNumberProps from "../types/DisplayNumberProps";
import AnimatedNumber from "./AnimatedNumber";

const DisplayNumberNutrition = ({label, get, old, unit, className, icon, prefix}: DisplayNumberProps) => {

    return (
        <div className={`flex flex-row items-center ${className}`}>
          <div className='flex items-center h-full w-16 pr-4'>
            <Image alt='icon' src={icon} loading={'eager'}/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex flex-row items-baseline'>
              <AnimatedNumber get={get} oldInput={old} prefix={prefix}/>&nbsp;
              <p className='text-kb-green-dark'>{'N Gesamt'}</p>
            </div>
            <div className='flex flex-row items-baseline'>
              <AnimatedNumber get={get} oldInput={old} prefix={prefix}/>&nbsp;
              <p className='text-kb-green-dark'>{'NH4-N'}</p>
            </div>
            <div className='flex flex-row items-baseline'>
              <AnimatedNumber get={get} oldInput={old} prefix={prefix}/>&nbsp;
              <p className='text-kb-green-dark'>{'P2O5'}</p>
            </div>
            <div className='flex flex-row items-baseline'>
              <AnimatedNumber get={get} oldInput={old} prefix={prefix}/>&nbsp;
              <p className='text-kb-green-dark'>{'K2O'}</p>
            </div>
            <p className='text-kb-green-dark'>{label}</p>
          </div>
        </div>
    )
}

export default DisplayNumberNutrition;