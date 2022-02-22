import React from 'react';
import './login.css';
import reactDom from 'react-dom';
 

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"", valor : "", valor_password : ""}
 
    this.cambio=this.cambio.bind(this);
    this.insertar=this.insertar.bind(this);
    this.cambioPassword=this.cambioPassword.bind(this);
    this.iniciar=this.iniciar.bind(this);
  }
  cambio(event){
    this.setState({valor:event.target.value});
 
  }
  cambioPassword(event){
    this.setState({valor_password:event.target.value});
    //localStorage.setItem('nombrar',this.state.valor_usuario);
    //console.log(this.state.valor_usuario);
 
  }
  iniciar(){
    var datos = new FormData;
    datos.append('usuario', this.state.valor)
    datos.append('password', this.state.valor_password)
 
    fetch("http://localhost/chat/login.php",{
    method:'POST',
    body: datos
  })
  .then(res=>res.json())
  .then( (result)=>{
    if(result=='Funciona'){
      localStorage.setItem("usuario",this.state.valor);
      window.location.href="/Chat";
    }
  },
  (error)=>{
    console.log('No es correcto');
  }
  )
  }
  insertar(){
    var datos = new FormData;
    datos.append('usuario', this.state.valor)
    datos.append('password', this.state.valor_password)
    //datos.append('usuario',localStorage.getItem('nombrar') )
 
    fetch("http://localhost/chat/Insertar_login.php",{
    method:'POST',
    body: datos
  })
  .then(response =>
    console.log(response.ok)
    
    )
    .then(
      (result)=>{
        this.setState({valor : ""});
        this.setState({valor_password : ""});
        
 
      }
    )
 
  }
  render(){


    return(
        <div className='todo'>
      <div className='primero'>
          <div className='segundo'>
            <h1>Registro</h1>
            </div>
         <div className='tercero'>
            <h3>Usuario:</h3><br></br>
            <input type="text" value={this.state.valor} id='campo_texto' placeholder='Usuario' onChange={this.cambio}/>
            <h3>Contraseña:</h3><br></br>
            <input type="password" id='usuario' value={this.state.valor_password} name='usuario' placeholder='Contraseña' onChange={this.cambioPassword}/>
            <br></br><br></br>
            <input type="button" value='Iniciar' id='boton' onClick={this.iniciar}/>
            <input type='button' name='boton' id='boton1' value='Registrar' onClick={this.insertar}/>
          </div>
          

      </div>
      </div>
    );

  }
  }
  export default Login;
  