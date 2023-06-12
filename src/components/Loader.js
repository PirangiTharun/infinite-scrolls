import React from 'react';
import '../App.css';

const Loader = () => {
  return (
    <div className='App'>
        {[...Array(10)].map((i,index)=>{
            return <div key={index} className='container'>
                <img height="100" src={'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg'} alt="" />
                <p className='shimmerP'></p>
                <p className='shimmerP'></p>
                <p className='shimmerP'></p>
            </div>
        })}
    </div>
  )
}

export default Loader