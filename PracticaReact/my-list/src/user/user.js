import React from 'react'
import css from './user.module.css'

const User = (props) => {
    return (
        <div className={css.card}>
        <img src="img_avatar.png" alt="Avatar"></img>
            <div className={css.container}>
                <h4><b>{props.name}</b></h4>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}
export default User