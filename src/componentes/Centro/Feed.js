import './Feed.css';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">

            <Post
                title="Neymarjr"
                imgSrc="https://fly.metropoles.cloud/upload/q_85,w_600/https://uploads.metropoles.cloud/wp-content/uploads/2023/03/07094558/GettyImages-1390440335.jpg"
                body="Another important win! 💪" />
            <Post
                title="brunamarquezine"
                imgSrc="https://ofuxico.com.br/img/galeria/2015/03/259235.jpg"
                body="fire 🔥" />

            <Post
                title="brunabiancardi"
                imgSrc="https://s2-gshow.glbimg.com/Zh1BR3Oq_ZDr4eOJGjG3-g-3zsg=/0x0:1440x1440/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/C/x/uqhrn4Sr2fjLAbvKo8CA/efeito-neymar-namorada-do-craque-bruna-biancardi-tem-aumento-de-500-em-numero-de-seguidores-nas-redes.jpg"
                body="i love u my boy friend" />
            <Post
                title="ochicoin"
                imgSrc="https://ofuxico.com.br/wp-content/uploads/2023/11/chico-moedas-muda-visual.jpg"
                body="valeu po 👍🏻" />
            <Post
                title="luisasonza"
                imgSrc="https://portalpopline.com.br/wp-content/uploads/2024/04/luisa-sonza-post-enigmatico-escandalo-intimo-jpg.webp"
                body="strawberry fields 🍓" />
        </div>
    )
}