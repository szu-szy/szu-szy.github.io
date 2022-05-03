import React from 'react';
import { Link } from 'react-router-dom';
import { BannerTypes } from './Banner-types';
import styles from './Banner.module.scss';

const Banner = ({ movie, index }: BannerTypes) => {

  return (
    <div className={styles.banner}>
      <h2>{index + 1}</h2>
      <img
        src={movie['im:image'][2].label}
        alt={`${movie['im:name'].label}`}
        className={styles.image}
      />
      <div className={styles.content}>
        <Link
          to={`/movies/${movie.id.attributes['im:id']}`}
          className={styles.header}>{movie['im:name'].label}</Link>
        <p>{movie.summary.label}</p>
      </div>
    </div>
  );
};

export default Banner;