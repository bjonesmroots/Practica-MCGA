import React from 'react'
import css from './counter.module.css'
import moment from 'moment'


class Counter extends React.Component {
        
    render = () => {
        return (
            <div className={css.counter}>
                <span className={css.label}><b>Creado:</b> {moment(this.props.item.created_at).format('D/M/Y hh:mm:ss a')}<br></br><b>Actualizado:</b> {moment(this.props.item.updated_at).format('D/M/Y hh:mm:ss a')}</span>
                <div className={css.container}>
                    <button 
                        className={css.buttonIncDec}
                        onClick={() => {
                            this.props.decreaseCounter(this.props.item.id)
                        }}
                    >
                        -
                    </button>
                    <span 
                        className={css.valor}
                    >
                        {this.props.item.valor}
                    </span>
                    <button 
                        className={css.buttonIncDec} 
                        onClick={() => {
                            this.props.increaseCounter(this.props.item.id)
                        }}
                    >
                        +
                    </button>
                    <button 
                        className={css.button} 
                        onClick={() => {
                            this.props.deleteCounter(this.props.item.id)
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        )
    }
}
export default Counter