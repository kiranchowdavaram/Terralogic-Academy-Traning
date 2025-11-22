import React from 'react'
import MyGoogleMap from '../hello/MyGoogleMap'
import "bootstrap/dist/css/bootstrap.min.css";
import MyCustomPage from './MyCustomPage';
 

const Page = () => {
    return (
        <>
            <MyGoogleMap />
            <MyCustomPage />
        </>
    )
}

export default Page