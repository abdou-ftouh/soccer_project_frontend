import React from 'react';
import {useState, useEffect} from 'react'
import './list.css'
import { Link } from "react-router-dom";
function ListStadiums() {


 const [stadiums, setStadiums] = useState([])

 useEffect(() => {
   const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDIzMDI0LCJpYXQiOjE2NTgwMjI3MjQsImp0aSI6IjBlMzJlMzZhNTQ5ODRmZWViYmNmMjU1MmQ3OGM4NmEzIiwidXNlcl9pZCI6MX0.q7z_f08BNTNJxkO_M1tToULz0Hx_JjHhvt5U1ic3uuk"
   const url = 'https://fast-inlet-21214.herokuapp.com/stadiums/'
   const opts = {
               method: 'GET',
               headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${accessToken}`,
               }
         
             }
             fetch(url,opts)
             .then(res => res.json())
             .then(data => {
               console.log(data)
               setStadiums(data)
             })
         }, [])  ;

         const staduims= stadiums.map((stadium)=>{
            return (
              <div key={stadium.id}  className='col-md-4'>
                <div  className='box'>
               
                <Link to={`/stadiums/${stadium.id}`}>
                <img src={stadium.photo} alt={stadium.name}/>
                     
                    </Link>
                  <h3>{stadium.name}</h3>
            
               </div>
               <button><Link to={`/stadiums/${stadium.id}`}>Read More</Link></button>
              </div>
              
            )
          })

  return (

      <div className='row'>

        {staduims}
        </div>



  );
}

export default ListStadiums;