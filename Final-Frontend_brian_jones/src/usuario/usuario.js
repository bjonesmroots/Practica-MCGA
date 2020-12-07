import React from 'react'
import css from './usuario.module.css'


class Usuario extends React.Component {
        
    render = () => {
        return (
            <div className={css.counter}>
                <span className={css.label}><b>Nombre:</b> {this.props.item.name}<br></br><b>Email:</b> {this.props.item.email}</span>
            </div>
        )
    }
}
export default Usuario