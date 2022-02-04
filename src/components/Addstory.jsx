import axios from 'axios'
import { useState } from 'react'
import classes from './Addstory.module.css'

const AddStory = () => {
    const [story, setStory] = useState({
        title: '',
        description: ''
    })
    
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setStory({
            ...story, [name]: value
        })
        console.log(story);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/stories/add/', story)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return <div className={classes.container}>
        <h1>Here is the place to add your story!</h1>
        <div className={classes.input__container}>
            <input name='title' placeholder='Your Story Title' onChange={inputHandler} /> 
            <textarea name='description' placeholder='Type your story here...' onChange={inputHandler} />  
            <button className={classes.btn} type="submit" onClick={submitHandler}>Add</button>
        </div> 
    </div>
}

export default AddStory;