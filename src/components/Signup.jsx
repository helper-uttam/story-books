import classes from "./Signup.module.css";
import { useState } from "react";
import axios from "axios";

const Signup = () => {

    const [users, setUser] = useState({
        email: '',
        password: ''
    });
    
    const changeHandler = (e) => {
       const { name, value } = e.target;
        setUser({
            ...users, [name]: value
        })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/add', users)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
     
        setUser({
            email: '',
            password: ''
        })
        window.location="/home";
    };
    console.log(localStorage.getItem('auth'));
    return <div className={classes.container}>
        <div className={classes.title}>
            <h3>SignUp</h3>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
            <input className={classes.input} name="email" type="email" onChange={changeHandler} placeholder="storyteller@gmail.com" defaultValue={users.username}></input><br/>
            <input className={classes.input} name="password" type="password" onChange={changeHandler} placeholder="Password" defaultValue={users.password} autoComplete="true"></input><br/>
            <button type="submit" className={classes.btn}>SignUp</button>
        </form>
        <footer className={classes.footer}>
            <div className={classes.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-stack-overflow" viewBox="0 0 16 16">
                <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z"/>
                <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z"/>
            </svg>
            </div>
            <div>Made with love 💙 by Uttam</div>
        </footer>
    </div>
}

export default Signup;