import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

const Nav = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <h1>
            <Link to="/">AudioCore</Link>
          </h1>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
