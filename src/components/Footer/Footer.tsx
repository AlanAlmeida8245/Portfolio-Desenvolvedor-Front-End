
import Logo from "../../assets/Logo-Dev.png"

function Footer()
{
    return (
            
        <footer className="bg-gradient-to-r from-fosco to-gray-800 pt-10">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="https://flowbite.com/" className="flex items-center justify-center">
                        <img src={Logo} className="h-24 mr-3 w-24" alt="Alan Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Alan Almeida</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Desenvolvido com</h2>
                        <ul className=" text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://vitejs.dev/guide/" target="_blank" className="hover:underline">ReactJS Vite</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" target="_blank" className="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Me Siga</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/alanalmeida8245" className="hover:underline "target="_blank">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/alan-almeida-2488541a5/" className="hover:underline" target="_blank">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Contato</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="mailto:alanalmeida8245@gmail.com" className="hover:underline">Mande um E-mail</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Mande um Whatsapp</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-400"> 2023 <a href="https://flowbite.com/" className="hover:underline">Alan Almeida</a>. Todos os direitos reservados.
                </span>
                <div className="">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center max-sm:mt-4">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Baixar Curriculo</span>
                    </button>
                </div>
               
            </div>
            </div>
        </footer>

    )
}

export default Footer