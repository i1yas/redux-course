import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { name, surname} = this.props.user
    const { year, photos } = this.props.page
    return <div>
      <p>Привет из App, {name} {surname}!</p>
      <p>У тебя уже {photos.length} фото за {year} год</p>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App)