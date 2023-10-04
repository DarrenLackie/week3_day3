import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList';


const SongsContainer = () => {
    
    const [songs, setSongs] = useState()

    useEffect(() => {
        getSong()
    }, [])

    const getSong = () => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then((data) => {setSongs(data.feed.entry)})

    }

    return (
        <>
        <h1>UK TOP 20</h1>
            {songs ? <SongList songs={songs} /> : null}
        </>
    )

}

export default SongsContainer