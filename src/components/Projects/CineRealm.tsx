
import Image from "./CineRealm-2.png"
import {BsGithub} from "react-icons/bs"
import {FaRegEye} from "react-icons/fa"

function CineRealm()
{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-52" src={Image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">CineRealm</div>
            <p className="text-gray-700 text-base">
             Site que retorna informações de filmes/séries,  Aplicação feita usando React com TypeScript, TailwindCSS e consumindo a API do TMDB (The Movie Data Base) junto com as bibliotecas Flowbite de componentes de tailwind e Slick Carrousel para listagens de filmes/elencos
            </p>
        </div>
        <div className="space-x-5">
          <a href="https://github.com/AlanAlmeida8245/RealmCine" target="_blank"><button><BsGithub className="w-8 h-8" /></button></a>
          <a href="https://realm-cine-new.vercel.app" target="_blank"><button><FaRegEye className="w-8 h-8" /></button></a>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
            <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
            <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCSS</span>
        </div>
        </div>
    )
}

export default CineRealm