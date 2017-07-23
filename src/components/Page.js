import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/page.css'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.setYear(+e.target.textContent);
  }
  render() {
    const { year, photos } = this.props;
    return (
      <div className='page'>
        <p className='page__button-container'>
          <button className='page__button' onClick={::this.onYearBtnClick}>
            2015
          </button>
          <button className='page__button' onClick={::this.onYearBtnClick}>
            2016
          </button>
          <button className='page__button' onClick={::this.onYearBtnClick}>
            2017
          </button>
        </p>
        <h3 className='page__title'>{year} год</h3>
        <p className='page__count'>У тебя {photos.length} фоток.</p>
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
};