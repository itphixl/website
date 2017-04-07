/*
* Overlay component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';
import _                                from 'lodash';

import React                            from 'react';
import {Link}                           from 'react-router-dom';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

import {projects, links}                from '../../configs';

import overlayCloseButton               from '../../assets/images/overlay-close-button.png';
import overlayBackToTopButton           from '../../assets/images/overlay-back-to-top-button.png';

export default class Overlay extends React.Component {

  backToTopButtonDidClicked() {
    this.refs['overlay-container-div'].scrollTop = 0;
  }

  render() {
    const {name, id} = this.props.target;
    const {component: ContentComponent, color, link} = _.find(projects, (p) => {return p.id === id});

    const index = _.findIndex(projects, (p) => {return p.id === id});

    const nextIndex = projects.length - 1 === index ? 0 : index + 1;
    const prevIndex = index === 0 ? projects.length - 1 : index - 1;

    const {id: nextProjectId} = projects[nextIndex];
    const {id: prevProjectId} = projects[prevIndex];

    return (
      <div className='overlay-container' ref='overlay-container-div'>
        <div
          className='overlay'
          style={{
            borderColor: color
          }}
        >
          <header className='header'>
            <div className='icon-box'>
              <div
                className='icon'
                style={{
                  backgroundImage: `url(${overlayCloseButton})`
                }}
              >
                <Link to={links.work} />
              </div>
            </div>
          </header>

          <section className='overlay-content'>
            <ContentComponent projectLink={link} projectColor={color} />
          </section>

          <footer className='footer' style={{backgroundColor: color}}>

            <div className='gallery-navigation-box'>
              <div className='global-navigation-container'>
                <div className='gallery-navigation-content'>
                  <Link to={`/${name}/${prevProjectId}`}>
                    <span className={classnames('Roboto-Regular', 'gallery-navigation-link-left')}>
                      {'Projet précédent'}
                    </span>
                  </Link>
                </div>
                <div className='gallery-navigation-content'>
                  <Link to={`/${name}/${nextProjectId}`}>
                    <span className={classnames('Roboto-Regular', 'gallery-navigation-link-right')}>
                      {'Projet suivant'}
                    </span>
                  </Link>
                </div>
              </div>

              <a
                href='#'
                onClick={(e) => {e.preventDefault(); this.backToTopButtonDidClicked()}}
                className='back-to-top-button'
                style={{
                  backgroundImage: `url(${overlayBackToTopButton})`
                }}
              />
            </div>

            <div className='goback-to-gallery-box'>
              <Link to={links.work}>
                <span className='Roboto-Regular'>{'Revenir à la galerie'}</span>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

Overlay.propTypes = {
  target: React.PropTypes.objectOf(React.PropTypes.string)
}
