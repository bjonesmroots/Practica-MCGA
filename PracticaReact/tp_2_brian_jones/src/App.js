import React from 'react';
import Loading from './loading/loading'
import Error from './error/error'
import css from './app.module.css';
import Counter from './counter/counter'
import Information from './information/information'
class App extends React.Component {
  state = {
    counters: [],
    loading: false,
    error: undefined,
  }

  componentWillMount = async () => {
    try {      
      this.setState({
        loading: true,
        error: undefined,
      })

      this.setState({
        loading: false
      }) 
    } catch(error) {
      this.setState({
        loading: false,
        error: error.toString(),
      })
    }
  }

  render() {

    return (
      <div className={css.app}>
        <header className={css.header}>
            Trabajo Práctico Nº 2
        </header>
        <div className={css.container}>
          <section className={css.addSection}>  
            <Information></Information>
            <button className={css.buttonAdd} onClick={this.addCounter}>Agregar Contador</button>
          </section>
          <section className={css.listSection}>    
          <span className={css.listTitle}>Lista de Contadores:</span>    
          {this.state.error && <Error message={this.state.error}/>}
            {this.state.loading
              ? <Loading />
              :this.state.counters.map((counter) => {
              return counter
            })}
          </section>
        </div>
      </div>
    );
  }

  deleteCounter = (counter_id) => {
    const list = this.state.counters.filter((counter) => {
        return counter.props.id !== counter_id;
    })
    this.setState({
      counters: list
    })
  }

  addCounter = () => {
    let list = this.state.counters;
    const id = Date.now();
    list.push(<Counter key={id} id={id} deleteCounter={this.deleteCounter}/>);
    this.setState({
      counters: list
    })
  }
}

export default App;
