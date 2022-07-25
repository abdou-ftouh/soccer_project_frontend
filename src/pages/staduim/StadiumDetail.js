import { React,Fragment } from 'react'
import Navs from '../../components/Navs/Navs'
import {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";

const StadiumDetail = () => {


let params = useParams()
const [detail, setDetail] = useState([])

useEffect(() => {
  const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDIzMDI0LCJpYXQiOjE2NTgwMjI3MjQsImp0aSI6IjBlMzJlMzZhNTQ5ODRmZWViYmNmMjU1MmQ3OGM4NmEzIiwidXNlcl9pZCI6MX0.q7z_f08BNTNJxkO_M1tToULz0Hx_JjHhvt5U1ic3uuk"
  const url = `https://fast-inlet-21214.herokuapp.com/stadiums/${params.id}`
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
              setDetail(data)
            })
        }, [params.id])  ;


return (
<Fragment>
       <Navs />
  <section className='stadiums'>
   
  <div className='container'>
    <div className='row'>

 
    <div className='col-md-12 col-lg-12'>
    <h3>Explore our Stadiums</h3>
    <p>Do you want to play Soccer in New York City?
This app that makes it possible for you to play Soccer in New York City,
How, When and Where you want!

The App is a community of soccer lovers from all over the world who started playing together at the end of 2016 in New York City. We are ordinary people who dreamed of being able to play Soccer wherever and whenever we wanted. Out of our frustration and the lack of friendly matches in the city, The App was born! Several years later, here we are, growing our community day by day, getting closer and closer to that long awaited dream. Today The App operates in 6 cities around the world with many more to come!

The App now has fields in all districts throughout New York City with most of our matches played in  Manhattan, Bronx,Queens,Brooklyn, Staten Island and many more! Brit Hermans, City Manager of New York City and Soccerer since a very young age, has played at a national level in the first division team VV Baronie in Holland where she is from. She is in charge of overseeing all operations in New York City, ensuring that all of our players have an amazing Soccer experience!</p>
    </div>
    </div>
  
    <div className='row' id='details'>
    <div className='col-md-6'>
      
    <h3>{detail.name}</h3>
      <img src={detail.photo} alt={detail.name} />
      <p><span>Description: </span>{detail.description}</p>

  </div>
  <div className='col-md-6'>
    <div className='details'>
    <button><Link to={`/newreservation?id=${detail.id}`} >Reserve Now</Link></button>
    
   
    <p>
Force Soccer Studios
Boerum Hill, Brooklyn

We play twice a week on the new, private, indoor field at Force Soccer Studios. These are fast-paced 5v5 games, with 3 teams rotating every 10 minutes for an hour and a half. Come down and play with us after work for some fun, social and competitive soccer!</p>

<h4>Address: {detail.address}</h4>
<span>Zip: {detail.zip}</span>
    </div>
    
  </div>
</div>
         </div>
      </section>
   
      </Fragment>
);
}

export default StadiumDetail