import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import photoAr from './Photos'
import { selectTrue,startButton } from '../features/capth'
import './Page.css'
const Page = () => {
const dispatch=useDispatch()
const {start}= useSelector((state)=>state.capt)
const randomIndex = Math.floor(Math.random() * photoAr.length)


  return (
    <div className="container">
    {start ? (
      <>
        <label className="captcha-label">{randomIndex + 1} Numaralı Resmi Seçiniz?</label>
        <div  className="photo-container">

        {photoAr.map((photos, index) => (
            <img
            onClick={() => dispatch(selectTrue({ randomIndex, number: index }))}
            key={index}
            src={photos}
            style={{ width: '50px', height: '50px', marginBottom: '10px' }}
            />
        ))}
        </div>
      </>
    ) : (
      <button className="start-button" onClick={() => dispatch(startButton())}>Start Captcha</button>
    )}
  </div>
  )
}

export default Page