import React from 'react';
import Song from './Song';



const SongList = ({songs}) => {
    const songItems = songs.map((song) => {
        return <Song song={song} />
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