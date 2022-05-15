import Image from "next/image";
import copyIcon from "../public/ferti-icon.png";

const Navigation = () => {
    return (
        <nav className="bg-white border-gray-200 rounded dark:bg-gray-800 pb-12">
            <div className="flex flex-wrap items-center">
                <a href="" className="flex items-center hover:underline">
                    <div className='flex items-center h-full w-12'>
                        <Image alt='icon' src={copyIcon} loading={'eager'}/>
                    </div>
                    <span
                        className="pt-1 pl-1 self-center text-xl font-semibold whitespace-nowrap text-kb-green-dark">Ferti App</span>
                </a>
            </div>
        </nav>
    )
}

export default Navigation;