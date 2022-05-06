import Toggle from '../Toggle'
import Tab from '../Tab'
import Slider from '../Slider'
import Input from '../Input'
import Dropdown from '../Dropdown'
import styles from './Main.module.scss'


function TodoList() {

  return (
    <div className={styles.main}>
      <div className={styles.centering}>
        <h1>원티드 사전과제</h1>
        <section className={styles.scroll}>
          <Toggle />
          <Tab />
          <Slider />
          <Input />
          <Dropdown />
        </section>
      </div>
    </div>
  )
}

export default TodoList
