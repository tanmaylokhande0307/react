import { useState } from "react";
import PlayNumbers from "./PlayNumbers";
import Stars from "./Stars";
// STAR MATCH - Starting Template

const StarMatch = () => {

    const [stars,setStars] = useState(utils.random(1,9));
    const [availableNum,setAvailableNum] = useState(utils.range(1,9));
    const [candidateNum,setCandidateNum] = useState([]);

    const candidateAreWrong = utils.sum(candidateNum) > stars;

    const numberStatus = (number) => {
      if(!availableNum.includes(number)){
        return 'used'
      }
      if(candidateNum.includes(number)){
        return candidateAreWrong ? 'wrong' : 'candidate'
      }
      return 'available';
    }

    const onNumberClick = (number,currentStatus) => {
      if(currentStatus(number) === 'used')
        return;
      
      const newCandidateNums = candidateNum.concat(number);
      if(utils.sum(newCandidateNums) != stars){
        setCandidateNum(newCandidateNums);
      }
      else{
        const newAvailableNums = 
      }
      
    }
    
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            <Stars star={stars} utils={utils}/>
          </div>
          <div className="right">
          {utils.range(1,9).map(number =>  
            <PlayNumbers key={number} onClick={onNumberClick} status={numberStatus} number={number} utils={utils} />
          )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };
  
  // Color Theme
  
  // Math science
  const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  
    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
  
    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[utils.random(0, sums.length - 1)];
    },
  };
  
export default StarMatch;  