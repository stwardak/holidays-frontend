import { HolidaysIndex } from "./HolidaysIndex"
import axios from "axios"
import { useState, useEffect } from "react"

export function Content() {
  const [holidays, setHolidays] = useState([]);

  const handleIndexHolidays = () => {
    console.log("Handling index holidays");
    axios.get("http://localhost:3000/holidays.json").then(response =>{
      console.log(response.data);
      setHolidays(response.data);
    })
  }

  useEffect(handleIndexHolidays, []);

  return (
    <main>
      <HolidaysIndex holiday = {holidays}/>
    </main>
  )
}