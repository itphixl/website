/*
* Loveforlivres component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

import PlayButton                       from '../../assets/images/play-button.png';
import LoveforlivresLogo                from '../../assets/images/loveforlivres-logo.png';
import LoveforlivresCircleGradient      from '../../assets/images/loveforlivres-circle-gradient.png';
import LoveforlivresSecondScreen        from '../../assets/images/loveforlivres-second-screen.png';

export default class Loveforlivres extends React.Component {
  render() {
    const {projectLink, projectColor} = this.props;

    return (
      <div className='loveforlivres'>
        <div
          className='logo'
          style={{
            backgroundImage: `url(${LoveforlivresLogo})`
          }}
        />

        <div className='description-box'>
          <Grid>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>
                <div
                  className='circle-gradient'
                  style={{
                    backgroundImage: `url(${LoveforlivresCircleGradient})`
                  }}
                />
              </Col>
              <Col xs={8} sm={8} md={8} lg={8}>
                <span className={classnames('Roboto-Black', 'title')}>
                  {'Love for Livres'}
                </span>
                <span className={classnames('Roboto-Regular-Italic', 'date')}>
                  {'01/01/2015'}
                </span>

                <span className={classnames('Roboto-Regular', 'type')}>
                  {'Waiting page, responsive'}
                </span>

                <a
                  href={projectLink}
                  className='project-link-button'
                  target='_blank'
                >
                  {'Lien vers le site'}
                </a>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className='first-screen-box'>
          <div className='infos-box'>
            <span className={classnames('Nexa-Bold', 'title')}>
              {'Lorem Ipsum'}
            </span>

            <span className={classnames('Roboto-Regular', 'text')}>
              {'some text here'}
            </span>
          </div>

          <div className='first-screen'>
            <div
              className='play-button'
              style={{
                backgroundImage: `url(${PlayButton})`
              }}
            />
          </div>
        </div>

        <div className='second-screen-box' style={{backgroundColor: projectColor}}>
          <div className='infos-box'>
            <span className={classnames('Nexa-Bold', 'title')}>
              {'Lorem Ipsum'}
            </span>

            <span className={classnames('Roboto-Regular', 'text')}>
              {'some text here'}
            </span>
          </div>

          <img
            src={LoveforlivresSecondScreen}
            className='second-screen'
          />
        </div>

        <div className='end'>
          <a
            href={projectLink}
            className='project-link-button'
            target='_blank'
          >
            {'Lien vers le site'}
          </a>
        </div>
      </div>
    );
  }
}

Loveforlivres.propTypes = {
  projectLink: PropTypes.string.isRequired,
  projectColor: PropTypes.string.isRequired
};
