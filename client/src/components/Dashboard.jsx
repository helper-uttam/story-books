import classes from "./Dashboard.module.css";
import Story from "../card/Story";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [stories, setStories] = useState([{
        title: '',
        description: '',
        likes: '',
        date: ''
    }]);
    
    const [didMount, setDidMount] = useState(false); 
    const [mount, setMount] = useState(false);

    useEffect(()=>{
        axios.get('https://story-books-service.herokuapp.com/stories/')
        .then(res => res.data)
        .then(data => {
            setStories(data)
            setDidMount(true)
        })
        .catch(err => console.log(err))
        setMount(true)
    },[stories]);

    if(!didMount)
        return <div className={classes.loading}><h1>Loading...</h1></div>
    else
    return <div className={classes.container}>
        {
        stories.sort(function (a, b) {
            return b.likes.length - a.likes.length;
        }).map((story, index) => {
            let likes = story.likes;
            let len = likes.toString().split(',');
            return <div className={classes.item} key={index}>
                <Story 
                id={story._id}
                title={story.title}
                description={story.description}
                likes={len.length}
                date={story.date}
                />
        </div>
        })
        }
    </div>
}

export default Dashboard;