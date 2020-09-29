import React from 'react';
import css from './counters.module.css';
import Counter from '../counter/counter'

class Counters extends React.Component {
  componentWillMount = () => {
    this.setState({
        counters: JSON.parse(localStorage.getItem('counters')),
    })
  }

  render() {
    return (
      <div className={css.app}>
        <div className={css.container}>
          <section className={css.listSection}>    
          <span className={css.listTitle}>Lista de Contadores:</span>    
            {
              this.state.counters.map((counter) => {
                return <Counter key={counter.id} item={counter} deleteCounter={this.deleteCounter}/>
              })
            }
          </section>
          <button className={css.button} onClick={() => {
            this.props.history.push('/');
          }}>Volver</button>
        </div>
      </div>
    );
  }

  deleteCounter = (counter_id) => {
    const list = this.state.counters.filter((counter) => {
        return counter.id !== counter_id;
    })
    this.setState({
      counters: list
    })
    localStorage.setItem('counters', JSON.stringify(list));
  }
}

export default Counters;
