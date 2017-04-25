/*
* NoMatch component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';

import {Link}                           from 'react-router-dom';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

import burgerIcon                       from '../../assets/images/burger-icon.png';
import instagramLogo                    from '../../assets/images/instagram-logo.png';
import img404                           from '../../assets/images/img-404.png';

import {links}                          from '../../configs';

export default class NoMatch extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='no-match-container'>
        <div className='no-match'>

          <header className='header'>
            <div className='icon-box'>
              <a
                href='#'
                onClick={(e) => {e.preventDefault(); this.props.openNavigationAction(true)}}
                className='icon'
              >
                <span
                  className='img'
                  style={{
                    backgroundImage: `url(${burgerIcon})`
                  }}
                />
              </a>
            </div>
          </header>

          <div className='url-not-found'>
            <h3 className={classnames('title', 'Nexa-Bold')}>
              {'Url not found'}
            </h3>

            <div
              className='img-404'
              style={{
                backgroundImage: `url(${img404})`
              }}
            />

            <p className={classnames('quote', 'Roboto-Regular-Italic')}>
              {'\"Je montrerai à ces gens ce que vous ne voulez pas qu\'ils voient. Je leur ferai voir un monde sans vous, un monde sans lois ni contrôle, sans limites ni frontières, un monde où tout est possible. Ce que nous en ferons ne dépendra que de vous.\"'}
            </p>

            <span className={classnames('author', 'Roboto-Bold')}>
              {'Neo, Matrix'}
            </span>
          </div>

          <footer className='footer'>
            <a
              href='https://www.instagram.com/agencephixl/'
              target='_blank'
              className='instagram-logo'
              style={{
                backgroundImage: `url(${instagramLogo})`
              }}
            />

            <div className='legal-notice-box'>
              <Link to={links.legalNotice}>
                <span className='Roboto-Regular'>{'Mentions légales'}</span>
              </Link>
            </div>

          </footer>
        </div>
      </div>
    );
  }
}
