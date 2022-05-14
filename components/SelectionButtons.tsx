import {animated, useSpring} from "react-spring";
import SelectionButtonProps from "../types/SelectionButtonTypes";

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
            onMouseDown={() => set({transform: `scale(${ 1.0 })`, boxShadow: `0px ${'10px 20px'} 0px rgba(0, 0, 0, 0.10)`})}
            onMouseUp={() => set({transform: `scale(${ 1.1 })`, boxShadow: `0px ${'10px 20px'} 0px rgba(0, 0, 0, 0.10)`})}
            onClick={onClickAction}
            key={element}
            className={`py-1 px-2 cursor-pointer select-none ${element === selection ? 'bg-kb-green-dark text-kb-white' : 'bg-kb-white text-kb-green-dark'}`}
        >
            <p>{element}</p>
        </animated.div>
    )
}

export default SelectionButton;