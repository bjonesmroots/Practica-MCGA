import React from 'react'
import css from './information.module.css'



class Information extends React.Component {
    state = {
        nombre: 'Brian Jones',
        anio: '2020',
    }
       
    render = () => {
        return (
            <div className={css.informationSection}>
                <span className={css.titleAlumno}>Alumno:</span>
                <span id="labelAlumno" className={css.nameAlumno}>{this.state.nombre}</span>
                <span id="labelAnio" className={css.nameAlumno}>{this.state.anio}</span>                
                <input id="inputAlumno" className={css.input} hidden></input>
                <input id="inputAnio" className={css.input} hidden></input>
                <button id="editButton" className={css.button} onClick={this.editInformation}>Editar Información</button>
                <button id="saveButton" hidden className={css.button} onClick={this.saveInformation}>Guardar Información</button>
            </div>
        )
    }

    editInformation = () => {
        document.getElementById("inputAlumno").value = this.state.nombre;
        document.getElementById("inputAnio").value = this.state.anio;
        document.getElementById("editButton").hidden = true;
        document.getElementById("labelAlumno").hidden = true;
        document.getElementById("labelAnio").hidden = true;
        document.getElementById("saveButton").hidden = false;
        document.getElementById("inputAlumno").hidden = false;
        document.getElementById("inputAnio").hidden = false;
    }
    saveInformation = () => {
        document.getElementById("editButton").hidden = false;
        document.getElementById("labelAlumno").hidden = false;
        document.getElementById("labelAnio").hidden = false;
        document.getElementById("saveButton").hidden = true;
        document.getElementById("inputAlumno").hidden = true;
        document.getElementById("inputAnio").hidden = true;
        this.setState({
            nombre: document.getElementById("inputAlumno").value,
            anio: document.getElementById("inputAnio").value,
        }) 
    }
}
export default Information