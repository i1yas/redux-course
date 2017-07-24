import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/page.css'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.textContent);
  }
  render() {
    const { fetching, year, photos } = this.props;
    const years = [2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010]
    return (
      <div className='page'>
        <p className='page__button-container'>
          {years.map((year, ind) => {
            return (
                <button className='page__button' onClick={::this.onYearBtnClick} key={ind}>
                  {year}
                </button>
              )
          })}
        </p>
        <h3 className='page__title'>{year} год</h3>
        {
          fetching ?
          <p className='page__count'>Загрузка</p>
          :
          photos.map((photo, ind) => {
            <div className='photo' key={ind}>
              <img className='photo__img' src={photo.src} alt=''/>
              <p className='photo__likes'>{photo.likes.count}</p>
            </div>
          })
        }
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
};