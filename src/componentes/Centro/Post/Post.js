import { useState } from "react";

import './Post.css';
import { FaHeart } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";


/*
var likes = 0;
function setLikes (valor){
    likes = valor;
} 
*/
var color;

export default function Post(props) {

    // useState é uma forma de armazenar estados dentro de um componente.
    const [likes, setLikes] = useState(0);

    // Nosso objetivos aqui: 
    // Vamos armazenar a quantidade de Likes
    // Vamos alterar a cor do coração quando o usuário clicar

    return (
        <div className="card Post">
            <div className="card-header">
            <img src={props.fotoPerfil} />
                <h3>{props.title}</h3>
                <div className="Verificado">
                <MdVerified verificado={props.verificado} />
                </div>
            </div>
            <div className="card-body">
                <img src={props.imgSrc} />

                {/*
                Arrow Functions são outra forma de criar funções em JavaScript.
                isso -> 

                    var a = () => setLikes(likes + 1)
                    
                    é equivalente a isso 
                    
                    function(){
                        setLikes(likes + 1);
                    }

                    var a = function() {}
                */}

                {
                    // Operador ternários

                    // isso -> likes % 2 === 0 ? 'black' : 'red'

                    // é o mesmo que isso:

                    // if(likes % 2 === 0){
                    //     'black'
                    // } else {
                    //     'red'
                }
                
                <FaHeart   
                    onClick={() => setLikes(likes + 1)} 
                    style={{color: likes % 2 === 0 ? 'white' : 'red',
                    cursor: 'pointer',}} 
                />

                <AiOutlineMessage />
                <CiLocationArrow1 />

                <p>{props.body}</p>
                
            </div>
        </div>
    )
}