import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Heart } from '../../img/heart.svg';

const heartColors = ['#E49AB0', '#ECB8A5', '#ECCFC3', '#957D95'];

const getRandomColor = () => {
    const index = Math.floor(Math.random() * heartColors.length);
    return heartColors[index];
};

const Header = () => {
    const [randomColor, setRandomColor] = useState(getRandomColor());
    useEffect(() => {
        setInterval(() => {
            setRandomColor(getRandomColor());
        }, 1000);
    }, []);
    return (
        <header className="header">
            <Link to="/home" className="logo">
                <Heart className="heart pink" />
                <h2 style={{ color: randomColor, paddingTop: '10px' }}>
                    Purrfect CatShelter
                </h2>
                <Heart className="heart" />
            </Link>
            <Link to="/home">Home</Link>
            <Link to="/adopt">Adopt</Link>
            <Link to="/add-cat">Add Cat</Link>
        </header>
    );
};

export default Header;
