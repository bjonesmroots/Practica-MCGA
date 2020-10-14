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
    this.props.addCounter()
    this.props.history.push("/counters")
  }
  viewCounters = () => {
    this.props.history.push("/counters")
  }
}

export default Home;
