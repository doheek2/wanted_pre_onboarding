import { useState } from 'react'
import styles from './Tab.module.scss'

const TAB_MENUS = ['감자', '고구마', '카레라이스']
const DISTANCE = 90

function Tab() {
  const [move, setMove] = useState('translateX(0)')
  const handleSelectedTab = e => {setMove(`translateX(${e.currentTarget.id * DISTANCE}px)`)}
  
  return(
    <div className={styles.wrapper}>
      <p className={styles.title}>Tab</p>
      <div className={styles.tabs}>
        {TAB_MENUS.map((menu, i) => {
          const key = `menu${i}`
          return(
            <div key={key}>
              <input 
                id={i} 
                type='radio' 
                name='tab'
                className={styles.radioTab}
                onChange={handleSelectedTab}
              />
              <label htmlFor={i} className={styles.tab}>{menu}</label>
            </div>
          )
        })}
        <div className={styles.line} style={{transform: move}}/>
      </div>
    </div>
  )
}

export default Tab
