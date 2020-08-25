import React, {useEffect} from 'react';
import DayCard from './DayCard'
import moment from 'moment'

function WeekContainer() {

    const [state, setState] = React.useState([])

    const weatherURL = `http://wttr.in/?format=j1`

    useEffect(() => {
    fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
            setState({
                weatherData: data.weather,
                sity: data.nearest_area[0].region[0].value
                })
            })
    })

    return (
        <div className="weatherContainer--width100">
            <div className="weekContainer__title">3-day forecast {state.sity}</div>
            <div className="weekContainer__daysList">
                {state.weatherData && state.weatherData.map((data, index) => {
                    return (
                        <div className="weekContainer__day">
                            <div className="weatherCard__title">{moment(data.date).format('MMM Do')}</div>
                            <DayCard data={data.hourly} key={index} />
                        </div>
                    )
                })} 
            </div>
        </div> 
    )
}

export default WeekContainer;
