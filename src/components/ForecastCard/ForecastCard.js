import React from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Icon from '../WeatherIcon'
import './ForecastCard.css'

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

function MyVerticallyCenteredModal(props) {
	let date = new Date()
	const todayIs = days[date.getDay()] + ", " + date.getDate()+"/"+date.getMonth()

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-50w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {todayIs}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       	<Icon data={props.data}/>
        <p>{props.data.dt_txt}</p>
		<h5>{Math.round(props.data.main.temp*10)/10} mph </h5>
		<p>{props.data.weather[0].description}</p>
		<p>{Math.round(props.data.main.temp_min*10)/10}°C/{Math.round(props.data.main.temp_max*10)/10}°C</p>
				
        <p>Feels like: {Math.round(props.data.main.feels_like*10)/10}°C</p>
		<p>Humidity: {props.data.main.humidity}% </p>
		<p>Wind Speed: {props.data.wind.speed} mph </p>
      </Modal.Body>
    </Modal>
  );
}


function ForecastCard({data}){
	const [modalShow, setModalShow] = React.useState(false);
	return(
		<div>
  		<Button variant="primary" className='modalBtn' onClick={() => setModalShow(true)}>
  			<Card className='acard'>
  				<Icon data={data}/>
  				  <Card.Body style={{padding: "10px"}}>
  				    <Card.Title>{Math.round(data.main.temp*10)/10}°C</Card.Title>
  				    <Card.Text>
                <p>{data.dt_txt}</p>
  				      <p>Feels Like: {Math.round(data.main.feels_like*10)/10}°C</p>
  				    </Card.Text>
  				  </Card.Body>
  			</Card>	
    	</Button>
      <MyVerticallyCenteredModal
      	data = {data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
	)
}

export default ForecastCard