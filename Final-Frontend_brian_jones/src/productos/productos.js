import React from 'react';
import css from './productos.module.css';
import Producto from '../producto/index'

class Productos extends React.Component {

  componentDidMount = () => {
      this.props.fetchProductos();
  }

  render() {
    return (
      <div className={css.app}>
        <div className={css.container}>
          <section className={css.listSection}>    
          <span className={css.listTitle}>Lista de Productos:</span>  
          <div>{this.props.isFetchingProductos && <span className={css.listTitle}>Cargando productos...</span>}</div>  
          <div>{this.props.fail && <span className={css.listTitle}>Error al cargar productos...</span>}</div>  
            {
              this.props.productos.map((producto) => {
                return <Producto history={this.props.history} key={producto._id} item={producto}/>
              })
            }
          </section>          
          <button className={css.button} onClick={this.addProducto}>Agregar Producto</button>
        </div>
      </div>
    );
  }

  addProducto = () => {
    this.props.history.push("/formulario")
  }
}


export default Productos;
