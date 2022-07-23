import React, {useState, useEffect} from 'react'
import './Style.css'
import Cast from './Cast'

// eslint-disable-next-line
const api = {
	key : "4fd239414e1c53315dd1cb53ed561e60",
	base : "https://api.openweathermap.org/data/2.5/"
}



function Fetch(){

const [search,setSearch] = useState('San francisco');
const [info,setInfo] = useState({});
const [bg,setBg] = useState('');

const searchdata = evt =>{
	if(evt.key==="Enter"){
		fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
		.then(res => res.json())
		.then(result => {
			
			setSearch('');
			setInfo(result)
			console.log(result)
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
			console.log(info)
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
},[])




return(

<div className={bg} >
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