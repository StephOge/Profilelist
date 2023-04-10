import React from 'react'
// import Profile from "./profile";
import { useState } from 'react';
import './App.css'
import profile from './profile';

function App () {
  const [searchQuery, setSearchQuery] = useState('');

return (
    <div className='box'>
           <div className='wrapper'>
     <input text='type' placeholder='search by name...' className='search' onChange={e=> setSearchQuery(e.target.value)} ></input>
    <div className='flex' >
      <ul className='list' style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
          {profile.filter((profile)=> profile.firstName.toLocaleLowerCase().includes(searchQuery)
          ).map((profile)=>(
            <li key={profile.id} className='listItems'>
              <div className='image'>
                <img src={profile.picture} alt=''></img>
              </div>
              <div className='identify'>
                  <div className='id'>
                      {profile.id}
                  </div>
                  <div className='items'>
                    {profile.title} {profile.firstName} {profile.lastName}
                  </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  </div>
    </div>
  );
  }
 export default App























