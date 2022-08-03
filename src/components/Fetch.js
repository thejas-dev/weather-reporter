import React, {useState, useEffect} from 'react'
import './Style.css'
import Cast from './Cast'
import alanBtn from "@alan-ai/alan-sdk-web";

// eslint-disable-next-line
const api = {
	key : process.env.React_App_Weather_Key,
	base : process.env.React_App_Weather_Base
}



function Fetch(){

const [lat,setLat] = useState(null)
const [lon,setLon] = useState(null)



const [search,setSearch] = useState('San francisco');
const [info,setInfo] = useState({});
const [bg,setBg] = useState('');
const [city,setCity] = useState('hawaii');


const searchdata = evt =>{
	if(evt.key==="Enter"){
		fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
		.then(res => res.json())
		.then(result => {
			setSearch('');
			setInfo(result)
			
			if(result.main.temp>=10 && result.main.temp<=20){
				setBg('body-cool')
			}
			if(result.main.temp>=20 && result.main.temp<=30){
				setBg('body-cool2')
			}
			if(result.main.temp>=30 && result.main.temp<=35){
				setBg('body-hot')
			}
			if(result.main.temp>=35 && result.main.temp<=40){
				setBg('body-hot2')
			}
			if(result.main.temp>=40 && result.main.temp<=45){
				setBg('body-vhot')
			}
			if(result.main.temp>=45 && result.main.temp<=60){
				setBg('body-vhot2')
			}
			if(result.main.humidity>90 || result.weather[0].description==='heavy intensity rain' || result.weather[0].description==='light rain' || result.weather[0].description==='moderate rain'
				|| result.weather[0].description==='very heavy rain'|| result.weather[0].description==='extreme rain'|| result.weather[0].description==='freezing rain' || result.weather[0].description==='light intensity shower rain'
				 || result.weather[0].description==='shower rain' || result.weather[0].description==='ragged shower rain' || result.weather[0].description==='heavy intensity shower rain'){
				setBg('body-rain')
			}
			if(result.main.temp<=10){
				setBg('body-snow')
			}
			if( result.weather[0].description==='Mist' || result.weather[0].description==='Smoke' || result.weather[0].description==='Haze' || result.weather[0].description==='Ash'
			 || result.weather[0].description==='Dust' || result.weather[0].description==='Fog' || result.weather[0].description==='Sand' || result.weather[0].description==='Squall'
			  || result.weather[0].description==='Tornado' ){
				setBg('body-mist')
			}
			
			if(result.weather[0].description==='drizzle' || result.weather[0].description==='light intensity drizzle' || result.weather[0].description==='drizzle rain' || result.weather[0].description==='heavy intensity drizzle'
				 || result.weather[0].description==='light intensity drizzle rain' || result.weather[0].description==='shower rain and drizzle' || result.weather[0].description==='heavy shower rain and drizzle' || result.weather[0].description==='shower drizzle'){
				setBg('body-drizzle')
			}
			if(result.weather[0].description==='thunderstorm' || result.weather[0].description==='thunderstorm with light rain' || result.weather[0].description==='thunderstorm with rain' || result.weather[0].description==='thunderstorm with heavy rain' || result.weather[0].description==='light thunderstorm'
				 || result.weather[0].description==='heavy thunderstorm' || result.weather[0].description==='ragged thunderstorm' || result.weather[0].description==='thunderstorm with light drizzle'
				  || result.weather[0].description==='thunderstorm with drizzle' || result.weather[0].description==='thunderstorm with heavy drizzle'){
				setBg('body-thunder')
			}
			
		});
	}
}

// eslint-disable-next-line
useEffect(()=>{
	fetch(`${api.base}weather?q=san francisco&units=metric&APPID=${api.key}`)
		.then(res => res.json())
		.then(result => {
			setInfo(result)
			
			if(result.main.temp>=10 && result.main.temp<=20){
				setBg('body-cool')
			}
			if(result.main.temp>=20 && result.main.temp<=30){
				setBg('body-cool2')
			}
			if(result.main.temp>=30 && result.main.temp<=35){
				setBg('body-hot')
			}
			if(result.main.temp>=35 && result.main.temp<=40){
				setBg('body-hot2')
			}
			if(result.main.temp>=40 && result.main.temp<=45){
				setBg('body-vhot')
			}
			if(result.main.temp>=45 && result.main.temp<=60){
				setBg('body-vhot2')
			}
			if(result.main.humidity>90 || result.weather[0].description==='heavy intensity rain' || result.weather[0].description==='light rain' || result.weather[0].description==='moderate rain'
				|| result.weather[0].description==='very heavy rain'|| result.weather[0].description==='extreme rain'|| result.weather[0].description==='freezing rain' || result.weather[0].description==='light intensity shower rain'
				 || result.weather[0].description==='shower rain' || result.weather[0].description==='ragged shower rain' || result.weather[0].description==='heavy intensity shower rain'){
				setBg('body-rain')
			}
			if(result.main.temp<=10){
				setBg('body-snow')
			}
			if( result.weather[0].description==='Mist' || result.weather[0].description==='Smoke' || result.weather[0].description==='Haze' || result.weather[0].description==='Ash'
			 || result.weather[0].description==='Dust' || result.weather[0].description==='Fog' || result.weather[0].description==='Sand' || result.weather[0].description==='Squall'
			  || result.weather[0].description==='Tornado' ){
				setBg('body-mist')
			}
			
			if(result.weather[0].description==='drizzle' || result.weather[0].description==='light intensity drizzle' || result.weather[0].description==='drizzle rain' || result.weather[0].description==='heavy intensity drizzle'
				 || result.weather[0].description==='light intensity drizzle rain' || result.weather[0].description==='shower rain and drizzle' || result.weather[0].description==='heavy shower rain and drizzle' || result.weather[0].description==='shower drizzle'){
				setBg('body-drizzle')
			}
			if(result.weather[0].description==='thunderstorm' || result.weather[0].description==='thunderstorm with light rain' || result.weather[0].description==='thunderstorm with rain' || result.weather[0].description==='thunderstorm with heavy rain' || result.weather[0].description==='light thunderstorm'
				 || result.weather[0].description==='heavy thunderstorm' || result.weather[0].description==='ragged thunderstorm' || result.weather[0].description==='thunderstorm with light drizzle'
				  || result.weather[0].description==='thunderstorm with drizzle' || result.weather[0].description==='thunderstorm with heavy drizzle'){
				setBg('body-thunder')
			}
			
		});
		  
//d77f45cfff0a48ee66a2b549ebb87b342e956eca572e1d8b807a3e2338fdd0dc/stage
	var alanBtnInstance = alanBtn({
    key: process.env.React_App_Alan_KEY,
    onCommand: (commandData) => {
      if (commandData.command === 'showWeather') {
      	
        // Call the client code that will react to the received command
        setInfo(commandData.weatherData.data);
        
			if(commandData.weatherData.data.main.temp>=10 && commandData.weatherData.data.main.temp<=20){
				setBg('body-cool')
			}
			if(commandData.weatherData.data.main.temp>=20 && commandData.weatherData.data.main.temp<=30){
				setBg('body-cool2')
			}
			if(commandData.weatherData.data.main.temp>=30 && commandData.weatherData.data.main.temp<=35){
				setBg('body-hot')
			}
			if(commandData.weatherData.data.main.temp>=35 && commandData.weatherData.data.main.temp<=40){
				setBg('body-hot2')
			}
			if(commandData.weatherData.data.main.temp>=40 && commandData.weatherData.data.main.temp<=45){
				setBg('body-vhot')
			}
			if(commandData.weatherData.data.main.temp>=45 && commandData.weatherData.data.main.temp<=60){
				setBg('body-vhot2')
			}
			if(commandData.weatherData.data.main.humidity>90 || commandData.weatherData.data.weather[0].description==='heavy intensity rain' || commandData.weatherData.data.weather[0].description==='light rain' || commandData.weatherData.data.weather[0].description==='moderate rain'
				|| commandData.weatherData.data.weather[0].description==='very heavy rain'|| commandData.weatherData.data.weather[0].description==='extreme rain'|| commandData.weatherData.data.weather[0].description==='freezing rain' || commandData.weatherData.data.weather[0].description==='light intensity shower rain'
				 || commandData.weatherData.data.weather[0].description==='shower rain' || commandData.weatherData.data.weather[0].description==='ragged shower rain' || commandData.weatherData.data.weather[0].description==='heavy intensity shower rain'){
				setBg('body-rain')
			}
        if(commandData.weatherData.data.main.temp<=10){
				setBg('body-snow')
			}
			if( commandData.weatherData.data.weather[0].description==='Mist' || commandData.weatherData.data.weather[0].description==='Smoke' || commandData.weatherData.data.weather[0].description==='Haze' || commandData.weatherData.data.weather[0].description==='Ash'
			 || commandData.weatherData.data.weather[0].description==='Dust' || commandData.weatherData.data.weather[0].description==='Fog' || commandData.weatherData.data.weather[0].description==='Sand' || commandData.weatherData.data.weather[0].description==='Squall'
			  || commandData.weatherData.data.weather[0].description==='Tornado' ){
				setBg('body-mist')
			}
			
			if(commandData.weatherData.data.weather[0].description==='drizzle' || commandData.weatherData.data.weather[0].description==='light intensity drizzle' || commandData.weatherData.data.weather[0].description==='drizzle rain' || commandData.weatherData.data.weather[0].description==='heavy intensity drizzle'
				 || commandData.weatherData.data.weather[0].description==='light intensity drizzle rain' || commandData.weatherData.data.weather[0].description==='shower rain and drizzle' || commandData.weatherData.data.weather[0].description==='heavy shower rain and drizzle' || commandData.weatherData.data.weather[0].description==='shower drizzle'){
				setBg('body-drizzle')
			}
			if(commandData.weatherData.data.weather[0].description==='thunderstorm' || commandData.weatherData.data.weather[0].description==='thunderstorm with light rain' || commandData.weatherData.data.weather[0].description==='thunderstorm with rain' || commandData.weatherData.data.weather[0].description==='thunderstorm with heavy rain' || commandData.weatherData.data.weather[0].description==='light thunderstorm'
				 || commandData.weatherData.data.weather[0].description==='heavy thunderstorm' || commandData.weatherData.data.weather[0].description==='ragged thunderstorm' || commandData.weatherData.data.weather[0].description==='thunderstorm with light drizzle'
				  || commandData.weatherData.data.weather[0].description==='thunderstorm with drizzle' || commandData.weatherData.data.weather[0].description==='thunderstorm with heavy drizzle'){
				setBg('body-thunder')
			}
      }
    },
    onButtonState: async function(status) {
    var greetingWasSaid = false;
    if (status === 'ONLINE') {
      if (!this.greetingWasSaid) {
        await alanBtnInstance.activate();
        alanBtnInstance.playText("Welcome To our Wenbite Sir! Dont Forget to give access to location for our site! How Can I help you?");
        this.greetingWasSaid = true
      }
    }
  },
  rootEl: document.getElementById("alan-btn"),
  });
	  
},[])
useEffect(()=>{
	if(window.navigator.geolocation){
	navigator.geolocation.getCurrentPosition(ShowPosition)
}
function ShowPosition(position){
	setLat(position.coords.latitude);
	setLon(position.coords.longitude);
	
}
},[])

useEffect(()=>{
		if(lat!=null){
		setTimeout(()=>{
			fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`)
			.then(res => res.json())
			.then(result => {
			setInfo(result)	
			
			if(result.main.temp>=10 && result.main.temp<=20){
				setBg('body-cool')
			}
			if(result.main.temp>=20 && result.main.temp<=30){
				setBg('body-cool2')
			}
			if(result.main.temp>=30 && result.main.temp<=35){
				setBg('body-hot')
			}
			if(result.main.temp>=35 && result.main.temp<=40){
				setBg('body-hot2')
			}
			if(result.main.temp>=40 && result.main.temp<=45){
				setBg('body-vhot')
			}
			if(result.main.temp>=45 && result.main.temp<=60){
				setBg('body-vhot2')
			}
			if(result.main.humidity>90 || result.weather[0].description==='heavy intensity rain' || result.weather[0].description==='light rain' || result.weather[0].description==='moderate rain'
				|| result.weather[0].description==='very heavy rain'|| result.weather[0].description==='extreme rain'|| result.weather[0].description==='freezing rain' || result.weather[0].description==='light intensity shower rain'
				 || result.weather[0].description==='shower rain' || result.weather[0].description==='ragged shower rain' || result.weather[0].description==='heavy intensity shower rain'){
				setBg('body-rain')
			}
			if(result.main.temp<=10){
				setBg('body-snow')
			}
			if( result.weather[0].description==='Mist' || result.weather[0].description==='Smoke' || result.weather[0].description==='Haze' || result.weather[0].description==='Ash'
			 || result.weather[0].description==='Dust' || result.weather[0].description==='Fog' || result.weather[0].description==='Sand' || result.weather[0].description==='Squall'
			  || result.weather[0].description==='Tornado' ){
				setBg('body-mist')
			}
			
			if(result.weather[0].description==='drizzle' || result.weather[0].description==='light intensity drizzle' || result.weather[0].description==='drizzle rain' || result.weather[0].description==='heavy intensity drizzle'
				 || result.weather[0].description==='light intensity drizzle rain' || result.weather[0].description==='shower rain and drizzle' || result.weather[0].description==='heavy shower rain and drizzle' || result.weather[0].description==='shower drizzle'){
				setBg('body-drizzle')
			}
			if(result.weather[0].description==='thunderstorm' || result.weather[0].description==='thunderstorm with light rain' || result.weather[0].description==='thunderstorm with rain' || result.weather[0].description==='thunderstorm with heavy rain' || result.weather[0].description==='light thunderstorm'
				 || result.weather[0].description==='heavy thunderstorm' || result.weather[0].description==='ragged thunderstorm' || result.weather[0].description==='thunderstorm with light drizzle'
				  || result.weather[0].description==='thunderstorm with drizzle' || result.weather[0].description==='thunderstorm with heavy drizzle'){
				setBg('body-thunder')
			}
		})
			setLat(null)
		},3000)
		
		
	}

},[lat])



	


	


return(

<div className={bg}>
<div className='main' >
	<div style={{paddingTop:'60px'}} >
		
		<center><label className='text'>Enter Your City Name</label></center>
		<center><div >
			<input className='search-bar'
			onChange={e =>setSearch(e.target.value)}
			value={search}
			onKeyPress={searchdata}

			 placeholder='Your City Name' />
		</div></center>
	</div>

	<div>
		<Cast info={info} />
	</div>




</div>
</div>
	)


}


export default Fetch;


