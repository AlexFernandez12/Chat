import React, {Component} from 'react';

class Formulario extends Component {
  render() {

    return (

        <form className='formulario'>
         Nombre<input type="text" value={this.props.SearchString}/><br></br>
         Apellidos<input type="text" value={this.props.SearchString} /><br></br>
         Edad<input type="text" value={this.props.SearchInt} /><br></br>
        <input type="submit" value="Submit" />
      </form>

    );
  }
}


export default Formulario;