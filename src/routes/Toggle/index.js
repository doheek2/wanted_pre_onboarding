import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Toggle.module.scss'

const cx = classNames.bind(styles)

function Toggle() {
  const [toggle, setToggle] = useState(false)
  const handleClickedToggle = () => {setToggle(prev => !prev)}

  return(
    <div className={styles.wrapper}>
      <p className={styles.title}>Toggle</p>
      <button type='button' className={styles['toggle-btn']} onClick={handleClickedToggle}>
        <div className={cx(styles.circle, {[styles['circle-trans']] : toggle})} />
        <div className={styles['btn-tab']}>
          <p className={cx(styles['btn-text'], {[styles.selected] : !toggle})}>기본</p>
          <p className={cx(styles['btn-text'], {[styles.selected] : toggle})}>상세</p>
        </div>
      </button>
    </div>
  )
}

export default Toggle
