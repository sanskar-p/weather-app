import React from 'react'
import Icon from '../WeatherIcon'
import './Today.css'

function convertTime(unix){
	let date = new Date(unix * 1000)
	let hours = date.getHours()
	const minutes = "0" + date.getMinutes()
	let ampm;
	if(hours >= 12){
		hours -= 12
		ampm = 'pm'
	}
	else ampm = 'am'
	return hours+':'+minutes.substr(-2)+" "+ampm
}
function timeDiff(sunrise, sunset) {
    let rise = new Date(sunrise*1000)
    let set = new Date(sunset*1000)
    let hours, minutes
    if(set.getDate() !== rise.getDate()){
    	if(set.getMinutes() < rise.getMinutes()){
    		minutes = 60 - rise.getMinutes() + set.getMinutes()
    		hours = 23 - rise.getHours() + set.getHours()
    	} else {
    		minutes = set.getMinutes() - rise.getMinutes()
    		hours = 24 - rise.getHours() + set.getHours()
    	}
    } else{
    	if(set.getMinutes() < rise.getMinutes()){
    		minutes = 60 - rise.getMinutes() + set.getMinutes()
    		hours = set.getHours() - rise.getHours() - 1
    	} else {
    		minutes = set.getMinutes() - rise.getMinutes()
    		hours = set.getHours() + rise.getHours()
    	}
    }
    
    return hours+':'+minutes
}

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

function Today({today}) {
	let date = new Date()
	const todayIs = days[date.getDay()] + ", " + date.getDate()+"/"+date.getMonth()

	return(
		<div className='todayContainer'>
			
			<div className='left'>
				<p>Feels like</p> <p>{Math.round(today.feels_like*10)/10}°C</p>
				<hr/>
				<p>Humidity</p> <p>{today.humidity}% </p>
				<hr/>
				<p>Wind Speed</p> <p>{today.wind} mph </p>
			</div>

			<div className='mid'>
				<Icon data={today}/>
				<div>
					<h1>{Math.round(today.temp*10)/10}°C</h1>
					<h3>{todayIs}</h3>
					<p>{today.name}, {today.country}</p>
					<p>{today.description}</p>
					<p>{Math.round(today.temp_min*10)/10}°C/{Math.round(today.temp_max*10)/10}°C</p>
				</div>
			</div>

			<div className='right'>
				<p>Sunrise</p> <p>{convertTime(today.sunrise)} </p>
				<hr/>
				<p>Sunset</p> <p>{convertTime(today.sunset)} </p>
				<hr/>
				<p>Day Duration</p> <p>{timeDiff(today.sunrise, today.sunset)}</p>
			</div>
		</div>
	)
}

export default Today