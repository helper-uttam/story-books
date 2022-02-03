import classes from "./Dashboard.module.css";
import Story from "../card/Story";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [stories, setStories] = useState([{
        title: 'My Story',
        description: 'This is a dummy story'
    }]);

    const deleteHandler = (e) => {
        axios.delete('http://localhost:5000/stories/'+ e.target.value)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/stories/')
        .then(res => setStories(res.data))
        .catch(err => console.log(err))
    },[]);

    return <div className={classes.container}>
        {
        stories.map((story, index) => {
            return <div key={index}>
                <Story 
                id={story._id}
                title={story.title}
                description={story.description}
                />
        </div>
        })
        }
    </div>
}

export default Dashboard;