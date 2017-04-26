/*
* Overlay component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';
import _                                from 'lodash';

import React                            from 'react';
import {findDOMNode}                    from 'react-dom';
import PropTypes                        from 'prop-types';

import {Link}                           from 'react-router-dom';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import {TweenMax, Power1}               from 'gsap';
import ScrollToPlugin                   from 'gsap/ScrollToPlugin';

import * as dynamics                    from 'dynamics.js/lib/dynamics';

import stylesheet                       from './stylesheet.styl';

import {projects, links}                from '../../configs';

import overlayCloseButton               from '../../assets/images/overlay-close-button.png';
import overlayBackToTopButton           from '../../assets/images/overlay-back-to-top-button.png';

export default class Overlay extends React.Component {

  constructor(props) {
    super(props);
  }

  goBack() {
    const {history, isModal} = this.props;

    if (isModal) {
      const overlayContainerDiv = findDOMNode(this.refs['overlay-container-div']);
      const overlayMaskDiv = findDOMNode(this.refs['overlay-mask-div']);

      dynamics.css(overlayMaskDiv, {opacity: 0, visibility: 'visible'});
      dynamics.animate(overlayMaskDiv, {
        opacity: 1
      }, {
        duration: 200,
        type: dynamics.easeInOut,
        complete: () => {
          dynamics.animate(overlayContainerDiv, {
            scale: 0
          }, {
            duration: 500,
            type: dynamics.easeInOut,
            complete: () => {
              history.goBack();
            }
          });
        }
      });
    }
    else {
      history.push('/');
    }
  }

  backToTopButtonDidClicked() {
    const overlayContainerDiv = findDOMNode(this.refs['overlay-container-div']);

    TweenMax.to(overlayContainerDiv, 0.8, {
      scrollTo: {y: 0},
      ease: Power1.easeInOut
    });
  }

  enterAnimation() {
    const overlayContainerDiv = findDOMNode(this.refs['overlay-container-div']);
    const overlayMaskDiv = findDOMNode(this.refs['overlay-mask-div']);

    dynamics.animate(overlayContainerDiv, {
      scale: 1
    }, {
      duration: 500,
      type: dynamics.easeInOut,
      complete: () => {
        dynamics.animate(overlayMaskDiv, {
          opacity: 0
        }, {
          duration: 200,
          type: dynamics.easeInOut,
          complete: () => {
            dynamics.css(overlayMaskDiv, {visibility: 'hidden'});
          }
        })
      }
    });
  }

  componentDidUpdate() {
    const overlayContainerDiv = findDOMNode(this.refs['overlay-container-div']);

    overlayContainerDiv.scrollTop = 0;
  }

  componentDidMount() {
    const {isModal} = this.props;

    if (isModal) {
      this.enterAnimation();
    }
  }

  shouldComponentUpdate(nextProps) {
    const {match} = nextProps;
    return match.params.id !== this.props.match.params.id;
  }

  render() {
    const {match, isModal} = this.props;
    const id = match.params.id;

    const {component: ContentComponent, color, link} = _.find(projects, (p) => {return p.id === id});

    const index = _.findIndex(projects, (p) => {return p.id === id});

    const nextIndex = projects.length - 1 === index ? 0 : index + 1;
    const prevIndex = index === 0 ? projects.length - 1 : index - 1;

    const {id: nextProjectId} = projects[nextIndex];
    const {id: prevProjectId} = projects[prevIndex];

    return (
      <div
        className={classnames({
          'overlay-container': true,
          'overlay-container-scale-0': isModal
        })}
        ref='overlay-container-div'
      >
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
                onClick={(e) =>{e.preventDefault(); this.goBack()}}
              />
            </div>
          </header>

          <section className='overlay-content'>
            <ContentComponent projectLink={link} projectColor={color} />
          </section>

          <footer className='footer' style={{backgroundColor: color}}>

            <div className='gallery-navigation-box'>
              <div className='global-navigation-container'>
                <div className='gallery-navigation-content'>
                  <Link to={`/project/${prevProjectId}`}>
                    <span className={classnames('Roboto-Regular', 'gallery-navigation-link-left')}>
                      {'Projet précédent'}
                    </span>
                  </Link>
                </div>
                <div className='gallery-navigation-content'>
                  <Link to={`/project/${nextProjectId}`}>
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
        {isModal ? (
          <div
            className='overlay-mask'
            ref='overlay-mask-div'
            style={{
              backgroundColor: color
            }}
          />
        ) : null}
      </div>
    );
  }
}

Overlay.propTypes = {
  isModal: PropTypes.bool
};

Overlay.defaultProps = {
  isModal: true
};
