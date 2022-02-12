import axios from 'axios'
import { useState } from 'react'
import classes from './Addstory.module.css'
import { useHistory } from "react-router-dom";

const AddStory = () => {
    const [story, setStory] = useState({
        title: '',
        description: '',
        likes: '0',
        date: ''
    })
    const history = useHistory();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setStory({
            ...story, [name]: value
        })
    }
    const submitHandler = (e) => {
        var newDate = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = months[newDate.getMonth()];
        const dateOfStory = newDate.getDate() + ',' + month + ' ' + newDate.getFullYear();
        story.date = dateOfStory.toString();
        console.log(story);
        
        e.preventDefault();
        axios.post('https://story-books-service.herokuapp.com/stories/add/', story)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        history.push('/home');
    }
    return <div className={classes.container}>
        <h1 className={classes.title}>Here is the place to add your story!</h1>
        <div className={classes.input__container}>
            <input name='title' placeholder='Your Story Title' onChange={inputHandler} /> 
            <textarea name='description' placeholder='Type your story here...' onChange={inputHandler} />  
            <button className={classes.btn} type="submit" onClick={submitHandler}>Add</button>
        </div> 
    </div>
}

export default AddStory;