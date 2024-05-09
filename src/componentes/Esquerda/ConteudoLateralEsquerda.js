import logo from '../../imagens/images.png';

import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css'
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CgAddR } from "react-icons/cg";
import { TbBrandMessenger } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
             
            <ul>
                <Menu nome="Home" icone1={<IoIosArrowDown/>} classe = "text-menu" icone={<IoMdHome/>} />

                <Menu nome="Explore" classe = "text-menu" icone = {<IoSearch/>} />

                <Menu nome = "Mensagens" classe = "text-menu" icone = {<TbBrandMessenger/>}/>

                <Menu nome = "Notifications" classe = "text-menu" icone = {<GoHeart/>}/>
                
                <Menu nome = "Create" classe = "text-menu" icone = {<CgAddR/>}/>

                <Menu className='Profile' nome = "Profile" classe = "text-menu" icone = {<FaUserAlt/>}/>

                <div className='itensInferiores'>
                <Menu className='threads' nome = "threads" classe = "text-menu" icone = {<FaThreads/>}/>
                
                <Menu className='Mais' nome = "Mais" classe = "text-menu" icone = {< IoMenu/>}/>
                </div>
            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;
