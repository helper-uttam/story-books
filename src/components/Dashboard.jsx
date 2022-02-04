import classes from "./Dashboard.module.css";
import Story from "../card/Story";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [stories, setStories] = useState([{
        title: 'My Story',
        description: 'This is a dummy story',
        likes: 0
    }]);

    useEffect(()=>{
        axios.get('http://localhost:5000/stories/')
        .then(res => setStories(res.data))
        .catch(err => console.log(err))
    },[]);

    return <div className={classes.container}>
        {
        stories.map((story, index) => {
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