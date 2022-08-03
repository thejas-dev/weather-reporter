import React, {useState, useEffect} from 'react'
import './Style.css'
import Cast from './Cast'
import alanBtn from "@alan-ai/alan-sdk-web";

// eslint-disable-next-line
const api = {
	key : "4fd239414e1c53315dd1cb53ed561e60",
	base : "https://api.openweathermap.org/data/2.5/"
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
			if(result.main.temp>=0 && result.main.temp<=10){
				setBg('body-snow')
			}
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
			if( result.weather[0].description==='mist'){
				setBg('body-mist')
			}
			if(result.main.humidity>90 || result.weather[0].description==='heavy intensity rain' ){
				setBg('body-rain')
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
			if(result.main.temp>=0 && result.main.temp<=10){
				setBg('body-snow')
			}
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
			if( result.weather[0].description==='mist'){
				setBg('body-mist')
			}
			if(result.main.humidity>90 || result.weather[0].description==='heavy intensity rain' ){
				setBg('body-rain')
			}
			
		});
		  

	var alanBtnInstance = alanBtn({
    key: "d77f45cfff0a48ee66a2b549ebb87b342e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: (commandData) => {
      if (commandData.command === 'showWeather') {
      	console.log(commandData);
        // Call the client code that will react to the received command
        setInfo(commandData);
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

if(window.navigator.geolocation){
	navigator.geolocation.getCurrentPosition(ShowPosition)
}
function ShowPosition(position){
	setLat(position.coords.latitude);
	setLon(position.coords.longitude);
	
}
useEffect(()=>{
		if(lat!=null){
		fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`)
		.then(res => res.json())
		.then(result => {
			setInfo(result)	
		})
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