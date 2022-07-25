import React from 'react'
import {useState} from 'react'

const ListReservation = ({reservations}) => {

  const [formData] = useState({
    user:'',
    stadium:'',
    reserved_start_date: '',
    reserved_end_date:'',
  })
  
  const deleteData = (id) => {
  
    const url = process.env.REACT_APP_API_URL + 'reservations/'+id+''
    const opts = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify(formData)
    }
    fetch(url, opts)
    .then(res =>
  
      res.json())
    .then(data => console.log(data))
    window.location.reload()
  
  }
            const reservation= reservations.map((reservation)=>{
               return (
                 <div key={reservation.id} className='col-md-4'>
                   <div  className='box'>
             
                  <h6>User: {reservation.user}</h6>
                   <h6>Stadium:  {reservation.stadium}</h6>
                   <h6>Start Date: {reservation.reserved_start_date}</h6> 
                   <h6>End Date: {reservation.reserved_end_date}</h6> 

                   
                  </div>
                  <button onClick={()=>deleteData(reservation.id)} >Delete</button>
                  <button>Edit</button>
                 </div>
                 
               )
             })



  return (
    <section className='stadiums'>
    <div className='container'>
      <div className='row'>
      <div className='col-md-12 col-lg-12'>
      <h3>Explore our Stadiums</h3>
      <p>Do you want to play Soccer in New York City???
This app that makes it possible for you to play Soccer in New York City,
How, When and Where you want!

The App is a community of soccer lovers from all over the world who started playing together at the end of 2016 in New York City. We are ordinary people who dreamed of being able to play Soccer wherever and whenever we wanted. Out of our frustration and the lack of friendly matches in the city, The App was born! Several years later, here we are, growing our community day by day, getting closer and closer to that long awaited dream. Today The App operates in 6 cities around the world with many more to come!

The App now has fields in all districts throughout New York City with most of our matches played in  Manhattan, Bronx,Queens,Brooklyn, Staten Island and many more! Brit Hermans, City Manager of New York City and Soccerer since a very young age, has played at a national level in the first division team VV Baronie in Holland where she is from. She is in charge of overseeing all operations in New York City, ensuring that all of our players have an amazing Soccer experience!</p>
      </div>
      </div>
      <div className='row'>

{reservation}

</div>
           </div>

         
        </section>
  );
}

export default ListReservation