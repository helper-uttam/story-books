import axios from "axios";
import { useState } from "react";
import EditStory from "../components/EditStory";
import classes from "./story.module.css";

const Story = (props) => {

    const [showEditForm, setShowEditForm] = useState(false);
    const [ID, setId] = useState('');
    const [like, setLike] = useState(false);
    
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

    const likeHandler = (e) => {
        const ID = document.getElementById('like').value;

        //like to dislike
        if(like){   
            like && axios.post('http://localhost:5000/stories/dislike/'+ID)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
         //dislike to like   
        else{
            like && axios.post('http://localhost:5000/stories/like/'+ID)
            .then(res => console.log(res))
            .catch(err => console.log(err));
            setLike(!like);
        }
    }
    
    return  <div className={classes.story}>
        {
            !showEditForm && <>
            <div className={classes.title}><h3>{props.title}</h3></div>
                <div className={classes.description}><p>{props.description}</p></div>
                <div className={classes.btn}>
                <button id="like" type="submit" value={props.id} className={classes.like} onClick={likeHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={like ? '#fd79a8' : '#bdc3c7'} className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <br />
                    <p>{props.likes} likes</p>
                </button>
                <button className={classes.delete} name="title" value={props.id} type="submit" onClick={deleteHandler}>Delete</button>
                <button className={classes.edit} name="description" value={props.id} type="submit" onClick={editHandler}>Edit</button>
            </div>
            </>
        }
        {showEditForm && <EditStory id={ID} renderForm={setShowEditForm}/>}
    </div> 
    
}

export default Story;