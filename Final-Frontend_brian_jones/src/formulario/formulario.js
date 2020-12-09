import React from 'react'
import css from './formulario.module.css'
import { Field } from 'redux-form'

class Formulario extends React.Component {

  componentWillMount = () => {
    this.props.initialize({ 
      _id: this.props.match.params.id,
      nombre: this.props.match.params.nombre,
      descripcion: this.props.match.params.descripcion,
      precio: this.props.match.params.precio,
    });
  }

  render = () => {
      return (
          <div className={css.app}>
          <div className={css.container}>
            <section className={css.addSection}>  
              <div className={css.informationSection}>
                  <span className={css.titleAlumno}>Producto:</span>
                  <Field name="_id" className={css.hiddenInput} component="input" type="text" />
                  <Field placeholder="Nombre" name="nombre" className={css.input} component="input" type="text" />
                  <Field placeholder="Descripción" name="descripcion" className={css.input} component="input" type="text" />
                  <Field placeholder="Precio" name="precio" className={css.input} component="input" type="text" />
                  <button id="saveButton" className={css.buttonSave} onClick={this.saveNewProducto}>Guardar Información</button>
              </div>
            </section>
            <button 
                className={css.button} 
                onClick={() => {
                        this.props.history.push('/');
                    }}>
                    Volver
            </button>
          </div>
        </div>
      )
  }

  saveNewProducto = () => {
      this.props.handleSubmit();
      this.props.history.push('/');
  }
}
export default Formulario