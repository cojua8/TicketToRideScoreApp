import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const RouteScoreButton = (props) => {
    const increaseRoute = () => {
        props.handleRouteChange(props.routeScore, props.numberRoutes + 1)
    }
    const decreaseRoute = () => {
        props.numberRoutes > 0 && props.handleRouteChange(props.routeScore, props.numberRoutes - 1)
    }

    const handleChange = (e) => {
        let newValue = parseInt(e.target.value)
        if (isNaN(newValue)) {
            props.handleRouteChange(props.routeScore, 0)
        } else {
            props.handleRouteChange(props.routeScore, newValue)
        }
    }

    return (
        <tr>
            <th>
                <h3>{props.length}</h3>
            </th>
            <th>
                <div className="input-group" role="group">
                    <button type="button" className="btn btn-primary" onClick={decreaseRoute}>
                        <i className="bi bi-dash"/>
                    </button>
                    <input type="text" className="form-control text-center" style={{ width: '50px' }} value={props.numberRoutes} onChange={handleChange} />
                    <button type="button" className="btn btn-primary" onClick={increaseRoute}>
                        <i className="bi bi-plus"/>
                    </button>
                </div>
            </th>
            <th>
                <h3>{props.routeScore * props.numberRoutes}</h3>
            </th>
        </tr>
    )
}

export default RouteScoreButton
