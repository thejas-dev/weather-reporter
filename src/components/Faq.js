import React from 'react'
import Tns from '../images/tns.png'
import './Style.css'



const About = ()=>{
	const stylexs={
		fontSize:'15px',color:'white',
		textShadow:'2px 2px 4px #000000' ,
		
		padding:'5px' ,
		borderRadius:'20px',
		marginTop:'20px'

	}
	const imgstyle={
		border:'2px soid white',
		height:'150px',
		width:'150px',
		filter:'drop-shadow(2px 3px 5px white)'
		
	}
	const stylehead={
		marginTop:'10px',
		fontSize:'20px',
		fontWeight:"200",
		textShadow:'2px 2px 4px #000000',
		padding:'5px'
	}
	

	return(
		<div className='body-faq' >
			<div className="ui riased very padded text container segment"  style={{padding:'17px', borderRadius:'20px' ,backgroundColor:'rgb(0,0,0,0.6)' ,border:'5px solid red',height:'98vh'   }} >
				 <center>
                	<h1 className='ui header' style={{padding:'10px', fontSize:'30px' , color:'white'}} >How This Website Works?</h1>
                </center>
               <center> <div className="ui small image" style={imgstyle} >
                	<a href={Tns}><img src={Tns} style={imgstyle} alt="not found"/></a>
                </div></center>
                <p style={stylehead}>Why Location Access?</p>
                <p style={stylexs}>
                	<b>This Website Uses Your Location Coordinates To Calculate Your Speed And Find The Current Weather of Your Location. </b>
                </p>
                <p style={stylehead}>Why Microphone Access?</p>
                 <p style={stylexs}>
                	<b>This Website Uses Your Microphone To Record Your Voice And Process Your Request For The Weather Informations.</b>
                </p>
                 <p style={stylehead}>Other Informations:-</p>
                <p style={stylexs}><b>

                 	This Website Runs On Netlify Domain And For Fetching Weather Reports It Uses Weather API Which Is Transfering Data From Another Application To This Web Application.
                </b></p>
			</div>

		</div>

		)



}


export default About;