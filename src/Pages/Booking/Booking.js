import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Booking() {
    const params = useParams()
    console.log('params: ', params);
    const location = useLocation();
    console.log('location: ', location);
  return (
    <div>Booking</div>
  )
}
