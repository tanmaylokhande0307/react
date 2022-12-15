import React,{useState} from 'react';
import Speaker from './Speaker';
import { data } from '../../speakerData';


const SpeakerList = ({ showSessions }) => {

  const [speakerData,setSpeakerData] = useState(data);

  return (
    <div className='container speakers-list'>
      <div className="row">
        {data.map(function(speaker){
          return (
            <Speaker 
              key={speaker.id} 
              speaker={speaker}
              showSessions={showSessions}
            />
          )
        })}
        
      </div>
    </div>
  
  )
}

export default SpeakerList
