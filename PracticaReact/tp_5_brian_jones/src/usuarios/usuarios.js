import React from 'react';
import css from './usuarios.module.css';
import Usuario from '../usuario/index'

class Usuarios extends React.Component {

  componentDidMount = () => {
    if (this.props.users.length === 0) {
      this.props.fetchUsers();
    }
  }

  render() {
    return (
      <div className={css.app}>
        <div className={css.container}>
          <section className={css.listSection}>    
          <span className={css.listTitle}>Lista de Usuarios:</span>  
          <div>{this.props.isFetchingUsers && <span className={css.listTitle}>Cargando usuarios...</span>}</div>  
          <div>{this.props.fail && <span className={css.listTitle}>Error al cargar usuarios...</span>}</div>  
            {
              this.props.users.map((user) => {
                return <Usuario key={user.id} item={user}/>
              })
            }
          </section>          
          <button className={css.button} onClick={this.addUser}>Agregar Usuario</button>
        </div>
      </div>
    );
  }

  addUser = () => {
    this.props.history.push("/formulario")
  }
}


export default Usuarios;
