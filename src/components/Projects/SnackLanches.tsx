

import Image from "./SnackLanches.png"
import {BsGithub} from "react-icons/bs"
import {FaRegEye} from "react-icons/fa"

function SnackLanches()
{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-52" src={Image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Landing Page para Lanchonete</div>
            <p className="text-gray-700 text-base">
              Landing Page simples e com interação no cardapio feito em ReactJS para Snack Lanches projeto de freelancer
            </p>
        </div>
        <div className="space-x-5">
          <a href="https://github.com/AlanAlmeida8245/Landing-Page---Snack-Lanches" target="_blank"><button><BsGithub className="w-8 h-8" /></button></a>
          <a href="https://snack-lanches.vercel.app/" target="_blank"><button><FaRegEye className="w-8 h-8" /></button></a>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
            <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
        </div>
        </div>
    )
}

export default SnackLanches
