import React from 'react'
import css from './counter.module.css'
import moment from 'moment'


class Counter extends React.Component {
    state = {
        id: this.props.id,
        valor: 0,
        created_at: moment().format('D/M/Y hh:mm:ss a'),
        updated_at: moment().format('D/M/Y hh:mm:ss a'),
    }
        
    showMoreInfo = () => {
        this.setState({
            moreInfo: !this.state.moreInfo,
        })
    }
    render = () => {
        return (
            <div className={css.counter}>
                <span className={css.label}><b>Creado:</b> {this.state.created_at}<br></br><b>Actualizado:</b> {this.state.updated_at}</span>
                <div className={css.container}>
                    <button 
                        className={css.buttonIncDec}
                        onClick={this.decreaseCounter}
                    >
                        -
                    </button>
                    <span 
                        className={css.valor}
                    >
                        {this.state.valor}
                    </span>
                    <button 
                        className={css.buttonIncDec} 
                        onClick={this.increaseCounter}
                    >
                        +
                    </button>
                    <button 
                        className={css.button} 
                        onClick={() => {
                            this.props.deleteCounter(this.props.id)
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        )
    }

    increaseCounter = () => {
        this.setState({
            valor : this.state.valor + 1,
            updated_at: moment().format('D/M/Y hh:mm:ss a'),
        }) 
    }
    decreaseCounter = () => {
        this.setState({
            valor : this.state.valor - 1,
            updated_at: moment().format('D/M/Y hh:mm:ss a'),
        }) 
    }
}
export default Counter