import React from 'react';
import { Route, Routes } from 'react-router';
import Archery from '../Pages/Archery';
import BMX from '../Pages/BMX';
import Boating from '../Pages/Boating';
import Climbing from '../Pages/Climbing';
import Fencing from '../Pages/Fencing';
import Golf from '../Pages/Golf';
import Gymnastics from '../Pages/Gymnastics';
import HorseRidding from '../Pages/HorseRidding';
import Mountain from '../Pages/Mountain';
import Pool from '../Pages/Pool';
import River from '../Pages/River';
import Road from '../Pages/Road';
import Shooting from '../Pages/Shooting';
import Skate from '../Pages/Skate';
import Surfing from '../Pages/Surfing';
import Track from '../Pages/Track';
import WindSurfing from '../Pages/WindSurfing';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<BMX />}></Route>   
            <Route path='/archery' element={<Archery />}></Route>   
            <Route path='/boating' element={<Boating />}></Route>   
            <Route path='/fencing' element={<Fencing />}></Route>   
            <Route path='/golf' element={<Golf />}></Route>   
            <Route path='/gymnastics' element={<Gymnastics />}></Route>   
            <Route path='/horse' element={<HorseRidding />}></Route>   
            <Route path='/mount' element={<Mountain />}></Route>   
            <Route path='/pool' element={<Pool />}></Route>   
            <Route path='/river' element={<River />}></Route>   
            <Route path='/road' element={<Road />}></Route>   
            <Route path='/shoot' element={<Shooting />}></Route>   
            <Route path='/surfing' element={<Surfing />}></Route>   
            <Route path='/track' element={<Track />}></Route>   
            <Route path='/windsurfing' element={<WindSurfing />}></Route>
            <Route path='/skate' element={<Skate />}></Route>
            <Route path='/climbing' element={<Climbing />}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes;