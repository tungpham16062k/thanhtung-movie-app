import React from 'react';
import { Link } from 'react-router-dom';
import './MovieFavorite.scss';

const MovieFavoriteItem = (props) => {
    const { movie } = props;

    return (
        <div className="favorites__item">
            <div className="favorites__poster">
                <Link to={`/movie/${movie.slug}`}>
                    <img src={movie.poster} alt={movie.viName} title={movie.viName} />
                </Link>
            </div>
            <div className="favorites__content">
                <div className="favorites__heading">
                    <div className="favorites__right">
                        <Link to={`/movie/${movie.slug}`} className="favorites__name">{movie.name}</Link>
                        <Link to={`/movie/${movie.slug}`} className="favorites__viname">{movie.viName}</Link>
                    </div>
                    <div className="favorites__left">
                        <p className="favorites__time">{movie.time}</p>
                        {/* <p className="favorites__country">Mỹ</p> */}
                    </div>
                </div>
                <p className="favorites__desc">
                    {movie.description[0]}
                </p>
                <div className="favorites__bottom">
                    <div className="favorites__category">
                        {movie.category && movie.category.map((item, key) => (
                            <a href="# " className="favorites__category-item" key={key}>{item.name}</a>
                        ))}
                    </div>
                    <div className="favorites__rate">
                        <p>{movie.rate}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z" fill="#ffc107" />
                            <path d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z" fill="#263238" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieFavoriteItem;