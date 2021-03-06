import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import { Search } from './Search'
import ReviewsList from './ReviewsList'
import MapContainer from './GoogleApi/MapContainer'


export class ReviewsPage extends Component{
  state={
    reviews: this.props.restaurants
  }

  componentDidMount(){
    this.props.fetchRestaurants()
  }

  render(){
    const { onChangeText, handleSortChange, restaurants, sortKeys, searchText} = this.props
    return(

      <div className='Reviews-page-container'>
        <div className='map-container'>
        <MapContainer restaurants={restaurants}/>
        </div>
        <Search
          onChangeText={onChangeText}
          searchText={searchText}
          count={restaurants.length}
          />
        <ReviewsList
          restaurants={restaurants}
          handleSortChange={handleSortChange}
          sortKeys={sortKeys}
        />
      </div>
    )
  }
}
