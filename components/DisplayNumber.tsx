import Image from "next/image";
import DisplayNumberProps from "../types/DisplayNumberProps";
import AnimatedNumber from "./AnimatedNumber";

const DisplayNumber = ({label, get, old, unit, className, icon, prefix}: DisplayNumberProps) => {

    return (
        <div className={`flex flex-row items-center ${className}`}>
          <div className='flex items-center h-full w-16 pr-4'>
            <Image alt='icon' src={icon} loading={'eager'}/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex flex-row items-baseline'>
              <AnimatedNumber get={get} oldInput={old} prefix={prefix}/>&nbsp;
              <p className='text-kb-green-dark'>{unit}</p>
            </div>
            <p className='text-kb-green-dark'>{label}</p>
          </div>
        </div>
    )
}

export default DisplayNumber;