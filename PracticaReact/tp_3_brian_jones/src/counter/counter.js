import React from 'react'
import css from './counter.module.css'
import moment from 'moment'


class Counter extends React.Component {
    state = {
        id: this.props.item.id,
        valor: this.props.item.valor,
        created_at: moment(this.props.item.created_at).format('D/M/Y hh:mm:ss a'),
        updated_at: moment(this.props.item.updated_at).format('D/M/Y hh:mm:ss a'),
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
                            this.props.deleteCounter(this.state.id)
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        )
    }

    increaseCounter = () => {
        this.props.item.valor++;
        this.updateLS();
    }
    decreaseCounter = () => {
        this.props.item.valor--;
        this.updateLS();
    }

    updateLS() {
        this.props.item.updated_at = Date.now();
        this.setState({
            valor : this.props.item.valor,
            updated_at: moment(this.props.item.updated_at).format('D/M/Y hh:mm:ss a'),
        }) 
        let list = JSON.parse(localStorage.getItem('counters'));
        list.forEach((item) => {
            if (item.id === this.props.item.id) {
                item.valor = this.props.item.valor;
                item.updated_at = this.props.item.updated_at;
            }
        });
        localStorage.setItem('counters', JSON.stringify(list));
    }
}
export default Counter