import axios from "axios";
import { useState } from "react";
import classes from "./EditStory.module.css";

const EditStory = (props) => {
    const [story, setStory] = useState({
        title: '',
        description: '',
        likes: '0',
        date: ''
    })

    const updateHandler = () => {
        console.log('update');
        const id = props.id;
        var newDate = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = months[newDate.getMonth()];
        const dateOfStory = newDate.getDate() + ',' + month + ' ' + newDate.getFullYear();
        story.date = dateOfStory.toString();
        console.log(story);

        axios.post('https://story-books-service.herokuapp.com/stories/update/'+id, story)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        props.renderForm(false);
    }

    const backHandler = () => {
        props.renderForm(false)
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
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
    <button className={classes.update} onClick={updateHandler}>Update</button>
    <button className={classes.back} onClick={backHandler}>Back</button>
    </div>
</form>
}
export default EditStory;