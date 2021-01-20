import React from 'react'
import Nav from '../nav'
import '../../styles/GlobalStyles.scss'
import styles from './styles.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      {children}
    </div>
  )
}

export default Layout
