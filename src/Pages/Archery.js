import React from 'react'
import FeaturedSports from '../Components/FeaturedSports';
import SubFeatured from '../Components/SubFeatured';

const arr = ['Fencing', 'Shooting', 'Archery'];

const Archery = () => {
  return (
    <div>
        <FeaturedSports />
        <SubFeatured data= {arr}/>
    </div>
  )
}

export default Archery;