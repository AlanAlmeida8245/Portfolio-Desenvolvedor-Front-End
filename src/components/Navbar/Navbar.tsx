
import Chaves from "../../assets/Chaves.png"
import Logo from "../../assets/Logo-Dev.png"
import { AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import {useState} from "react"

function Navbar(){

    const [showNav, setShowNav] = useState<boolean>(false)

    const toggleNavbar = () => {
        setShowNav(!showNav); 
       
    }
    return (

        <nav className=" bg-gradient-to-r from-fosco to-gray-800 flex justify-between text-gold h-24 items-center p-5 reltive font-Arial">
                <img src={Logo} alt="" width="160px"/>
                <div className="absolute opacity-25 right-10 top-50 w-64 z-0 ">
                    <img src={Chaves} alt="" width="350px"/>
                </div>
                <div className="z-10 max-sm:hidden">
                        <ul className="flex space-x-5 ">
                            <a href="#sobre">
                                <li className="hover:border-b-2 hover:border-white hover: cursor-pointer">Sobre mim</li>
                            </a>
                            <a href="#projetos">
                                <li  className="hover:border-b-2 hover:border-white hover: cursor-pointer">Projetos</li>
                            </a>
                            <a href="#servicos">
                                <li  className="hover:border-b-2 hover:border-white hover: cursor-pointer">Serviços</li>
                            </a>
                            <a href="#experiencias">                                                            
                                <li  className="hover:border-b-2 hover:border-white hover: cursor-pointer">Experiencias</li>
                            </a>
                        </ul>
                </div>
              <div className="z-10 hidden max-sm:flex">
                    <AiOutlineMenu className="text-white w-10 h-10 hover:cursor-pointer" onClick={toggleNavbar}/>
                </div>
                {showNav && <div className="fixed bg-gradient-to-b from-fosco to-gray-800 right-0 top-0 p-5 w-48 h-full hidden max-sm:block z-20">
                
                    <ul className=" space-x-3 mt-5 ">
                    <div className="flex justify-end">
                        <AiOutlineClose className="w-10 h-10 text-white hover:cursor-pointer" onClick={toggleNavbar}/>
                    </div>
                                <a href="#sobre">
                                    <li className="hover:border-b-2 hover:border-white hover: cursor-pointer ">Sobre mim</li>
                                </a>
                                <a href="#projetos">
                                    <li  className="hover:border-b-2 hover:border-white hover: cursor-pointer">Projetos</li>
                                </a>
                                <a href="#servicos">
                                    <li  className="hover:border-b-2 hover:border-white hover: cursor-pointer">Serviços</li>
                                </a>
                                <a href="#experiencias">
                                    <li  className="hover:border-b-2 hover:border-white hover: cursor-pointer">Experiências</li>
                                </a>
                        </ul>     
                </div>}
        </nav>
    )
}

export default Navbar