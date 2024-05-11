
import './App.css';
import Esquerda from './componentes/Esquerda/ConteudoLateralEsquerda';
import Centro from './componentes/Centro/ConteudoCentral';
import Direta from './componentes/Direita/ConteudoLateralDireita'
// JSX 

function App() {
  return (
    <>
      <Esquerda />
      <Centro />
      <Direta />
      
      <div className='conteudoLateralDireita'>
        {/* 
          Login
          Sugestões de amigos
          Sugestões de contas
          Sugestões de hashtags
          Sugestões de locais
          Sugestões de posts patrocinados
          Link legais
        */}
      </div>
    </>
  );
}

export default App;
