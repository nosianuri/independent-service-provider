import React from 'react';
import { Link } from 'react-router-dom';
import actor1 from '../../../images/actors/actor-1.png';
import actor2 from '../../../images/actors/actor-2.png';
import actor3 from '../../../images/actors/actor-3.png';
import actor4 from '../../../images/actors/actor-4.png';
import actor5 from '../../../images/actors/actor-5.png';
import actor6 from '../../../images/actors/actor-6.png';
import Actor from '../Actor/Actor';
import './Actors.css';

const actors = [
    {id: 1, name: 'J-hope', img: actor1},
    {id: 2, name: 'Jin', img: actor2},
    {id: 3, name: 'Jungkook', img: actor3},
    {id: 4, name: 'RM', img: actor4},
    {id: 5, name: 'Suga', img: actor5},
    {id: 6, name: 'V', img: actor6}
]

const Actors = () => {
    return (
        <div className='container mt-5'>
            <h2 className='search text-center'>People Also search for</h2>
            <div className="row">
                {
                    actors.map(actor => <Actor
                    key={actor.id}
                    actor={actor}
                    ></Actor>)
                }
            </div>
            <a as={Link} to="/home" class="btn see-more ">See More</a>
        </div>
    );
};

export default Actors;