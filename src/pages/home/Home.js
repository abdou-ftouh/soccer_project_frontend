import React, { Fragment } from 'react'
import Navs from '../../components/Navs/Navs'
import Header from '../../components/Home/header'
import a1 from '../../components/assets/a1.jpeg'
import a2 from '../../components/assets/a2.jpeg'
import a3 from '../../components/assets/a3.jpeg'
import a4 from '../../components/assets/a4.jpeg'
import './home.css'
const Home = () => {
  return (
     <Fragment>
        <Navs />
        <Header />
        <section className='moods'>
        <div class="container">
        <div class="row">
          <div class="col-md-4">
          <h2>Men’s Football</h2>
          </div>
          <div class="col-md-4">
          <h2>Women’s Football</h2>
          </div>
          <div class="col-md-4">
          <h2>Mixed Football</h2>
          </div>
        </div>
      </div>
        </section>
      <section className='profitable'>
        <div class="container">
          <div class="row">
            <div class="col-md-6 ">
            <div class="row">
    <div class="col">
      <img src={a1} title='a1'></img>
    </div>
    <div class="col">
    <img src={a2} title='a2'></img>
    </div>
    <div class="w-100"></div>
  <div class="col"><img src={a3} title='a3'></img></div>
  <div class="col"><img src={a4} title='a4'></img></div>
  </div>
            </div>
            
            <div class="col-md-6">
             <h3>Do you have a football field and want to make it profitable?</h3>
             <p>It doesn't matter if it is an outdoor or indoor open field, if it has natural grass, artificial grass or any other surface.
If you can play football on it, we can organize CeleBreak games on it.</p>
    <button><a href='#'>Add my field</a></button>
            </div>
          </div>
        </div>
      </section>
      </Fragment>
  )
}

export default Home
