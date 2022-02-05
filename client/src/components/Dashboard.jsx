import classes from "./Dashboard.module.css";
import Story from "../card/Story";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [stories, setStories] = useState([{
        title: '',
        description: '',
        likes: 0
    }]);

    useEffect(()=>{
        axios.get('http://localhost:5000/stories/')
        .then(res => setStories(res.data))
        .catch(err => console.log(err))

    },[]);

    return <div className={classes.container}>
        {
        stories.sort(function (a, b) {
            return b.likes - a.likes;
        }).map((story, index) => {
            return <div className={classes.item} key={index}>
                <Story 
                id={story._id}
                title={story.title}
                description={story.description}
                likes={story.likes}
                />
        </div>
        })
        }
    </div>
}

export default Dashboard;