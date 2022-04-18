import React from 'react';
import './skill.css';

export default function Skill() {
  return (
  <div class='container'>

    
  <header>
    <button class="nav-toggle" aria-label="toggle navigation">
            <span class="hamburger"></span>
        </button>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
            <li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
            <li class="nav__item"><a href="#about" class="nav__link">About me</a></li>
            <li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
        </ul>
    </nav>
</header>

    <div class='user_info'>
        <h2>Your Information</h2>
        <label for='name'>Name</label>
        <input  type="text" name='name'/>

        <label for='email'>email</label>
        <input  type="email" name='email'/>
        <label for='phone'>phone</label>
        <input  type="phone" name='phone'/>
    </div>

    <div class='education_info'>
        <h2>Your Education Background</h2>
        <label for='School_name'>School Name</label> 
        <input  type="text" name='School_name'/>

        <label for='title'>Title Of Study</label> 
        <input  type="text" name='title'/>

        <label for='year'>Year</label> 
        <input  type="Date" name='year'/>
        
    </div>

    <div class='experience'>
        <h2>Your Experience</h2>
        <label for='Company'>Company Name</label> 
        <input  type="text" name='Company'/>

        <label for='position'>Position</label> 
        <input  type="text" name='position'/>

        <label for='task'>Main Task Of Your Job</label> 
        <input  type="text" name='task'/>
        <h2>Data</h2>
        <label for='start'>Start</label> 
        <input  type="Date" name='start'/>
        <label for='end'>End</label> 
        <input  type="Date" name='end'/>
        
    </div>
    <input  type="submit" name='Submit' class='btn' />
    </div>
  )
}
