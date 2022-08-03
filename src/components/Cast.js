import React,{useState} from 'react'
import './Style.css'
import Wind from '../images/wind.jpg'
import Windd from '../images/windd.jpg'
import Humidity from '../images/humidity.jpg'
import Speed from '../images/speedometer.webp'


function Cast(props){
	const [gospeed,setGospeed]=useState()
	const dateBuilder = (d) =>{
		let months = [
			"January","February","March","April","May","June","July","August","September","October","November",
			"December"];
		let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`

	}
	if(navigator.geolocation){
		navigator.geolocation.watchPosition(ShowPosition)
	}else{
		console.log('Browser Not Supported')
	}
	function ShowPosition(position){
	
		let y= Math.round(position.coords.speed);
		if(y===null){
			setGospeed("Browser Not Supported")
		}else{
			setGospeed(y + "km/h" )
		}

   }

if(typeof props.info.name != "undefined"){
	let speed = props.info.wind.speed * 3.6
	speed = speed.toFixed(1)
	let temp = props.info.main.temp
	temp = temp.toFixed()
	return(
<div className='cast-box' >
		<div className='location-box'  >
			<div className='location'>
				{props.info.name} , {props.info.sys.country}
			</div>
			<div className='date' >
				{dateBuilder(new Date())}
			</div>
		</div>
		<div className='weather-box'>
			<div className='degree'>
				{temp}°C
			</div>
			<p className='feels'>Feels Like {props.info.main.feels_like}</p>
			<div className='cloud'>
				<p className='clouds'>{props.info.weather[0].description}</p>
			</div>
		</div>
		<div className='more-info'>
			<div className='wind'>
				<figure>
				<img src={Wind} alt='not found' style={{height:'50px',borderRadius:'50px'}} />
				<figcaption>Windspeed</figcaption>
				<figcaption>{speed}Km/h </figcaption>
				</figure>
			</div>
			<div className='wind'>
				<figure>
				<img src={Windd} alt='not found' style={{height:'50px',borderRadius:'50px'}} />
				<figcaption>Wind Direction</figcaption>
				<figcaption>{props.info.wind.deg} deg</figcaption>
				</figure>
			</div>
			<div className='humidity'>
				<figure>
				<img src={Speed}  alt='not found' style={{height:'50px',borderRadius:'60px'}} />
				<figcaption>Speed</figcaption>
				<figcaption>{gospeed}</figcaption>
				</figure>
			</div>
			<div className='humidity'>
				<figure>
				<img src={Humidity}  alt='not found' style={{height:'50px',borderRadius:'60px'}} />
				<figcaption>Humidity</figcaption>
				<figcaption>{props.info.main.humidity}%</figcaption>
				</figure>
			</div>

		</div>

</div>
		)
}else{
	return(

		<div className='cast-box' >
		
		<div className='more-info'>
			<div className='wind'>
				<figure>
				<img src={Wind} alt='not found' style={{height:'50px',borderRadius:'50px'}} />
				<figcaption>Windspeed</figcaption>
				<figcaption>~</figcaption>
				</figure>
			</div>
			<div className='wind'>
				<figure>
				<img src={Windd} alt='not found' style={{height:'50px',borderRadius:'50px'}} />
				<figcaption>Wind Direction</figcaption>
				<figcaption>~</figcaption>
				</figure>
			</div>
			<div className='humidity'>
				<figure>
				<img src={Speed}  alt='not found' style={{height:'50px',borderRadius:'60px'}} />
				<figcaption>Speed</figcaption>
				<figcaption>{gospeed}</figcaption>
				</figure>
			</div>
			<div className='humidity'>
				<figure>
				<img src={Humidity} alt='not found' style={{height:'50px',borderRadius:'60px'}} />
				<figcaption>Humidity</figcaption>
				<figcaption>~</figcaption>
				</figure>
			</div>

		</div>

</div>


	)
}




}

export default Cast;