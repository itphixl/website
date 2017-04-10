/*
* Navigation component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';
import {Link}                           from 'react-router-dom';

import stylesheet                       from './stylesheet.styl';

import {links}                          from '../../configs';

import closeButton                      from '../../assets/images/navigation-close-button.png';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className='navigation-container'>
        <div className='navigation'>
          <div className={classnames('close-box', 'clearfix')}>
            <a
              href='#'
              onClick={(e) => {e.preventDefault(); this.props.closeAction()}}
              className='close-button'
              style={{
                backgroundImage: `url(${closeButton})`
              }}
            />
          </div>

          <ul className='items'>
            <li className='item'>
              <Link to={links.home}>
                <span className={classnames('label', 'Roboto-Bold')}>
                  {'Accueil'}
                </span>
              </Link>
            </li>
            <li className='item'>
              <Link to={links.work}>
                <span className={classnames('label', 'Roboto-Bold')}>
                  {'Nos réalisations'}
                </span>
              </Link>
            </li>
            <li className='item'>
              <Link to={links.agency}>
                <span className={classnames('label', 'Roboto-Bold')}>
                  {'L\'agence'}
                </span>
              </Link>
            </li>
            <li className='item'>
              <Link to={links.contact}>
                <span className={classnames('label', 'Roboto-Bold')}>
                  {'Contact'}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

Navigation.propTypes = {
  closeAction: PropTypes.func.isRequired
};
