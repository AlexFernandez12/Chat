import React, {Component} from 'react';

class MiComponente extends Component {
  render() {
    let lista =['Conocenos', 'Supermercados', 'Aten.Cliente', 'Trabaja con nosotros']

    return (
      <nav>
      <ul>
        { 
            lista.map((lista, i)=>
            <a href=''><li>{lista}</li></a>
         
            )}      
      </ul>
      </nav>
 );
}
}

export default MiComponente;
