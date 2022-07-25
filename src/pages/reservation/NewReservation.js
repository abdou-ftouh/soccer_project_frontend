import {useState} from 'react'
import { Link } from 'react-router-dom';
import './form.css'
function NewReservation({stadiums}) {

  const id=window.location.search.replace(`?id=`,'')
    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MTk0MzI3LCJpYXQiOjE2NTgxOTQwMjcsImp0aSI6IjgwNGE3OTgxNjFmNDQ5OGI4NGNiNWRiMTdjMTI4YTMyIiwidXNlcl9pZCI6MX0.Mojj7w0ojetMH1turRK1S2Utyx0bIf-Blc_rY3p0vuQ"
  const [formData, setFormData] = useState({
    user:'',
    stadium: id,
    reserved_start_date: '',
    reserved_end_date:'',
  })
  
  console.log(formData)
    const handleChange = (e) => {
      setFormData({...formData, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const url = 'https://fast-inlet-21214.herokuapp.com/reservations/'
      const opts = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(formData)
      }
      fetch(url, opts)
      .then(res => res.json())
      .then(data => console.log(data))
    
    }
   

    // const decoded = decodeURIComponent(window.location.search.replace(`?name=`,''));
    // console.log(decoded)
    return (
      

     


     <section  className='preview'>
          <div className='container'>
          <div className='row'>
          <div className='col-md-6'>
            <h3>Use your ID and Reserve the stadium</h3>
            <h4> Stadium ID : {stadiums.id}</h4>
            <h4> Name : {stadiums.name}</h4>
            <h4> Address : {stadiums.address}</h4>
            <span> Zip : {stadiums.zip}</span>
          </div>
          </div>
          </div>
        <div className='form'>
          <div className='title'>
          <h2>New Reservation</h2>
          </div>
            <form onSubmit={handleSubmit}>
              <div className='reservation'>
                <div className='input-box'>
                  <span>User ID:</span>
                  <input id="user" type="text" placeholder='user' onChange={handleChange}/>
                </div>
                <div className='input-box'>
                <span>Stadium ID: </span>
                  <input id="stadium"  value={stadiums.id} disabled type="text" />
                </div>
                <div className='input-box'>
                  <span>Start Date: </span>
                  <input id="reserved_start_date" type="datetime-local" onChange={handleChange} />
                </div>
                <div className='input-box'>
                  <span>End Date: </span>
                  <input id="reserved_end_date" type="datetime-local" onChange={handleChange}/>
                </div>
              </div>
             
                <button type="submit" > Reserve It </button>
         
                <button><Link to={'/reservations'} >All Reservations</Link></button>
            </form>
            
            </div>
            </section>
  )
}

export default NewReservation;
