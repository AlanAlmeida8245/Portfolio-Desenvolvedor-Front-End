
import Image from "./calculadora.png"
import {BsGithub} from "react-icons/bs"
import {FaRegEye} from "react-icons/fa"

function Calculadora()
{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-52" src={Image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Calculadora</div>
            <p className="text-gray-700 text-base">
            essa calculadora foi um dos meus primeiros projetos utilizando JavaScript, foi uma calculadora simples mas muito funcional feita com HTML, CSS e JavaScript
            </p>
        </div>
        <div className="space-x-5">
          <a href="https://github.com/AlanAlmeida8245/Calculadora" target="_blank"><button><BsGithub className="w-8 h-8" /></button></a>
          <a href="https://alanalmeida8245.github.io/Calculadora/" target="_blank"><button><FaRegEye className="w-8 h-8" /></button></a>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML</span>
            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
            <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
        </div>
        </div>
    )
}

export default Calculadora