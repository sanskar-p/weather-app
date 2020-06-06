import React from 'react'

import zerooned from '../icons/01d.png'
import zeroonen from '../icons/01n.png'
import zerotwod from '../icons/02d.png'
import zerotwon from '../icons/02n.png'
import zerothreed from '../icons/03d.png'
import zerothreen from '../icons/03n.png'
import zerofourd from '../icons/04d.png'
import zerofourn from '../icons/04n.png'
import zeronined from '../icons/09d.png'
import zeroninen from '../icons/09n.png'
import tend from '../icons/10d.png'
import tenn from '../icons/10n.png'
import elevend from '../icons/11d.png'
import elevenn from '../icons/11n.png'
import thirteend from '../icons/13d.png'
import thirteenn from '../icons/13n.png'
import fiftyd from '../icons/50d.png'
import fiftyn from '../icons/50n.png'


let weatherIcon = 0
function Icon({data}){
	if (data.icon === '01d') {
    weatherIcon = zerooned;
  } else if (data.icon === '02d') {
    weatherIcon = zerotwod;
  } else if (data.icon === '01n') {
    weatherIcon = zeroonen;
  }else if (data.icon === '02n') {
    weatherIcon = zerotwon;
  }else if (data.icon === '03d') {
    weatherIcon = zerothreed;
  }else if (data.icon === '03n') {
    weatherIcon = zerothreen;
  }else if (data.icon === '04d') {
    weatherIcon = zerofourd;
  }else if (data.icon === '04n') {
    weatherIcon = zerofourn;
  }else if (data.icon === '09d') {
    weatherIcon = zeronined;
  }else if (data.icon === '09n') {
    weatherIcon = zeroninen;
  }else if (data.icon === '10d') {
    weatherIcon = tend;
  }else if (data.icon === '10n') {
    weatherIcon = tenn;
  }else if (data.icon === '11d') {
    weatherIcon = elevend;
  }else if (data.icon === '11n') {
    weatherIcon = elevenn;
  }else if (data.icon === '13d') {
    weatherIcon = thirteend;
  }else if (data.icon === '13n') {
    weatherIcon = thirteenn;
  }else if (data.icon === '50d') {
    weatherIcon = fiftyd;
  }else if (data.icon === '50n') {
    weatherIcon = fiftyn;
  }
  return <img src={weatherIcon} alt="" style={{height:'5rem', width:'5rem'}}/>
}

export default Icon