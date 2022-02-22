import './App.css';
import React from 'react';
import reactDom from 'react-dom';
 

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"", texto_area : "", valor : "", texto_area_usuario : "",valor_usuario : "", comentarios:[]}
 
    this.cambio=this.cambio.bind(this);
    this.escribir=this.escribir.bind(this);
    this.insertar=this.insertar.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.cambioUsuario=this.cambioUsuario.bind(this);
  }
  cambio(event){
    this.setState({valor:event.target.value});
 
  }
  cambioUsuario(event){
    this.setState({valor_usuario:event.target.value});
 
  }
  escribir(event){
    this.setState({ texto_area: this.state.valor});
    this.setState({ texto_area_usuario: this.state.valor_usuario});
  }
  componentDidMount(){
    fetch("http://localhost/chat/mostrar.php",{
 
    }
    ).then(
      res =>
      res.json()
    )
    .then(
      (result)=>{
        this.setState({comentarios: result})
        this.setState({valor:""})
 
      }
    )
  }
  insertar(){
    var datos = new FormData;
    datos.append('comentario', this.state.valor)
    datos.append('usuario',localStorage.getItem('usuario'))
 
    fetch("http://localhost/chat/Insertar.php",{
    method:'POST',
    body: datos
  })
  .then(response =>
    console.log(response.ok)
   
    )
    .then(
      (result)=>{
        this.componentDidMount();
      }
    )
 
  }
  render(){

    return(
      <div className='App'>
        <header className='App-header'>     
              <h1 >Chat</h1> 
        </header>
          
          <div className='linea'>
         <h2></h2><div id='cuadro_texto'>{this.state.comentarios.map(mostrar=>(<li id='quitarpunto' key={mostrar.ID}>{mostrar.Mensaje}:{mostrar.Usuario}</li>))}</div>
        </div>
        
        <div className='caja'>
    
         <h2> Escriba un mensaje</h2>
         <input type="text" value={this.state.valor} id='campo_texto' onChange={this.cambio}/>
          <input type='button' name='boton' id='campo_texto' value='Enviar' onClick={this.insertar}/>
          </div>
          

      </div>
    );

  }
  }
  export default Chat;