import React from 'react'

class Navi extends React.Component{



render(){
	return(
	<div className='box' >
		<div className='ui three buttons' style={{color:'red' ,backgroundColor:'red'}} >
            <button className='ui button'  ><a href='/'>Weather</a></button>
            <button className='ui button'><a href='/about'>About</a></button>
            <button className='ui button'><a href='/faq'>How It Works</a></button>
        </div>
	</div>
)}
}

export default Navi;