import React from 'react';
import { weatherIcons } from './weatherIcons';

function DayCard({ data }) {
  const hourly = data.filter(function (value, index) {
    return index % 2 === 0;
  });
  return (
    <div className="weatherContainer--flexbox weekContainer__day">
      {hourly.map((info) => {
        const classes = [];
        switch (info.time) {
          case '0':
            classes.push('weatherCard__morning');
            break;
          case '600':
            classes.push('weatherCard__afternoon');
            break;
          case '1200':
            classes.push('weatherCard__evening');
            break;
          case '1800':
            classes.push('weatherCard__night');
            break;
        }
        return (
          <div className={classes.join(' ') + ` weatherCard`}>
            <div className="weatherCard__icon">
              {weatherIcons[info.weatherCode]}
            </div>
            <div>
              <div className="weatherCard__weatherDesc weatherCard__item">
                {info.weatherDesc[0].value}
              </div>
              <div className="weatherCard__temp weatherCard__item">
                {Math.round(info.tempC)} °C
              </div>
              <div className="weatherContainer--flexbox weatherCard__wind weatherCard__item">
                Wind {info.windspeedKmph} km/h
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DayCard;
