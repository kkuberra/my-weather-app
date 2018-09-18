import React from 'react';

class Weather extends React.Component {
    render() { 
        return (
            <div>
                {this.props.city}
                {this.props.country}
                {this.props.temperature}
                {this.props.hunidity}
                {this.props.description}
            </div>
        );
    }
}
 
export default Weather;