/*
* Occabike component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

import OccabikeLogo                     from '../../assets/images/occabike-logo.png';
import OccabikeCircleGradient           from '../../assets/images/occabike-circle-gradient.png';
import OccabikeFirstScreen              from '../../assets/images/occabike-first-screen.jpg';
import OccabikeSecondScreen             from '../../assets/images/occabike-second-screen.jpg'
import OccabikeThirdScreen              from '../../assets/images/occabike-third-screen.png'

export default class Occabike extends React.Component {
  render() {
    const {projectLink, projectColor} = this.props;

    return (
      <div className='occabike'>

        <div
          className='logo'
          style={{
            backgroundImage: `url(${OccabikeLogo})`
          }}
        />

        <div className='description-box'>
          <Grid>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>
                <div
                  className='circle-gradient'
                  style={{
                    backgroundImage: `url(${OccabikeCircleGradient})`
                  }}
                />
              </Col>
              <Col xs={8} sm={8} md={8} lg={8}>
                <span className={classnames('Roboto-Black', 'title')}>
                  {'Occabike'}
                </span>
                <span className={classnames('Roboto-Regular-Italic', 'date')}>
                  {'01/01/2015'}
                </span>

                <span className={classnames('Roboto-Regular', 'type')}>
                  {'Webdesign, Identité visuelle, CMS'}
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
            <span className={classnames('Nexa-Bold', 'title')} style={{borderColor: projectColor}}>
              {'Lorem Ipsum'}
            </span>

            <span className={classnames('Roboto-Regular', 'text')}>
              {'some text here'}
            </span>
          </div>

          <img
            className='first-screen'
            src={OccabikeFirstScreen}
          />
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
            src={OccabikeSecondScreen}
            className='second-screen'
          />
        </div>

        <div className='third-screen-box' style={{backgroundColor: projectColor}}>
          <div className='infos-box'>
            <span className={classnames('Nexa-Bold', 'title')}>
              {'Lorem Ipsum'}
            </span>

            <span className={classnames('Roboto-Regular', 'text')}>
              {'some text here'}
            </span>
          </div>

          <img
            src={OccabikeThirdScreen}
            className='third-screen'
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
    )
  }
}

Occabike.propTypes = {
  projectLink: PropTypes.string.isRequired,
  projectColor: PropTypes.string.isRequired
};
