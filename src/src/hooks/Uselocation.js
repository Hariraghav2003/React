import React from 'react'
import { useLocation} from 'react-router-dom'

function Uselocation() {

        const location = useLocation();
      
        return (
          <div>
            The location object returned by useLocation contains the following properties:<br></br>
            *pathname: A string representing the current URL path (e.g., /about).<br></br>
            *search: A string representing the query string of the URL (e.g., ?id=123).<br></br>
            *hash: A string representing the URL hash fragment (e.g., #section1).<br></br>
            *state: An object containing data passed through routing when navigating with the Link or navigate methods.<br></br>
            <h2>Current Location</h2>
            <p>Pathname: {location.pathname}</p>
            <span style={{marginBottom:'20px'}}>  <a href='https://www.flipkart.com/' target='blank' style={{color:'white', textDecoration:'none',backgroundColor:'black',padding:'10px',marginLeft:'10px',borderRadius:'5px'}}>Hari</a> </span>
            <p>JKBDWUHISODGUIODPO9  hidubchj dm,cn bkjesiohhdgeuogdo8wghdo</p>  
          </div>
        );
};
export default Uselocation
