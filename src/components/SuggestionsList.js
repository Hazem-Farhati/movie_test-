import React from 'react'
import Item from './Item'
import movies from './movieList'

const SuggestionsList = () => {
    

  return (
    <div>SuggestionsList
      {movies.map((el,i)=><Item key={i} source={el.posterurl} title={el.name} desc={el.description}>
      </Item>)}  
    </div>
  )
}


export default SuggestionsList