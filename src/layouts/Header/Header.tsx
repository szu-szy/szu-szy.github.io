import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';
import Logo from '../../components/Logo/Logo';
import SearchBar from '../../components/SearchBar/SearchBar';
import { ReduxStateType } from '../../redux/types';
import { MovieType } from '../../components/Movie/Movie-types';

const Header = () => {
  const favourites = useSelector<ReduxStateType, MovieType[]>(
    ({ favourites }) => favourites
  );

  const logFavourites = () => console.log(favourites);

  return (
    <div className={styles.header}>
      <Logo />
      <button onClick={logFavourites}>Log favourites</button>
      <div className={styles.header__nav}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
