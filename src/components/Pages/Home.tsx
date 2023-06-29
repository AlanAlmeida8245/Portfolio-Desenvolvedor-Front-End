
import AOS from "aos"
import "aos/dist/aos.css"
import Teste from "../../assets/teste.png"
import { BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsFillChatLeftDotsFill} from "react-icons/bs"
import {BsFillRocketTakeoffFill} from "react-icons/bs"
import {BsFillPersonFill} from "react-icons/bs"
import {BsBootstrapFill} from "react-icons/bs"
import {BsCalendarDateFill} from "react-icons/bs"
import { useState} from "react"
import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt} from "react-icons/fa"
import {FaRegEye} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
import { SiJavascript, SiReact} from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {SiMysql} from "react-icons/si"
import {DiNodejs} from "react-icons/di"
import {DiSass} from "react-icons/di"
import {SiTypescript} from "react-icons/si"
import {BsGit} from "react-icons/bs"
import Project from "./project.png"
import background from "../../assets/background.jpg"
import {SiGooglemaps} from "react-icons/si"
import GithubFinder from "../Projects/GitHubFinder"
import Costs from "../Projects/Costs"
import Calculadora from "../Projects/Calculadora"
import Conversor from "../Projects/ConversorMoeda"
import CamaTech from "../Experiencies/CamaTech"
import Freelancer from "../Experiencies/Freelancer"
import Wave from "../Experiencies/wave.svg"
import WaveB from "../Waves/WaveBranca.png"
import Logo from "../../assets/Logo-Dev.png"
import Footer from "../Footer/Footer"
import BotaoScrollParaCima from '../Footer/ScrollButton/Scroll';
import {MdEmail} from "react-icons/md"
import Contador from "../Projects/Contador"
import Cart from "../Icones/Cart.png"
import Design from "../Icones/design.png"
import Option from "../Icones/pageoption.png"
import CineRealm from "../Projects/CineRealm"
import SnackLanches from "../Projects/SnackLanches"

function Home(){

        AOS.init({
                duration: 1500, // Duração da animação em milissegundos
                once: false // Define se a animação deve ser executada apenas uma vez
              });

    return (
        <main>
                       <div><BotaoScrollParaCima/></div>
                <section className="bg-gradient-to-r from-fosco to-gray-800 w-full h-128 text-left items-start flex text-white pt-20 justify-evenly max-sm:block">
                    
                    <div className="p-5 mx-10 max-sm:mx-auto max-sm:text-center">
                        <h1 className="font-kinect text-6xl text-gradient bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-transparent max-sm:text-6xl">Alan Almeida</h1>
                        <h2 className="font-SinkSans text-white text-2xl max-sm:text-lg">Desenvolvedor <span className="text-purple-400">Full-Stack :)</span></h2>
                        <p className="text-amber-300">Codificando com paixão, entregando resultados impressionantes ;)</p>

                        <div className="max-sm:flex max-sm:items-center max-sm:mt-3">
                                <div className="flex gap-2 mt-2 max-sm:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white max-sm:mx-auto">
                                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                    </svg>
                                    <p className="max-sm:hidden">Camaçari - Bahia</p>
                                                                                </div>
                               
                                <div className="flex gap-2 mt-3 max-sm:gap-5 max-sm:mt-2 max-sm:mx-auto">
                                
                                   <a href="mailto:alanalmeida8245@gmail.com">
                                           <MdEmail className="w-6 h-6"/>
                                   </a>
                                    <p className="max-sm:hidden">alanalmeida8245@gmail.com</p>
                                
                                        <a href="https://github.com/AlanAlmeida8245" target="_blank">
                                                <BsGithub className="w-6 h-6"/>
                                        </a>
                                        <p className="max-sm:hidden">alanalmeida8245</p>
                                        <a href="https://www.linkedin.com/in/alan-almeida-2488541a5/" target="_blank">
                                                <BsLinkedin className="w-6 h-6"/>
                                        </a>
                                        <p className="max-sm:hidden">alanalmeida8245</p>
                                </div>
                        </div>
                    
                    </div>

                    <div className="max-md:hidden">
                         <img src={Teste} alt="" width="300px"/>
                    </div>
                    <div>
                        
                    </div>
                </section>
                
                <section className="bg-gradient-to-r from-gold to-amber-200">
                  <div className="container w-full  mx-auto space-x-10 items-center  gap-10 mx-y max-w-screen-lg ">
                        <div className="pt-20">
                        <h1 className="text-white font-SinkSans text-3xl text-left after:content-['!'] relative bg-gradient-to-r from-fosco to-gray-800 rounded-3xl w-96 p-2 ml-2 pl-5 mb-2 max-sm:text-2xl max-sm:w-52" data-aos="fade-right" id="sobre">Sobre Mim</h1>
                            <p className="text-lg first-letter:text-white first-letter:text-2xl  text-gray-800 font-bold max-sm:text-md max-w-128 p-5">
                       

                                Meu nome é Alan Almeida e sou um desenvolvedor front-end apaixonado por criar experiências incríveis na web. Eu sou especializado em HTML, CSS e JavaScript, e estou sempre em busca de aprimorar minhas habilidades e conhecimentos.

                                Eu sou orientado a detalhes e trabalho duro para garantir que o design e a funcionalidade dos sites que construo atendam às necessidades dos clientes e ofereçam a melhor experiência possível para os usuários finais. Eu tenho uma abordagem colaborativa e trabalho em equipe, valorizando a comunicação aberta e transparente com designers e outros desenvolvedores.

                                Ao longo dos anos, adquiri um conhecimento sólido das últimas tendências e tecnologias da web, o que me permite implementar soluções inovadoras e eficazes para os desafios que encontro. Eu sou uma pessoa curiosa e estou sempre aprendendo novas técnicas e ferramentas para aprimorar meu trabalho e garantir que esteja sempre atualizado.

                                Como desenvolvedor front-end, acredito que a usabilidade e a experiência do usuário são fundamentais, e trabalho incansavelmente para garantir que os sites que construo sejam intuitivos, responsivos e envolventes. Sou apaixonado por transformar ideias em realidade e estou sempre procurando por novos desafios para continuar crescendo como profissional.
                            </p>
                        </div>
                  </div>

                    <div className="container mx-auto flex justify-center gap-10 space-x-6 mt-20 flex-wrap items-center">
                            <div className="bg-white w-48  shadow-xl rounded-lg ml-4">
                                <div className="flex justify-center items-center mt-5">
                                    <h1 className="font-max-impact text-2xl"><BsFillChatLeftDotsFill className="w-10 h-10 "/></h1>
                                </div>
                               <div className="text-center items-end p-2">
                                    Comunicação eficaz
                               </div>
                            </div>
                  
                            <div className="bg-white w-48  shadow-xl rounded-lg">
                                <div className="flex justify-center items-center mt-5">
                                    <h1 className="font-max-impact text-2xl"><BsFillRocketTakeoffFill className="w-10 h-10 "/></h1>
                                </div>
                               <div className="text-center items-end p-2">
                               Resolução de problemas
                               </div>
                            </div>
                            <div className="bg-white w-48  shadow-xl rounded-lg">
                                <div className="flex justify-center items-center mt-5">
                                    <h1 className="font-max-impact text-2xl"><BsFillPersonFill className="w-10 h-10 "/></h1>
                                </div>
                               <div className="text-center items-end p-2">
                                    Trabalho em equipe
                               </div>
                            </div>
                    </div>

                    <div className="container w-full  mx-auto space-x-10 items-center  gap-10 mx-y max-w-screen-lg">
                        <div className="pt-10">
                            <h1 className="text-white font-SinkSans text-3xl text-left  relative bg-gradient-to-r from-fosco to-gray-800 rounded-3xl w-96 p-2 ml-2 pl-5 max-sm:text-2xl max-sm:w-56" data-aos="fade-right">Habilidades</h1>
                            <p className="text-center text-pink-700">Tecnologias usadas no dia a dia </p>
                            <div className="grid grid-cols-6 text-center mt-10 gap-y-3 ml-5 mx-auto max-sm:grid-cols-3" data-aos="fade-up">
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <AiFillHtml5 className="w-12 h-12 text-red-400"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <FaCss3Alt className="w-12 h-12 text-blue-500"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <SiJavascript className="w-12 h-12 text-yellow-400"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <SiReact className="w-12 h-12 text-blue-300"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <DiNodejs className="w-12 h-12 text-green-500"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <SiMysql className="w-12 h-12 text-orange-400"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <SiMongodb className="w-12 h-12 text-green-400"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <SiTailwindcss className="w-12 h-12 text-blue-400"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <BsBootstrapFill className="w-12 h-12 text-purple-400"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <DiSass className="w-12 h-12 text-pink-400"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <SiTypescript className="w-12 h-12 text-cyan-500"/>
                                    </div>
                                    <div className="flex justify-center bg-gradient-to-r from-fosco to-gray-800 w-24 shadow-lg p-2">
                                            <BsGit className="w-12 h-12 text-red-500"/>
                                    </div>
                            </div>
                        </div>
                  </div>
                
                        <div>
                                <img src={WaveB} alt="" />
                        </div>
                </section>
     
         
             <section className="w-full  bg-gradient-to-l from-white to-gray-50 relative">
                
                        <div className="absolute opacity-5 overflow-hidden z-0"><img src={Project} alt="" /></div>
                 <div className="container w-full mx-auto space-x-10 items-center  gap-10 mx-y max-w-screen-lg" id="projetos">
                        <div>
                        <div className="w-52 bg-black rounded-lg shadow-lg mx-auto max-sm:w-48">
                                <h1 className=" font-SinkSans text-3xl text-center  relative rounded-lg  p-2 w-52 pl-5 mb-2 bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-transparent max-sm:text-2xl" >Projetos</h1>
                                </div>
                       </div>

                  </div>
 
                          <div className="w-full mx-auto flex justify-center text-center relative z-10 m-5 p-5 gap-5 flex-wrap" data-aos="fade-right">
                                
                                <SnackLanches />
                                <CineRealm />
                                <Costs />
                               <GithubFinder />
                               <Conversor />
                               <Contador />
                                <Calculadora />
                          </div>
                                

                       <div className="w-52 bg-black rounded-lg shadow-lg mx-auto my-10" data-aos="fade-left" id="servicos">
                                <h1 className=" font-SinkSans text-3xl text-center  relative rounded-lg  p-2 w-52 pl-5 mb-2 bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-transparent " data-aos="fade-right">Serviços</h1>
                       </div>

                        <div className="grid grid-cols-2 w-4/5 mx-auto space-y-2 space-x-1 0 m-5 p-5 gap-x-40 max-md:flex max-md:justify-center max-md:flex-wrap">
                            
                                        <div className=" w-96 h-42" data-aos="fade-right">
                                                <img src="https://cdn1.iconfinder.com/data/icons/business-startup-14/60/Development-512.png" alt="" width="80px"/>
                                               <div>
                                                        <h1 className="text-xl"><span className="text-amber-500 font-max-impact">01</span> WebSites</h1>
                                                        <p>Produção de websites responsivos, sistemas em ReactJS , landing pages a sites espetaculares.</p>
                                                </div>
                                        </div>
                                        <div className=" w-96 h-42" data-aos="fade-right">
                                                <img src={Option} alt="" width="80px" height="80px"/>
                                               <div>
                                                        <h1 className="text-xl"><span className="text-green-500 font-max-impact">02</span> Landing Pages</h1>
                                                        <p>Landing Pages bem feitas e estilosas para
                                                         vender uma ideia, uma pagina bonita faz a diferença.</p>
                                                </div>
                                        </div>
                              
                                        <div className=" w-96 h-42" data-aos="fade-right">
                                                <img src={Cart} alt="" width="80px" height="80px"/>
                                               <div>
                                                        <h1 className="text-xl"><span className="text-red-500 font-max-impact">03</span> E-Commerce</h1>
                                                        <p>Precisando de E-commerce para sua loja/empresa, aqui fazemos a sua plataforma completa</p>
                                                </div>
                                        </div>
                                        
                                        <div className=" w-96 h-42" data-aos="fade-right">
                                                <img src={Design} alt="" width="80px" height="80px"/>
                                               <div>
                                                        <h1 className="text-xl"><span className="text-purple-500 font-max-impact">04</span> UI/UX Design</h1>
                                                        <p>Precisando de uma indentidade visual para sua marca ou website/app aqui você sai com o pacote completo</p>
                                                </div>
                                        </div>
                                

                        </div>
                

                        <div>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient2" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#292929"></stop><stop offset="95%" stop-color="#1f2937"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 130.2666666666667,213.73333333333335 260.5333333333334,227.46666666666667 442,229 C 623.4666666666666,230.53333333333333 856.1333333333334,219.86666666666665 1031,213 C 1205.8666666666666,206.13333333333335 1322.9333333333334,203.06666666666666 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient2)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
                        </div>
             </section>
             <section className="bg-gradient-to-r from-fosco to-gray-800 w-full">
                       
                        <h1 className=" font-SinkSans text-3xl text-center   bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-transparent mb-10" id="experiencias">Experiências</h1>
                        <div className="flex justify-center gap-10 max-md:flex-col" data-aos="fade-up">
                                <CamaTech />
                                <Freelancer />
                        </div>
             </section>
                        
                
             <Footer />
                        
             
                
        </main>
    )
}

export default Home