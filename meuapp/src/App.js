import React from "react";

const Bemvindo = (props) => {
  return(
    <div>
      <h2>Bem vindo {props.nome}</h2>
      <h2>Tenho {props.idade} anos</h2>
    </div>
  );
}

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
    </div>
  )
}

const Sobre = (props) => {
  return(

  );
}

function App(){
  return(
    <div>
      <h1>Bem vindo</h1>
      <Bemvindo nome="Matheus" idade="24"/>
      <Bemvindo nome="Lucas" idade="19"/>
      <Equipe nome="Lucas" cargo="Programador" idade="29"/>
    </div>
  )
}

export default App;