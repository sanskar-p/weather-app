import React, {Component} from 'react';
import './App.css';
import key from './apiKey'
import WeekContainer from './components/WeekContainer'
import Today from './components/Today/Today'
import SearchBox from './components/SearchBox/SearchBox'


class App extends Component{
  constructor(){
    super()
    this.state = {
      searchfield:"",
      cityName: "",
      error: null,
      notFound: "",
      weatherInfo: null
    }
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onButtonSubmit = this.onButtonSubmit.bind(this)
  }

  onSearchChange(event){
    this.setState({
      cityName: event.target.value
    })
  }

  onButtonSubmit(event){
    event.preventDefault()
    const {cityName} = this.state

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${key.apikey}&units=metric`
    const todayUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key.apikey}&units=metric`


    Promise.all([fetch(todayUrl), fetch(forecastUrl)])
    .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()])
        }
        throw Error(res1.statusText, res2.statusText);
      })
    .then(([data1, data2]) => {
      
      const weatherInfo = {
        description: data1.weather[0].description,
        icon: data1.weather[0].icon,
        name: data1.name,
        country: data1.sys.country,
        wind_speed: data1.wind.speed,
        temp: data1.main.temp,
        feels_like: data1.main.feels_like,
        temp_min: data1.main.temp_min,
        temp_max: data1.main.temp_max,
        humidity: data1.main.humidity,
        wind: data1.wind.speed,
        sunrise: data1.sys.sunrise,
        sunset: data1.sys.sunset,

        forecastList: data2.list
      }

      this.setState({
        weatherInfo: weatherInfo,
        error:false
      })
    })
    .catch(err => {
      this.setState({
        error: true,
        notFound: "city not found"
      })
    })

    // console.log(this.state.weatherInfo.temp)
  }

  render(){
    const {weatherInfo, error, cityName} = this.state
      
      return (
        <div style={{position:'relative',minHeight:'100vh'}}>
          <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
            <h1 style={{color:'white'}} >A Weather App.</h1>
            <SearchBox 
               searchChange = {this.onSearchChange}
               submit = {this.onButtonSubmit}
               text = {cityName}
             />
          </div>

          {error === false ?
            <>
              <div>
              <Today 
                today= {weatherInfo}
              />
                <WeekContainer
                  forecastList={weatherInfo.forecastList}
                />
              </div>
            </>
            :
            <h4 style={{color:'white', textAlign:'center'}}>{this.state.notFound}</h4>
          }
          </div>
      );
  }
}

export default App;
