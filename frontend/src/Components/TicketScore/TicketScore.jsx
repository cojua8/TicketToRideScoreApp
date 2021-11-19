import React, { useState, useEffect } from 'react'
import TicketCard from './TicketCard/TicketCard'

const TicketScore = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch("/tickets")
            .then(res => res.json())
            .then(result => {
                setCards(result.map((element, index) => { return { ...element, id: index } }))
            })

    }, [])

    const cardClickHandler = (id, isDone) => {
        const newCards = cards.map(elem => {
            if (elem.id === id) {
                return { ...elem, isDone: !isDone }
            }
            return elem
        })
        setCards(newCards)
    }

    const doneCardsProps = []
    const notDoneCardsProps = []

    for (const cardProps of cards) {
        if (cardProps.isDone) {
            doneCardsProps.push(cardProps)
        } else {
            notDoneCardsProps.push(cardProps)
        }
    }

    const totalScore = doneCardsProps.reduce((a, b) => a + b.score, 0)

    console.log(totalScore);

    return (
        <div>
            <div className="row row-cols-md-5 g-4">
                {doneCardsProps.map((el, id) => <TicketCard ticketProps={el} clickHandler={cardClickHandler} key={id} />)}
            </div>
            <p></p>
            <div className="row row-cols-md-5 g-4">
                {notDoneCardsProps.map((el, id) => <TicketCard ticketProps={el} clickHandler={cardClickHandler} key={id} />)}
            </div>
        </div>
    )
}

export default TicketScore
