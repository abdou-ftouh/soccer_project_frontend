import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ListLocations = () => {
  let params = useParams()
  const [names] = useState([])

  const [locations, setLocations] = useState([])
 


  useEffect(() => {
    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDIzMDI0LCJpYXQiOjE2NTgwMjI3MjQsImp0aSI6IjBlMzJlMzZhNTQ5ODRmZWViYmNmMjU1MmQ3OGM4NmEzIiwidXNlcl9pZCI6MX0.q7z_f08BNTNJxkO_M1tToULz0Hx_JjHhvt5U1ic3uuk"
    const url = process.env.REACT_APP_API_URL + `locations/${params.id}`
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }

    }
    fetch(url, opts)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setLocations(data.stadiums)
        console.log(data.stadiums)

      })


  }, [params.id]);



  const stad = locations.map((stad) => {
    return (

      <div  key={stad.id}  className='col-md-4'>
         <div  className='box'>
        
         <Link to={`/stadiums/${stad.id}`}>
        <img src={stad.photo} alt={stad.name} />
        </Link>
        <h6>{stad.address}</h6>
       
      </div>
      </div>
    )

  })
  console.log(locations)
  console.log(names)

  return (
    <section className='stadiums'>
      <div className='container'>
 
        <div className='row'>
          {params.id === '2' ? <h3>Explore our Brooklyn Stadiums</h3> : null}
          {params.id === '3' ? <h3>Explore our Bronx Stadiums</h3> : null}
          {params.id === '4' ? <h3>Explore our Queens Stadiums</h3> : null}
          {params.id === '1' ? <h3>Explore our Manhattan Stadiums</h3> : null}
          {params.id === '5' ? <h3>Explore our Staten island Stadiums</h3> : null}

          <p>Welcome to ! With a range of different stadiumes and piers you can come and check out one of the five boroughs in NYC. This is one of the best places to come play if you love soccer.
            If you want to play next to the water or even smell the salty air while playing this is the place to be!
            It is all about getting to know the sport while making new friends, if you enjoy this stadium in this location, feel free to hope around to our other staidums in NYC. All offer the same free space and comfortable feel, we hope to see you again!
          </p>
      
         {stad}
      
          </div>
        </div>



    </section>
  );
}

export default ListLocations