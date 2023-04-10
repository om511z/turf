import React, { Fragment } from 'react'
import Data from '../Data'
import Navbar1 from './Navbar'
const Home = () => {
  return (
    <Fragment>
      <Navbar1 />
 <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-9 mt-2'>
        {Data && Data.map(data =>(
                 <div className='row bs'>
          
                 <div className='col-md-4'>
                   <img src={data.url} className='small-img' />
                 </div>
                 <div className='col-md-8 '>
                   <h1>{data.turfname}</h1>
                   <div className='content'>
                     <div className='left'>
     
     
                       <b>
                         <p>Max-players: {data.maxplayer}</p>
                         <p>Morning Price: ${data.morning}</p>
                         <p>Evening Price: ${data.evening}</p>
                         <p>Sports Available: {data.sports}</p>
                       </b>
                     </div>
                     <div className='right'>
     
                       <b>
                         <p>Area: 800 x 800</p>
                         <p>Location: {data.Loaction}</p>
                       </b>
                     </div>
                   </div>
     
     
     
                   <div style={{ float: 'right' }}>
                    <a href='https://loquacious-gaufre-817921.netlify.app/'>
                    <button className='btn btn-primary'>Book now</button>

                    </a>
                   </div>
     
                 </div>
               </div>
              ))}
       

        </div>
      </div>
    </div>

    </Fragment>
   
  )
}

export default Home