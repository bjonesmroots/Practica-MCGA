import React from 'react';
import css from './home.module.css';
import Information from '../information/information'
class Home extends React.Component {

  render() {

    return (
      <div className={css.app}>
        <div className={css.container}>
          <section className={css.addSection}>  
            <Information></Information>
            <button className={css.buttonAdd} onClick={this.addCounter}>Agregar Contador</button>
            <button className={css.button} onClick={this.viewCounters}>Ver contadores</button>
          </section>
        </div>
      </div>
    );
  }

  addCounter = () => {
    let list = JSON.parse(localStorage.getItem('counters'));
    if (!list) {
      list = [];
    }
    list.push({
        id: Date.now(),
        valor: 0,
        created_at: Date.now(),
        updated_at: Date.now()
    });
    localStorage.setItem('counters', JSON.stringify(list));
    this.props.history.push("/counters")
  }
  viewCounters = () => {
    this.props.history.push("/counters")
  }
}

export default Home;
