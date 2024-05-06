import logo from './imagens/logo-insta.jpg';
import Menu from './TextMenu';
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { PiMessengerLogo } from "react-icons/pi";
import { IoCreateOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";





export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
            <p>Exemplo de conteúdo lateral esquerda</p>
            <ul>
            <Menu nome="Home" icone={<GoHome />}/>
                <Menu nome="Buscar"  icone={<IoIosSearch />}/>
                <Menu nome="Explorar" icone={<MdOutlineExplore />}/>
                <Menu nome="Mensagens" icone={<PiMessengerLogo />
}/>
                <Menu nome="Notificações" icone={<GoHome />}/>
                <Menu nome="Criar" icone={<IoCreateOutline />
}/>
                <div className='Perfil_separar'> 
                <Menu nome="Perfil" icone={<CgProfile />}/>
                </div>
            </ul>

        </div>
    )
}

// export default ConteudoLateralEsquerda;
