import React,{useState} from 'react'
import Navbar1 from './Navbar'
import DatePicker from "react-horizontal-datepicker";
import Slider from "react-slick";


const TurfBooking = () => {

 
   const [date,setDate] = useState('');
   const [time,setTime] = useState('');
   const [name,setName] = useState('');
   const [phone,setPhone] = useState('');

  const times= [
    '09-10am',
    '10-11am',
    '11-12am',
    '12-01pm',
    '01-02pm',
    '02-03pm',
    '03-04pm'
  ]

  const bookslot= async()=>{
    const book ={
      date,time
    }
    console.log(book)
  
   
  }
  const selectedDay = (val) => {
    console.log(val)
  };
  const Handle = (value) => {
    console.log(value);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='contanier'>
      <Navbar1 />

      <div className='detailcard'>
      <div className='images'>
        <div>
          <Slider {...settings}>
            <div>
              <img src="https://assets.telegraphindia.com/telegraph/2021/Sep/1630669298_sky-turf.jpg" className='' />
            </div>
            <div>
              <img src="https://assets.telegraphindia.com/telegraph/2021/Sep/1630669298_sky-turf.jpg" className='' />
            </div>
            <div>
              <img src="https://assets.telegraphindia.com/telegraph/2021/Sep/1630669298_sky-turf.jpg" className='' />
            </div>
          </Slider>
        </div>
      </div>
      <div className='detail1'>
      <div className='detail'>
      <h1>Details</h1>
        <div className='info'>
         
          <div className='left'>
            <b>
              <p>Max-players: Max-players:</p>
              <p>Morning Price: $Max-players:</p>
              <p>Evening Price: $Max-players:</p>
              <p>Sports Available:Max-players:</p>
            </b>
          </div>
          <div className='right'>
            <b>
              <p>Max-players:Max-players: </p>
              <p>Morning Price: $Max-players:</p>
              <p>Evening Price: $Max-players:</p>
              <p>Sports Available:Max-players:</p>
            </b>
          </div>
        </div>

      </div>
      <div className='line'></div>

      <div className='datebox'
      value={selectedDay} 
      onChange={e => setDate(e.target.value)} 
       >
        <DatePicker
          getSelectedDay={selectedDay}
          endDate={7}
          selectDate={new Date()}
          labelFormat={"MMMM"}
          color={"orange"}
       
         onChange={e=> setDate(e.target.value)}
        />
      </div>
     
      <div className='line'></div>
      <div className='time'>

        <div className='times'>
        <input type='checkbox' value={time} onChange={e => setTime(e.target.value)} />
        <label>9-10</label>
        </div>
       
     
      </div>
      </div>
     
  
      </div>
     
      <button className='btn' onClick={bookslot}>Book</button>

    </div>
  )
}

export default TurfBooking