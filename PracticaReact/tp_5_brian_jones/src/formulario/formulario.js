import React from 'react'
import css from './formulario.module.css'
import { Field } from 'redux-form'
class Formulario extends React.Component {
       
    render = () => {
        return (
            <div className={css.app}>
            <div className={css.container}>
              <section className={css.addSection}>  
                <div className={css.informationSection}>
                    <span className={css.titleAlumno}>Usuario:</span>            
                    <Field name="name" className={css.input} component="input" type="text" />
                    <Field name="email" className={css.input} component="input" type="text" />
                    <button id="saveButton" className={css.buttonSave} onClick={this.saveNewUser}>Guardar Información</button>
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

    saveNewUser = () => {
        this.props.handleSubmit();
        this.props.history.push('/');
    }
}
export default Formulario