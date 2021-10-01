import React from 'react';
import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = (props) => {
    console.log(props)
    return (

        <div className='card-list'>
            {props.monstors.map(mon => (
                <Card key={mon.id} monster={mon}/>
            ))}

        </div>
    );
}
export default CardList;
