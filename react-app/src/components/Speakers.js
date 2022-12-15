import React, { useState } from 'react'
import { data } from "../../speakerData";
import Header from './Header';
import SpeakerList from './SpeakerList';
import SpeakersToolbar from './SpeakersToolbar';


const Speakers = () => {

  const [theme,setTheme] = useState('light');

  return (
    <div className={
      `container-fluid ${theme}`
    }>
        <Header theme={theme}/>
        <SpeakersToolbar theme={theme} setTheme={setTheme} />
        <SpeakerList data={data}/>
    </div>
  )
}

export default Speakers
