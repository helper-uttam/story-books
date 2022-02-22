import axios from "axios";
import { useEffect, useState } from "react";
import EditStory from "../components/EditStory";
import classes from "./story.module.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FcSpeaker } from 'react-icons/fc';

const Story = (props) => {

    const [showEditForm, setShowEditForm] = useState(false);
    const [ID, setId] = useState('');
    const [like, setLike] = useState(false);
    const [user, setUser] = useState({
        email: ''
    });
    const [del, setDel] = useState(false);
    const [wpnumber, setnumber] = useState('');

    useEffect(()=>{
        setUser({
            email: localStorage.getItem('email')
        });

    },[like, del])
    
    const deleteHandler = (e) => {
        const id = e.target.value;
        axios.delete('https://story-books-service.herokuapp.com/stories/'+ id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        setDel(true);
    }
    const wpInputHandler = (e) => {
        var number = e.target.value;
        if(number.length === 12){
            setnumber(number);
            console.log(wpnumber);
            return;
        }
    }
    const editHandler = (e) => {
        setId(e.target.value);
        setShowEditForm(true);
    }

    const whatsaapHandler = (e) => {
        if(e.target.value && wpnumber)
        axios.post('https://story-books-service.herokuapp.com/'+wpnumber, {"story": e.target.value})
            .then(res => {
                console.log(res)
                document.getElementById('number').value='';
            })
            .catch(err => console.log(err));
    }

    const likeHandler = (e) => {
        const ID = e.target.id;

        //like to dislike
        if(like){   
            axios.post('https://story-books-service.herokuapp.com/stories/dislike/'+ID, user)
            .then(res => console.log(res))
            .catch(err => console.log(err));
            setLike(!like);
        }
         //dislike to like   
        else{
            console.log('like');
            let email = localStorage.getItem('email');
            setUser(email);
            axios.post('https://story-books-service.herokuapp.com/stories/like/'+ID, user)
            .then(res => console.log(res))
            .catch(err => console.log(err));
            setLike(!like);
        }
    }
    
    const speakContent = (e) => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = props.description;
        window.speechSynthesis.speak(msg);
    }

    return  <div className={classes.story}>
        {
            !showEditForm && <>
            <div className={classes.title}>
                <h3 className={classes.heading}>{props.title}</h3>
                <button style={{ border: "none", borderRadius:"20px", backgroundColor:"#dcdde1"}} onClick={speakContent}><FcSpeaker /></button>
            </div>
                <div className={classes.description}><p>{props.description}</p></div>
                <div className={classes.btn}>
                <button id={props.id} type="submit" value={props.id} className={classes.like} onClick={likeHandler}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={like ? '#fd79a8' : '#bdc3c7'} className="bi bi-star-fill"  id={props.id} viewBox="0 0 16 16">
                    <path  id={props.id} d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <br />
                    <p>{props.likes} likes</p>
                </button>
                <button className={classes.delete} name="title" value={props.id} type="submit" onClick={deleteHandler}>Delete</button>
                <button className={classes.edit} name="description" value={props.id} type="submit" onClick={editHandler}>Edit</button>
                <div className={classes.whatsaap}>
                <input type="text" name="whatsaap number"  placeholder="eg: 916207000077" id="number" defaultValue={wpnumber} onChange={wpInputHandler}/>
                <button className={classes.edit} value={props.description} onClick={whatsaapHandler} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                </button>
                </div>
                <p style={{color:"gray"}}> Published on {props.date}</p>
            </div>
            </>
        }
        {showEditForm && <EditStory id={ID} renderForm={setShowEditForm}/>}
    </div> 
    
}

export default Story;
