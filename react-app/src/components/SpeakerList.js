import React, { useEffect, useState } from "react";
import Speaker from "./Speaker";
import { data } from "../../speakerData";

const SpeakerList = ({ showSessions }) => {
  const [speakerData, setSpeakerData] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));
  

  useEffect(() => {
    async function delayFunc(){
      await delay(2000);
      setSpeakerData(data);
    }

    delayFunc();
  }) 

  function onfavoriteToggle(id){
    const speakersRecPrevios = speakerData.find(function (rec) {
      return rec.id === id;
    });


    const speakerRecUpdate = {
      ...speakersRecPrevios,
      favorite: !speakersRecPrevios.favorite,
    };
    

    const speakersDataNew = speakerData.map(function (rec) {
      return rec.id === id ? speakerRecUpdate : rec;
    });

    setSpeakerData(speakersDataNew);
  };

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onfavoriteToggle={() => {
                onfavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakerList;
