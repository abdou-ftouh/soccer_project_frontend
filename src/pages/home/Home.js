import React, { Fragment } from 'react'
import Navs from '../../components/Navs/Navs'
import Header from '../../components/Home/header'
import a1 from '../../components/assets/a1.jpeg'
import a2 from '../../components/assets/a2.jpeg'
import a3 from '../../components/assets/a3.jpeg'
import a4 from '../../components/assets/a4.jpeg'
import combine from '../../components/assets/combine_images.jpg'
import './home.css'
import ListStadiums from '../staduim/ListStadiums'
import { Link } from 'react-router-dom'
const Home = () => {



  return (
     <Fragment>
        <Navs />
        <Header />
        <section className='moods'>
        <div className="container">
        <div className="row">
          <div className="col-md-4">
          <h2>Men’s Soccer</h2>
          </div>
          <div className="col-md-4">
          <h2>Women’s Soccer</h2>
          </div>
          <div className="col-md-4">
          <h2>Mixed Soccer</h2>
          </div>
        </div>
      </div>
        </section>
      <section className='profitable'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="row">
                <div className="col">
                  <img src={a1} title='a1' alt='a1' />
                </div>
                <div className="col">
                  <img src={a2} title='a2' alt='a2' />
                </div>
                <div className="w-100"></div>
                <div className="col"><img src={a3} title='a3'  alt='a3'/></div>
                <div className="col"><img src={a4} title='a4'  alt='a4'/></div>
              </div>
            </div>

            <div className="col-md-6">
              <h3>Where NYC's Creative Community Plays Soccer</h3>
              <p>Maybe you’re new to NYC and looking to make friends. Maybe you want to play competitive soccer again or perhaps you’re here to try something new.

Whatever the reason, come join this diverse sample of New York’s greatest people.

Founded in 2010, NYC Footy is a collection of thousands of creative humans from all walks of life, coming together on and off the pitch to enjoy the beautiful game. .</p>
              <button><Link to={'/read'}>Add my field</Link></button>
            </div>
          </div>
        </div>
      </section>
      <section className='preview'>
        <div className='container'>
          <div className='row'>
          <div className='col-md-6'>
            <h3>Join with us and enjoy it!! </h3>
              <p>Play soccer at a time and place that suits you.

​Games are listed on the app everyday of the week. Join the game with a date and time that's convenient for you and pay in advance on the app.

​

All games are hosted by Just Play. We bring all the equipment, you just need your cleats!



Games will give you a good run around without being too competitive. We welcome all players, regardless of gender or skill level.!</p>
          <ol>
            <li>Download the App </li>
            <li>Choose a Game Near You </li>
            <li>Play Soccer, Meet New People, Enjoy </li>
          </ol>
          <button><Link to={'/read'}>Learn more</Link></button>
          </div>
          <div className='col-md-6'>
           
            <img src={combine} alt='combine'/>
          </div>
         
          </div>
        </div>
      </section>

      <section className='moods'>
        <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
          <h2>ABOUT US ?</h2>
         
          </div>
        </div>
      </div>
        </section>


      <section id='about' className='about'>
          <div className='container'>
          <div className='row'>
 
            <div className="col-md-6">
              
              <p>NYC Footy began in Brooklyn in 2010. Three friends that met on a free agent team came together to offer something better.
              Better jerseys, better customer service, better website, a better commitment to social, and a commitment towards inclusiveness.
In short, a better vibe.
NYC Footy has leagues that accommodate beginners on up to advanced players. We accommodate everyone. Well…almost everyone (we don’t accommodate overly aggressive, entitled, and/or abusive personalities).

As the largest and most recognizable league in New York City, we continue to expand programming to accommodate the needs of the community. This includes our partnership with BetterPlayer, a soccer training program, Footy Kids, our new youth program, our two annual tournaments, the Governors Cup and the Footy Fest, our charity tournament, the SBU Cup and more.
Oh, and we’re always mixed gender.</p>
            </div>
       
            <div className="col-md-6">
            <img src='https://i.imgur.com/Q6dEGpg.jpg' alt='about'/>  
            </div>
    
           
          </div>
</div>
      </section>


      
      <section className='moods'>
        <div className="container">
       
          
          <div className="col-lg-12 col-md-12">
          <h2>Where can you play CeleBreak games?</h2>
          </div>
         
     
      </div>
        </section>
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
        <ListStadiums />
        <div>
  
</div>
           </div>

         
        </section>
           </Fragment>
           
  )
}

export default Home
