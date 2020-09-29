import React from 'react'
import css from './error.module.css'

const Error = (props) => {
  return(
    <div className={css.container}>
      {props.message}
    </div>
  )

}

export default Error