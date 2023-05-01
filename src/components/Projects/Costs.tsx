
import Image from "./Costs.png"
import {BsGithub} from "react-icons/bs"
import {FaRegEye} from "react-icons/fa"

function Costs()
{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-52" src={Image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Costs</div>
            <p className="text-gray-700 text-base">
            Costs é um pequeno projeto desenvolvido com React no Front-End, MongoDB como banco de dados, e NodeJS no Back-end, onde tem o intuito de criar um projeto com determinado orçamento e ir adicionando serviços.
            </p>
        </div>
        <div className="space-x-5">
          <a href="https://github.com/AlanAlmeida8245/Cost" target="_blank"><button><BsGithub className="w-8 h-8" /></button></a>
          <a href="https://cost-dlopwlj70-alanalmeida8245.vercel.app/" target="_blank"><button><FaRegEye className="w-8 h-8" /></button></a>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
            <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NodeJS</span>
        </div>
        </div>
    )
}

export default Costs