
import Image from "./Github Finder.png"
import {BsGithub} from "react-icons/bs"
import {FaRegEye} from "react-icons/fa"

function GithubFinder()
{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-52" src={Image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Github Finder</div>
            <p className="text-gray-700 text-base">
              Projeto Simples feito usando ReactJS com TypeScript e API do github para retornar dados de conta e repositorios e usuarios do github
            </p>
        </div>
        <div className="space-x-5">
          <a href="https://github.com/AlanAlmeida8245/Conversor-de-Moeda" target="_blank"><button><BsGithub className="w-8 h-8" /></button></a>
          <a href="https://alanalmeida8245.github.io/Conversor-de-Moeda/" target="_blank"><button><FaRegEye className="w-8 h-8" /></button></a>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
            <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
        </div>
        </div>
    )
}

export default GithubFinder