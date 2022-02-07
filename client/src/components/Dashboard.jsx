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
    // const [user, setUser] = useState('');
    const [liked, setLiked] = useState(false);
    const [didMount, setDidMount] = useState(false); 

    useEffect(()=>{
        axios.get('http://localhost:5000/stories/')
        .then(res => res.data)
        .then(data => setStories(data))
        .catch(err => console.log(err))
        setDidMount(true);
   return () => setDidMount(false);
    },[stories]);

    // const checkLike = (ID) => {
    //     axios.get(`http://localhost:5000/stories/likes/${ID}`)
    //     .then(res => {
    //         let data = res.data;
    //         if(data.includes(user)){
    //             return setLiked(true);
    //         }
    //     })
    // }
    return <div className={classes.container}>
        {
        stories.sort(function (a, b) {
            // console.log(a.likes + " " + b.likes);
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
                liked={liked}
                date={story.date}
                />
        </div>
        })
        }
    </div>
}

export default Dashboard;