import React, { Fragment } from 'react'
import classes from './Header.module.css'
import meals from '../../../003meals.jpg'

const Header = (props) => {
  return (
    <Fragment>

<header className={classes.header}>
            <h1>Arabian Delights</h1>

        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt='A table full of delicious food!'/>
        </div>

    </Fragment>
  )
}

export default Header