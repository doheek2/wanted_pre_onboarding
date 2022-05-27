import { useState } from 'react'
import styles from './Slider.module.scss'

const STEPS = [1, 25, 50, 75, 100]

function Slider() {
  const [isSelected, setIsSelected] = useState(1)

  const handleChangeInput = e => {
    const {value} = e.currentTarget
    setIsSelected(value)
  }


  const handleClickStep = e => {
    const {value} = e.currentTarget
    setIsSelected(STEPS[value])
  }

  return(
    <div className={styles.wrapper}>
      <p className={styles.title}>Slider</p>
      <section className={styles.valueWrapper}>
        <span>{isSelected}</span>
        <span className={styles.percentage}>%</span>
      </section>
      <section className={styles.SliderWrapper}>
        <input 
          type='range'
          value={isSelected}
          className={styles.range}
          list='marks'
          min='1'
          max='100'
          onChange={handleChangeInput}
        />
      </section>
      <ul className={styles.valueStep}>
        {STEPS.map((step, i) => {
          const key = `step${i}`
          return(
            <li key={key}>
              <button type='button' value={i} className={styles.step} onClick={handleClickStep}>{step}%</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Slider
