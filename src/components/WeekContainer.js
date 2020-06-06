import React from 'react'
import ForecastCard from './ForecastCard/ForecastCard'
import './WeekContainer.css'

function WeekContainer({forecastList}){

		const forecastCards = forecastList.map((data, index) => 
			<ForecastCard 
				key = {index}
				data = {data}
			/>)

		return(
			<div className="allcards" >
				{forecastCards}
			</div>
			
		)
	// }
	
}

export default WeekContainer