import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div>
            <span>
                {`${humidity} % - `}
            </span>
            <span>
                {`${wind} Wind`}
            </span>
        </div>
    );
};

export default WeatherExtraInfo;