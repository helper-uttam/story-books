import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";

const Welcome = () => {
    return <div className={classes.body}>
        <div>
            <h1 className={classes.welcome__heading}>Welcome to Story Books!</h1>
            <p className={classes.welcome__desc}>You've successfully logged-in, please head over to Dashboard to read your favourite stories.</p>
            <img className={classes.img} src="./assets/reading.png"/>
        </div>
        <div className={classes.second}>
                <button className={classes.btn}><Link style={{color: "white", textDecoration: "none"}} to="/home">View DashBoard</Link></button>
        </div>
    </div>
}

export default Welcome;