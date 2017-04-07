/*
* BTXParis component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

import BTXParisLogo                     from '../../assets/images/btx-paris-logo.png';
import BTXParisCircleGradient           from '../../assets/images/btx-paris-circle-gradient.png';
import BTXParisFirstScreen              from '../../assets/images/btx-paris-first-screen.jpg';
import BTXParisSecondScreen             from '../../assets/images/btx-paris-second-screen.png';
import BTXParisThirdScreen              from '../../assets/images/btx-paris-third-screen.png';
import BTXParisFourthScreen             from '../../assets/images/btx-paris-fourth-screen.png';

export default class BTXParis extends React.Component {
  render() {
    const {projectLink, projectColor} = this.props;

    return (
      <div className='btx-paris'>
        <div
          className='logo'
          style={{
            backgroundImage: `url(${BTXParisLogo})`
          }}
        />

        <div className='description-box'>
          <Grid>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>
                <div
                  className='circle-gradient'
                  style={{
                    backgroundImage: `url(${BTXParisCircleGradient})`
                  }}
                />
              </Col>
              <Col xs={8} sm={8} md={8} lg={8}>
                <span className={classnames('Roboto-Black', 'title')}>
                  {'BTX Paris'}
                </span>
                <span className={classnames('Roboto-Regular-Italic', 'date')}>
                  {'01/01/2015'}
                </span>

                <span className={classnames('Roboto-Regular', 'type')}>
                  {'Webdesign, Identité visuelle'}
                </span>

                <a
                  href={projectLink}
                  className='project-link-button'
                  target='_blank'
                  style={{
                    color: projectColor
                  }}
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
            src={BTXParisFirstScreen}
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
            src={BTXParisSecondScreen}
            className='second-screen'
          />
        </div>

        <div className='third-screen-box'>
          <div className='infos-box'>
            <span className={classnames('Nexa-Bold', 'title')} style={{borderColor: projectColor}}>
              {'Lorem Ipsum'}
            </span>

            <span className={classnames('Roboto-Regular', 'text')}>
              {'some text here'}
            </span>
          </div>

          <img
            src={BTXParisThirdScreen}
            className='third-screen'
          />
        </div>

        <div className='screen-separator' style={{backgroundColor: projectColor}} />

        <div className='forth-screen-box'>
          <div className='infos-box'>
            <span className={classnames('Nexa-Bold', 'title')}>
              {'Lorem Ipsum'}
            </span>

            <span className={classnames('Roboto-Regular', 'text')}>
              {'some text here'}
            </span>
          </div>

          <img
            src={BTXParisFourthScreen}
            className='fourth-screen'
          />

          <a
            href={projectLink}
            className='project-link-button'
            target='_blank'
            style={{
              color: projectColor
            }}
          >
            {'Lien vers le site'}
          </a>
        </div>
      </div>
    );
  }
}

BTXParis.propTypes = {
  projectLink: React.PropTypes.string.isRequired,
  projectColor: React.PropTypes.string.isRequired
};
