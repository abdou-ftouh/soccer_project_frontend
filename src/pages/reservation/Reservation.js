import React from 'react'
import Navs from '../../components/Navs/Navs'
import ListReservation from './ListReservation'
import {useState, useEffect} from 'react'



const Reservation = () => {
  const [reservations, setReservations] = useState([])
   
  useEffect(() => {
    // const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDIzMDI0LCJpYXQiOjE2NTgwMjI3MjQsImp0aSI6IjBlMzJlMzZhNTQ5ODRmZWViYmNmMjU1MmQ3OGM4NmEzIiwidXNlcl9pZCI6MX0.q7z_f08BNTNJxkO_M1tToULz0Hx_JjHhvt5U1ic3uuk"
    const url = process.env.REACT_APP_API_URL + 'reservations/'
    const opts = {
                method: 'GET',
             
                headers: {
                  'Content-Type': 'application/json',
                  // 'Authorization': `Bearer ${accessToken}`,
                }
          
              }
              fetch(url,opts)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                setReservations(data)
              })
          }, [])  ;
          console.log(reservations)

  return (
    <div>
        <Navs />
        <ListReservation reservations={reservations}/>
   
    </div>
  )
}

export default Reservation