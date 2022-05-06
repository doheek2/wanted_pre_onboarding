import { useState } from 'react'
import styles from './Dropdown.module.scss'

import searchIcon from '../../assets/search.png'

const SEARCH_WORDS = [
  'All Symbols', 'BTCUSD.PERP', 'ETHUSD.PERP', 
  'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP'
]

function Dropdown() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [showList, setShowList] = useState(true)
  const [selectedWord, setSelectedWord] = useState(SEARCH_WORDS[0])
  const [filterWords, setFilterWords] = useState()

  const handleClickDropdown = () => setIsOpenDropdown(prev => !prev)

  const handleChangeWord = e => {
    const currentWord = e.currentTarget.value
    let filterArr = SEARCH_WORDS.filter(word => word.toLowerCase().indexOf(currentWord.toLowerCase()) !== -1)
    if(!filterArr.includes(SEARCH_WORDS[0])) filterArr = [SEARCH_WORDS[0], ...filterArr]

    setFilterWords(filterArr)
    setShowList(false)
  }

  const handleClickWord = e => {
    setSelectedWord(e.currentTarget.innerHTML)
    setIsOpenDropdown(false)
    setShowList(true)
  }

  return(
    <div className={styles.wrapper}>
      <p className={styles.title}>Dropdown</p>
      <section className={styles.dropdown}>
        <button type='button' className={styles.buttonWrapper} onClick={handleClickDropdown}>
          <div className={styles.selectedWord}>{selectedWord}</div>
        </button>
        {isOpenDropdown &&
        <section className={styles.listWrapper}>
          <section className={styles.searchWrapper}>
            <img src={searchIcon} alt='search icon' />
            <input type='text' placeholder='Search Symbol' onChange={handleChangeWord}/>
          </section>
          <ul className={styles.list}>
            {showList
              ? SEARCH_WORDS.map((word, i) => {
                const key = `word${i}`
                return (
                  <li key={key} >
                    <button type='button' onClick={handleClickWord}>{word}</button>
                  </li>
                )
              })
              : filterWords.map((word, i) => {
                const key = `word${i}`
                return (
                  <li key={key} >
                    <button type='button' onClick={handleClickWord}>{word}</button>
                  </li>
                )
              })
            }
          </ul>
        </section>
        }
      </section>
    </div>
  )
}

export default Dropdown
