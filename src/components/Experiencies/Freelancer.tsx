import {SiGooglemaps} from "react-icons/si"
import {BsCalendarDateFill} from "react-icons/bs"
import {useState} from "react"
import Foto from "./teste.png"

function Freelancer()
{
        const [showDesc, setShowDesc] = useState<string>("text-white w-96 text-center mx-auto mt-10 invisible transition-all opacity-0");
        function showText()
        {
                setShowDesc("text-white w-96 text-center mx-auto mt-10 visible transition-all opacity-100");
        }
        function hiddenText()
        {
                setShowDesc("text-white w-96 text-center mx-auto mt-10 invisible transition-all opacity-0"); 
        }

    return (
        

        <div>
                
          <div className="group bg-gray-900 p-4 transition-all duration-300 lg:p-8" data-modal-target="defaultModal" data-modal-toggle="defaultModal">
            
            <div className="flex items-center gap-x-2">
              <img className="aspect-[2/2] w-16" src={Foto} />
              <div>
                <h3 className="text-xl font-bold text-gray-50">Freelancer</h3>
                <span className="text-xs text-gray-300">Camaçari - BA</span>
              </div>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-medium text-gray-200">Desenvolvedor Full Stack</h3>
              <div className="text-sm font-medium">
                <span className="m-1 ml-0 inline-block text-blue-400">ReactJS</span>
                <span className="m-1 ml-0 inline-block text-green-300">MongoDB</span>
                <span className="m-1 ml-0 inline-block text-pink-500">MySQL</span>
                <span className="m-1 ml-0 inline-block text-lime-500">NodeJS</span>
              
              </div>
              <div className="mt-2 text-sm text-gray-400">Desenvolvimento de Landing Pages,UX/UI Design e Web Apps Full-Stacks</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-50">Atualmente</span>
              
            </div>
          </div>

               

        </div>
     
        
    )

}

export default Freelancer