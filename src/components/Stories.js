import React from 'react'
import {connect} from 'react-redux'

import {loadStories, clear} from '../actions'

export function Stories(props) {
  return (
    <div>
      <button type="button" onClick={props.loadStories}>Load top 3 Stories</button>
      <button type="button" onClick={props.clear}>Clear</button>
      <StoryList {...props} />
    </div> 
  )
}

function StoryList(props) {
  if (props.items.lenght === 0) return null
  return (
    <div>
      {props.items.map(item => <Story {...item} key={item.id} />)}
    </div>
  )
}

function Story({title}) {
  return <p>{title}</p>
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    loadStories: () => dispatch(loadStories()),
    clear: () => dispatch(clear())
  }

}

export default connect(mapState, mapDispatch)(Stories)