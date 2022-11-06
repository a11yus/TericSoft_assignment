import React, { useEffect } from 'react'
import FeaturedSports from '../Components/FeaturedSports';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import SubFeatured from '../Components/SubFeatured';
import { getData } from '../Redux/Reducer/action';
import Sports from '../Components/Sport';

const arr = ['river', 'sea', 'pool']

const River = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.data);
  console.log(state);

  const handleData = (x) => {
    let y = '/'+ x;
    dispatch(getData(y))
  }

  useEffect(() => {
    
    dispatch(getData(location.pathname))
  }, [])
  return (
    <div>
        <FeaturedSports />
        <SubFeatured data= {arr} handleData = {handleData}/>
        <Sports sportsData = {state}/>
    </div>
  )
}

export default River