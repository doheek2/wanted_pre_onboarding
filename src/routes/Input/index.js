import { useState } from 'react'
import styles from './Input.module.scss'

import emailValidateIcon from '../../assets/checked.png'
import emailValidateFailedIcon from '../../assets/not-checked.png'
import showPasswordIcon from '../../assets/show.png'
import notShowPasswordIcon from '../../assets/not-show.png'


function Input() {
  const [isEmail, setIsEmail] = useState({visible: false, icon: emailValidateFailedIcon})
  const [showPassword, setShowPassword] = useState({type: 'password', visible: false, icon: showPasswordIcon})
  const [emailValid, setEmailValid] = useState('')

  const handleChangeEmail = e => {
    const regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    const currentEmail = e.currentTarget.value

    if(regExp.test(currentEmail)) {
      setIsEmail(() => {
        return {visible: true, icon: emailValidateIcon}
      })
    } else {
      setIsEmail(() => {
        return {visible: false, icon: emailValidateFailedIcon}
      }) 
    }
  }

  const handleValidateEmail = e => {
    if(isEmail.visible || e.target.value.length === 0) {
      setEmailValid('')
    } else {
      setEmailValid('Invalid e-mail address.')
    }
  }

  const handleShowPassword = () => {
    setShowPassword(() => {
      if(showPassword.visible) {
        return {
          type: 'password',
          visible: false,
          icon: showPasswordIcon
        }
      }

      return {
        type: 'text',
        visible: true,
        icon: notShowPasswordIcon
      }
    })
  }

  return(
    <div className={styles.wrapper}>
      <p className={styles.title}>Input</p>
      <form className={styles.form}>
        <label htmlFor='email' className={styles.title}>E-mail</label>
        <section className={styles.inputWrapper}>
          <input 
            type='text'
            id='email'
            placeholder='Enter your e-mail'
            className={styles.textfield}
            onChange={handleChangeEmail}
            onBlur={handleValidateEmail}
          />
          <img src={isEmail.icon} alt='email check icon'/>
          <div className={styles.valid}>{emailValid}</div>
        </section>
        <label htmlFor='password' className={styles.title}>Password</label>
        <section className={styles.inputWrapper}>
          <input
            type={showPassword.type}
            id='password'
            placeholder='Enter your Password'
            className={styles.textfield}
          />
          <button type='button' onClick={handleShowPassword}>
            <img src={showPassword.icon} alt='show password icon' />
          </button>
        </section>
      </form>
    </div>
  )
}

export default Input
