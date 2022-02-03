import axios from "axios";
import { useState } from "react";
import EditStory from "../components/EditStory";
import classes from "./story.module.css";

const Story = (props) => {

    const [showEditForm, setShowEditForm] = useState(false);
    const [id, setId] = useState('');
    const deleteHandler = (e) => {
        const id = e.target.value;
        axios.delete('http://localhost:5000/stories/'+ id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
   
    const editHandler = (e) => {
        setId(e.target.value);
        setShowEditForm(true);
    }

    return <div className={classes.story}>
        <div className={classes.title}><h3>{props.title}</h3></div>
        <div className={classes.description}><p>{props.description}</p></div>
        <button name="title" value={props.id} type="submit" onClick={deleteHandler}>Delete</button>
        <button name="description" value={props.id} type="submit" onClick={editHandler}>Edit</button>
        {showEditForm && <EditStory id={id} renderForm={setShowEditForm}/>}
    </div> 
    
}

export default Story;