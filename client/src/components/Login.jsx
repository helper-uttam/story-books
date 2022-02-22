import classes from "./Login.module.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Sawo from 'sawo';


const Login = () => {
    const [width, setWidth] = useState();
    const history = useHistory();
    
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'email',
            // Add the API key copied from 5th step
            apiKey: process.env.REACT_APP_SAWO_API_KEY,
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                console.log(payload)
                // you can use this payload for your purpose
                
                localStorage.setItem('email','users.email');
                history.push('/home');
                window.location.reload();
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
        setWidth(window.innerWidth);
    }, [])
  
    

    return <div className={classes.container}>
            <div className={classes.title}>
                <img className={classes.img} src="https://see.fontimg.com/api/renderfont4/3z8d8/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U3RvcnkgQm9va3M/rooster-personal-use.png"></img>
                <p>We bring stories collections for story lovers...</p>
                <div className={classes.wpDescription}>
                    <h3>It feels great to have you here!</h3>
                    <h5>Join your WhatsApp service to enjoy stories in offline mode.</h5>
                    <h6>Just send <span className={classes.span}>join school-bit</span> to <span className={classes.span}>+14155238886</span> on WhatsApp</h6>
                </div>
            </div>
            <div className={classes.sawoContainer}>
                <div className={classes.sawo} id="sawo-container" style={width > 600 ? {height:"400px", width:"500px"}: {marginTop: "10px", height:"250px", width:"270px"}}></div>
            </div>
    </div> 
}
export default Login;

  