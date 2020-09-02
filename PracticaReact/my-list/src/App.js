import React from 'react';
import Loading from './loading/loading'
import Error from './error/error'
import css from './app.module.css';
import User from './user/user'
class App extends React.Component {
  state = {
    users: [],
    loading: false,
    error: undefined,
  }

  componentWillMount = async () => {
    try {      
      this.setState({
        loading: true,
        error: undefined,
      })
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const list = await response.json();
      this.setState({
        users : list,
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
            Lista de usuarios
        </header>
        <section className={css.listSection}>
        {this.state.error && <Error message={this.state.error}/>}
          {this.state.loading
            ? <Loading />
            :this.state.users.map((user,index) => {
            return <User key={index} id={user.id} name={user.name} phone={user.phone} email={user.email} deleteUser={this.deleteUser}></User>
          })}
        </section>
      </div>
    );
  }

  deleteUser = (user_id) => {
    const list = this.state.users.filter((user) => {
        return user.id !== user_id;
    })
    this.setState({
      users: list
    })
  }
}

export default App;
