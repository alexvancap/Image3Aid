import React, { useEffect, useState } from 'react';
import moment from 'moment';

const CountdownTimer = () => {
  const eventTime = '2022-04-14';
  const currentTime = new Date();
  const diffTime = eventTime - currentTime;
  let duration = moment.duration(diffTime * 1000, 'milliseconds');
  const interval = 1000;
  const countdown = document.querySelector('div')
  
  setInterval(() => {
    duration = moment.duration(duration - interval, 'milliseconds');
  }, interval);;



  console.log('haaaah,', duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());


  // useEffect(() => {

  //   const interval = setInterval(() => {
      
  //     const newTime = endDate.subtract(1, 's');
  //     console.log('haaaaaaaaah', newTime);
  //     // setCurrentTime(newTime);
  //   }, 1000);
  // }, []);

  return (

    <div>
      {/* {duration} */}
    </div>
  )
};

export default CountdownTimer;