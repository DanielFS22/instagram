import '../Direita/ConteudoLateralDireita.css'
import FotoPerfil from '../../imagens/daniel_perfil.jpg'
import FotoArthur from '../../imagens/arthur.jpg'
import kstewartbr from '../../imagens/Kstewartbr.jpg'
import Jayz from '../../imagens/jayz.jpg'
import Negodoborel from '../../imagens/negodoborel.jpg'

export default function ConteudoLateralDireita() {
    return (


        <div className='ContainerDireito'>
            <div className='Perfil_usuario'>
                <div className='Nomeinsta'>
                    <div className='imgPerfil'>
                        <img src={FotoPerfil}></img>
                    </div>
                    <div className='nameperfil'>
                        <p><strong>_dannox </strong><br /> Daniel Fernandes</p>
                    </div>
                    <div className='botao mudar'>
                        <button>Mudar</button>
                    </div>
                </div>
            </div>
            <div className='nome'>

            </div>
            <div className='sugestoes'>
                <h3>Sugestões para você</h3>
                <div className='Perfil_usuario'>
                    <div className='Nomeinsta'>
                        <div className='imgPerfil'>
                            <img src={FotoArthur}></img>
                        </div>
                        <div className='nameperfil'>
                            <p><strong>arthuraguiar</strong><br />Sugestões para você</p>
                        </div>
                        <div className='botao mudar'>
                            <button>Seguir</button>
                        </div>
                    </div>
                </div>

                <div className='Perfil_usuario'>
                    <div className='Nomeinsta'>
                        <div className='imgPerfil'>
                            <img src={kstewartbr}></img>
                        </div>
                        <div className='nameperfil'>
                            <p><strong>kstewartbr</strong> <br /> Sugestões para você</p>
                        </div>
                        <div className='botao mudar'>
                            <button>Seguir</button>
                        </div>
                    </div>
                </div>

                <div className='Perfil_usuario'>
                    <div className='Nomeinsta'>
                        <div className='imgPerfil'>
                            <img src={Jayz}></img>
                        </div>
                        <div className='nameperfil'>
                            <p><strong> jayz </strong> <br /> Sugestões para você</p>
                        </div>
                        <div className='botao mudar'>
                            <button>Seguir</button>
                        </div>
                    </div>
                </div>

                <div className='Perfil_usuario'>
                    <div className='Nomeinsta'>
                        <div className='imgPerfil'>
                            <img src={Negodoborel}></img>
                        </div>
                        <div className='nameperfil'>
                            <p><strong>negodoborel </strong> <br /> Sugestões para você</p>
                        </div>
                        <div className='botao mudar'>
                            <button>Seguir</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                    <button>Sobre</button>
                    <button>Ajuda</button>
                    <button>Imprensa</button>
                    <button>API</button>
                    <button>Carreiras</button>
                    <button>Privacidade</button>
                    <button>Termos</button> 
                    <button>Localizações</button>
                    <button>Idioma</button>
                    <button>Meta Verified</button>
                    
            </div>
            <div className='instagramFooter'>
            <p>© 2024 INSTAGRAM FROM META</p>
            </div>
        </div>
    )

}