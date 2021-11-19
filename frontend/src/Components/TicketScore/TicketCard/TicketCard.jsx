import React from 'react'

const TicketCard = (props) => {
    return (
        <div className="col" onClick={() => props.clickHandler(props.ticketProps.id, props.ticketProps.isDone)}>
            <div className="d-flex position-relative">
                <div className="bg-secondary rounded-start w-100 p-3">
                    <h4 className="">{props.ticketProps.first_destination}</h4>
                    <h4 className="">{props.ticketProps.second_destination}</h4>
                </div>
                <div className="bg-primary rounded-circle ratio ratio-1x1 end-0 translate-middle-x">
                    <span className="w-auto h-auto start-50 top-50 translate-middle h1">{props.ticketProps.score}</span>
                </div>
            </div>
        </div>
    )
}

export default TicketCard
