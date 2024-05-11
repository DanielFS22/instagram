import Story from "./Story"
import './Stories.css'

var listaUsuarios = [
    {
        nome: "neymarjr",
        url: "https://i.pinimg.com/originals/1e/cf/b0/1ecfb086c70a8ac8bb46a887eb51d0a5.jpg"
    },
    {
        nome: "cristiano",
        url: "https://i.pinimg.com/originals/c1/98/6a/c1986ab6a4a07b701d831521444ebd10.jpg"
    },
    {
        nome: "neflixbrasil",
        url: "https://yt3.googleusercontent.com/r4m9_f2nH87wTf1yoBFvwRe5pjE_lJIaKCZUkdgOq8MokC5dnpM6WbcJ4i5RQlBuBcsoRJB0cA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        nome: "loud",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTj-4ngmiCQk39qkUpSSaIPuJ71JwKfznyDUcl22w7nw&s"
    },
    {
        nome: "instituto.proa",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQeA7-56q_wARAr6o797-SrjtDVPkNc30GDpaoVLe3w&s"
    },
    {
        nome: "corinthans",
        url: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png"
    }
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.url} />
                })
            }

        </div>
    )
}