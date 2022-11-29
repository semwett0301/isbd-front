import React, {useLayoutEffect, useState} from 'react';
import classes from './App.module.css'
import {request} from "./api/request";
import CustomHeader from "./components/CustomHeader/CustomHeader";

function App() {
    const [worldId, setWorldId] = useState(0)
    const [world, setWorld] = useState({})

    useLayoutEffect(() => {
        const getWorldId = async () => {
            console.log('A')

            if (window.localStorage.getItem('worldId') == null) {
                const id = await request.getWorldId().then(r => r.data)
                console.log(id);
                window.localStorage.setItem('worldId', id)
                return id
            }

            return window.localStorage.getItem('worldId')
        }

        const getWorld = async (id) => {
            setWorld(request.)
        }

        getWorldId().then(r => setWorldId(r)).catch(e => console.log(e))
    }, [])

    return (
        <div className={classes.App}>
            <CustomHeader positive={positive} negative={negative}/>
        </div>
    );
}

export default App;
