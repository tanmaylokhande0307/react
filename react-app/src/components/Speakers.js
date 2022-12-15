import { useState } from "react";
import SpeakerList from "./SpeakerList";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers({ theme,setTheme }){

    
    const [showSessions, setSessions] = useState(true);
    

    return (
        <>
            <SpeakersToolbar 
                theme={theme} 
                setTheme={setTheme} 
                showSessions={showSessions}
                setSessions={setSessions}
            />
            <SpeakerList 
                showSessions={showSessions}
            />

        </>
    )

}

export default Speakers;    