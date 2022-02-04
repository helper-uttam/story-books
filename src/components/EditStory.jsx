import axios from "axios";
import { useState } from "react";
import classes from "./EditStory.module.css";

const EditStory = (props) => {
    const [story, setStory] = useState({
        title: '',
        description: ''
    })

    const updateHandler = () => {
        console.log('update');
        const id = props.id;
        axios.post('http://localhost:5000/stories/update/'+id, story)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        props.renderForm(false);
    }

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setStory({
            ...story, [name]: value
        })
        console.log(story);
    }
    
    return  <form className={classes.form}>
    <input className={classes.title} name="title" type="text" placeholder="New Title" onChange={inputHandler} />
    <textarea className={classes.description} name="description"  placeholder="New Story" onChange={inputHandler} />
    <button className={classes.btn} onClick={updateHandler}>Update</button>
</form>
}
export default EditStory;