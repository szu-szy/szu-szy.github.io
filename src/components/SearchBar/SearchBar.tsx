import React, { useState } from 'react'
import styles from './SearchBar.module.scss';
import SearchIcon from '../../assets/icons/search-icon.png';
import CloseIcon from '../../assets/icons/close-icon.png';
import { useDispatch } from 'react-redux';
import { filterMovies } from '../../redux/actions';

const SearchBar = () => {
  const [isBarShown, setIsBarShown] = useState(true);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleShowBar = () => setIsBarShown(true);

  const handleCloseBar = () => setIsBarShown(false);

  const handleSearchInput = (e: any)  => {
    setSearchText(e.target.value);
    dispatch(filterMovies(e.target.value));
  }

  return (
    <div className={styles.search}>
      <div className={isBarShown ? styles['barShown'] : styles['barClosed']}>
        <input placeholder='type...' value={searchText} onChange={handleSearchInput}/>
      </div>
      { isBarShown ? (<img
        className={styles.icon}
        onClick={handleCloseBar}
        src={CloseIcon}
        alt='search icon'
      />) : (<img
          className={styles.icon}
          onClick={handleShowBar}
        src={SearchIcon}
        alt='search icon'
      />)}
      
    </div>
  )
}

export default SearchBar;