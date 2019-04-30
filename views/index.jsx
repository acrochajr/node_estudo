const React = require('react');
// class HelloWorld extends React.Component {
//   render() {
//     return <div>Olá, essa página está usando o express-react-views</div>;
//   }
// }

class ContatoFormulario extends React.Component{
    render(){
        return(
            <div>
 
            <h2>TutsPlus - React Form Tutorial</h2>
            <hr />
             
            <label>First Name: </label>
            <input type="text"  />
            <br />

            <label>Last Name: </label>
            <input type="text"  />
            <br />

            <input type="button" value="Submit" />

            <hr />
        </div>

        );
    }
}

module.exports = ContatoFormulario;