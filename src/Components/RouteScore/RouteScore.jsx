import React, { useState } from 'react'
import RouteScoreButton from '../RouteScoreButton/RouteScoreButton'

const RouteScore = () => {
    const [routes, setRoutes] = useState([
        { length: 1, routeScore: 1, numberRoutes: 0 },
        { length: 2, routeScore: 2, numberRoutes: 0 },
        { length: 3, routeScore: 4, numberRoutes: 0 },
        { length: 4, routeScore: 7, numberRoutes: 0 },
        { length: 6, routeScore: 15, numberRoutes: 0 },
        { length: 8, routeScore: 21, numberRoutes: 0 },
    ])

    const handleRouteChange = (routeScore, numberRoutes) => {
        const newRoutes = routes.map(elem => {
            if (elem.routeScore === routeScore) {
                return { ...elem, numberRoutes }
            }
            return elem
        })
        setRoutes(newRoutes)
    }

    const buttons = routes.map((route) => <RouteScoreButton length={route.length} routeScore={route.routeScore} numberRoutes={route.numberRoutes} totalScore={route.totalScore} key={route.length} handleRouteChange={handleRouteChange} />)

    const totalScore = routes.reduce((a, b) => a + (b.routeScore * b.numberRoutes), 0)
    const totalTrains = routes.reduce((a, b) => a + (b.length * b.numberRoutes), 0)

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="bg-light border border-primary rounded-3 px-4 py-4 opacity-75 text-center">
                <table className="table">
                    <thead>
                        <tr className="text-center h4">
                            <th scope="col">Route length</th>
                            <th scope="col">Total routes</th>
                            <th scope="col">Total score</th>
                        </tr>
                    </thead>
                    <tbody className="text-center align-middle">
                        {buttons}
                    </tbody>
                </table>
                <h6 className="text-secondary">Total used trains: {totalTrains}</h6>
                <h2>Total score: {totalScore}</h2>
            </div>
        </div>
    )
}

export default RouteScore
