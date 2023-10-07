

import Image from "./Clone Mercado Livre.png"
import {BsGithub} from "react-icons/bs"
import {FaRegEye} from "react-icons/fa"

function CloneMercadoLivre()
{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-52" src={Image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Clone do Mercado Livre</div>
            <p className="text-gray-700 text-base">
              Clone da Página inicial do mercado livre e da página de busca, feito em ReactJS e com tailwindCss, além de utilizar a propria API do mercado livre para a implementação do sistema de busca por produtos que o usuario deseja pesquisa e busca de produtos por categorias.
            </p>
        </div>
        <div className="space-x-5">
          <a href="https://github.com/AlanAlmeida8245/Clone-Mercado-Livre" target="_blank"><button><BsGithub className="w-8 h-8" /></button></a>
          <a href="https://clone-mercado-livre-rust.vercel.app" target="_blank"><button><FaRegEye className="w-8 h-8" /></button></a>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
            <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
            <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
        </div>
        </div>
    )
}

export default CloneMercadoLivre
