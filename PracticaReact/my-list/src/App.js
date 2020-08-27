import React from 'react';
import './App.css';
import css from './index.css';
import User from './user/user'
class App extends React.Component {
  state = {
    users: []
  }

  componentWillMount = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const list = await response.json();
      this.setState({users : list}) 
    } catch(error) {
      console.error(error);
    }
  }

  render() {

    return (
      <div className={css.app}>
        <header className={css.header}>
            Lista de usuarios
        </header>
        <section className={css.listSection}>
          {this.state.users.map((user,index) => {
            return <User key={index} name={user.name} phone={user.phone} email={user.email}></User>
          })}
        </section>
      </div>
    );
  }
}

export default App;
