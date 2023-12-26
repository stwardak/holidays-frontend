/* eslint-disable react/prop-types */
export function HolidaysIndex (props) {

  return(
    <div>
      <h1>Happy Holidays!</h1>
      {props.holiday.map((holiday) => (
         <div key={holiday.name}>
           <h2>Holiday: {holiday.name}</h2>
           <img src={holiday.image} />
           <p>Description: {holiday.description}</p>
         </div>
     ))}
    </div>
  );
}