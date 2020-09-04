import React from 'react';

function Month() {
    const monthNames = ["Январь", "Февраль", "Март","Апрель","Май",
  "Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];


  return (
  <div className='Month'>
      {monthNames.map((el,ind) => <div key={ind} className='monthName'>{el}</div>)}
  </div>
  )
}

export default Month;
