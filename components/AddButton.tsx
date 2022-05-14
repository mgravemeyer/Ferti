import {animated, useSpring} from "react-spring";
import AddButtonProps from "../types/AddButtonProps";

const AddButton = ({label, get, add, reduce, change, className, floatDigits, unit}: AddButtonProps) => {

    const [propsMinus, setMinus] = useSpring(() => ({
      transform: `scale(1)`,
      config: { tension: 400, mass: 2, velocity: 5 }
    }))

    const [propsPlus, setPlus] = useSpring(() => ({
      transform: `scale(1)`,
      config: { tension: 400, mass: 2, velocity: 5 }
    }))

    return (
      <div className={className}>
        <div className='flex flex-row items-end justify-center'>
            <h1 className='text-center text-kb-green-dark text-2xl md:pt-0 mr-2'>{label}</h1>
            <h1 className='text-center text-kb-green-dark md:pt-0'>{`(${unit})`}</h1>
        </div>
          <div className='flex flex-row justify-center'>

            <animated.div
                style={propsMinus}
                onMouseEnter={() => setMinus({transform: `scale(${ 1.2 })`})}
                onMouseLeave={() => setMinus({transform: `scale(${ 1 })`})}
                onMouseDown={() => setMinus({transform: `scale(${ 0.9 })`})}
                onMouseUp={() => setMinus({transform: `scale(${ 1.2 })`})}
                className='flex items-center text-6xl text-kb-green-dark pr-3 pl-6  hover:cursor-pointer select-none'
                onClick={() => reduce()}
            >
                -
            </animated.div>
            <input pattern="\d*" width={2} style={{background: 'none'}} className='text-kb-green-dark border-t-0 border-x-0 border-b-2 appearance-none border-2 text-8xl border-gray-200 w-56 text-center leading-tight focus:outline-none focus:bg-white' type="number" value={get.toFixed(floatDigits)} onChange={(e) => change(parseFloat(e.target.value))}/>
            <animated.div
                style={propsPlus}
                onMouseEnter={() => setPlus({transform: `scale(${ 1.1 })`})}
                onMouseLeave={() => setPlus({transform: `scale(${ 1 })`})}
                onMouseDown={() => setPlus({transform: `scale(${ 0.9 })`})}
                onMouseUp={() => setPlus({transform: `scale(${ 1.1 })`})}
                className='flex items-center text-6xl text-kb-green-dark pr-3 pl-6  hover:cursor-pointer select-none'
                onClick={() => add()}
            >
                +
            </animated.div>
          </div>
      </div>
    )
}

export default AddButton;