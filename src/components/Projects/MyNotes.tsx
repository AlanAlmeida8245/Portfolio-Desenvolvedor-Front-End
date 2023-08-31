
import Image from "./mynotes.png"
import {BsGithub} from "react-icons/bs"
import {FaRegEye} from "react-icons/fa"

function MyNotes()
{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-52" src={Image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">MyNotes</div>
            <p className="text-gray-700 text-base">
                CRUD para criação e edição de Notas baseada no samsung notes, feita utilizando ReactJS e CSS comum, com Back-End feito usando NodeJS e MongoDB como banco de dados.
            </p>
        </div>
        <div className="space-x-5">
          <a href="https://github.com/AlanAlmeida8245/MyNotes" target="_blank"><button><BsGithub className="w-8 h-8" /></button></a>
          <a href="https://my-notes-gsj1.vercel.app/" target="_blank"><button><FaRegEye className="w-8 h-8" /></button></a>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReactJS</span>
            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
            <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
        </div>
        </div>
    )
}

export default MyNotes