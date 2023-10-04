import { useState } from 'react'
import './App.css'
import SongList from './components/SongList'
import SongsContainer from './containers/SongsContainer'

function App() {

  return (
    <>
    <div id="app">
      <SongsContainer></SongsContainer>
    </div>
    </>
  )
}

export default App




// const obj = {
  // "im:name": "Jump"
// }

//  access value in object ... obj["im:name"]

// songs.feed.entry[0]["im:name"]
// songs.feed.entry.map((song) => {

// })