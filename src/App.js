import logo from './logo.svg';
import './App.css';
import React from 'react';
import reactDom from 'react-dom';
 
function Incorporar(props){
  return(
    <div>
      <p>{props.frase}</p>
    </div>
  )
}
class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"", texto_area : "", valor : ""}
 
    this.cambio=this.cambio.bind(this);
    this.escribir=this.escribir.bind(this);
    this.insertar=this.insertar.bind(this);
  }
  cambio(event){
    this.setState({valor:event.target.value});
 
  }
  escribir(event){
    this.setState({ texto_area: this.state.valor});
  }
  insertar(){
    var datos = new FormData;
    datos.append('comentario', this.state.valor)
    fetch("http://localhost/chat/Insertar.php",{
    method:'POST',
    body: datos
  })
  .then(response =>
    console.log(response.ok)
   
    )
 
  }
  render(){
    return(
      <div className='App'>
        <header className='App-header'>
          <h1>Chat</h1>
        <h2>Tu mensaje enviado es:</h2><div id='cuadro_texto'><p><Incorporar frase={this.state.texto_area}/></p></div>
         <h2> Escriba un mensaje</h2><input type="text" id='campo_texto' onChange={this.cambio}/>
          <input type='button' name='boton' value='Enviar' onClick={this.insertar}/>
        </header>
      </div>
    );
  }
  }
  export default Chat;
 
 
