import React from 'react'
import css from './user.module.css'



class User extends React.Component {
    state = {
        moreInfo: false,
    }
        
    showMoreInfo = () => {
        this.setState({
            moreInfo: !this.state.moreInfo,
        })
    }
    render = () => {
        return (
            <div className={css.card}>
            <img src="img_avatar.png" alt="Avatar"></img>
            <button className={css.button} onClick={this.showMoreInfo}>Más Info +</button>
                <div className={css.container}>
                    <h4><b>{this.props.name}</b></h4>
                    {this.state.moreInfo
                        && (
                    <div className={css.info}>
                        <p>{this.props.email}</p>
                        <p>{this.props.phone}</p>
                    </div>)}
                </div>
                <button className={css.button} onClick={() => {
                    this.props.deleteUser(this.props.id)
                }}
                >
                Eliminar
                </button>
            </div>
        )
    }
}
export default User