import React from 'react';
import Song from './Song';



const SongList = ({songs, index}) => {
    const songItems = songs.map((song) => {
        return <Song song={song} key={index}/>
    })
    return (
        <>
        <ol>
            {songItems}
        </ol>
        </>
    )
}

export default SongList