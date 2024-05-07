import React, { useState, useEffect } from 'react'
import DatingCard from 'react-tinder-card'
import './DatingCards.css'
import axios from './axios'
import SwipeButtons from './SwipeButtons'

const DatingCards = () => {
    const [people, setPeople] = useState([]) 
    const [displayedPeople, setDisplayedPeople] = useState([]) 

   useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/dating/cards")
            console.log(req)
            setPeople(req.data)
            setDisplayedPeople(req.data)
        }
        fetchData()
    }, [])

    const swiped = () => {
        setDisplayedPeople((p) => p.slice(0,-1))
    }

    const outOfFrame = () => {
        console.log(" left the screen!!")
    }

    return (
        <>
        <div className="datingCards">
            <div className="datingCards__container">
                {displayedPeople.map((person) => (
                    <DatingCard 
                    className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={swiped}
                        onCardLeftScreen={outOfFrame} 
                        >
                        <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </DatingCard>
                ))}
            </div>
        </div>
        <SwipeButtons onNext={swiped} onReset={() => setDisplayedPeople(people)} />
        </>
    )
}

export default DatingCards
