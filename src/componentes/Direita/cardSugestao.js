export default function cardSugestao(props) {
    return (
        <div className="sugestão">
            <div className="perfil-usuario">
                <div className="igm-perfil">
                <img src={props.caminhoDaImagem} alt="imagem do perfil"/>
                </div>
                <div className="Id-instagram">
                 <p>{props.idInstagram}</p>   
                </div>
            </div>
            <div className="perfil-sugestão">
                <div className="igm-perfil">
                <img src={props.caminhoDaImagem} alt="imagem do perfil"/>
                </div>
                <div className="Id-instagram">
                <p>{props.idInstagram}</p>
                </div>
            </div>
        </div>
    )
}
