/*
* CGFFLP component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import stylesheet                       from './stylesheet.styl';

import CGFGlobalSummitLogo              from '../../assets/images/cgf-global-summit-logo.png';
import CGFGlobalSummitCircleGradient    from '../../assets/images/cgf-global-summit-circle-gradient.png';
import CGFGlobalSummitFirstScreen       from '../../assets/images/cgf-global-summit-first-screen.jpg';
import CGFGlobalSummitSecondScreen      from '../../assets/images/cgf-global-summit-second-screen.jpg';
import CGFGlobalSummitThirdScreen       from '../../assets/images/cgf-global-summit-third-screen.jpg';
import CGFGlobalSummitForthScreen       from '../../assets/images/cgf-global-summit-forth-screen.jpg';

import CGFRetailSummitLogo              from '../../assets/images/cgf-retail-summit-logo.png';
import CGFRetailSummitCircleGradient    from '../../assets/images/cgf-retail-summit-circle-gradient.png';
import CGFRetailSummitFristScreen       from '../../assets/images/cgf-retail-summit-first-screen.jpg';

import CGFFLPLogo                       from '../../assets/images/cgf-flp-logo.png';
import CGFFLPCircleGradient             from '../../assets/images/cgf-flp-circle-gradient.png';
import CGFFLPFirstScreen                from '../../assets/images/cgf-flp-first-screen.jpg';

export default class CGFFLP extends React.Component {
  render() {
    const {projectLink, projectColor} = this.props;

    return (
      <div className='cgf-future-leaders-programme'>
        <div className='global-summit'>
          <div
            className='logo'
            style={{
              backgroundImage: `url(${CGFGlobalSummitLogo})`
            }}
          />

          <div className='description-box'>
            <Grid>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <div
                    className='circle-gradient'
                    style={{
                      backgroundImage: `url(${CGFGlobalSummitCircleGradient})`
                    }}
                  />
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}>
                  <span className={classnames('Roboto-Black', 'title')}>
                    {'CGF - The Global Summit'}
                  </span>
                  <span className={classnames('Roboto-Regular-Italic', 'date')}>
                    {'01/01/2015'}
                  </span>

                  <span className={classnames('Roboto-Regular', 'type')}>
                    {'Print (flyer, leaflet.. ), Identité visuelle'}
                  </span>
                </Col>
              </Row>
            </Grid>
          </div>

          <div className='first-screen-box' >
            <div className='infos-box'>
              <span className={classnames('Nexa-Bold', 'title')}>
                {'Lorem Ipsum'}
              </span>

              <span className={classnames('Roboto-Regular', 'text')}>
                {'some text here'}
              </span>
            </div>

            <img
              src={CGFGlobalSummitFirstScreen}
              className='first-screen'
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

            <div className='second-screen-img-container'>
              <img
                src={CGFGlobalSummitSecondScreen}
                className='second-screen'
              />
            </div>
          </div>

          <div className='third-screen-box'>
            <div className='infos-box'>
              <span className={classnames('Nexa-Bold', 'title')}>
                {'Lorem Ipsum'}
              </span>

              <span className={classnames('Roboto-Regular', 'text')}>
                {'some text here'}
              </span>
            </div>

            <img
              src={CGFGlobalSummitThirdScreen}
              className='third-screen'
            />
          </div>

          <div className='forth-screen-box' style={{backgroundColor: projectColor}}>
            <div className='infos-box'>
              <span className={classnames('Nexa-Bold', 'title')}>
                {'Lorem Ipsum'}
              </span>

              <span className={classnames('Roboto-Regular', 'text')}>
                {'some text here'}
              </span>
            </div>

            <img
              src={CGFGlobalSummitForthScreen}
              className='forth-screen'
            />
          </div>

          <div className='end' />
        </div>

        <div className='separator' style={{backgroundColor: projectColor}} />

        <div className='retail-summit'>
          <div
            className='logo'
            style={{
              backgroundImage: `url(${CGFRetailSummitLogo})`
            }}
          />

          <div className='description-box'>
            <Grid>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <div
                    className='circle-gradient'
                    style={{
                      backgroundImage: `url(${CGFRetailSummitCircleGradient})`
                    }}
                  />
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}>
                  <span className={classnames('Roboto-Black', 'title')}>
                    {'CGF - Sustainable Retail Summit'}
                  </span>
                  <span className={classnames('Roboto-Regular-Italic', 'date')}>
                    {'01/01/2015'}
                  </span>

                  <span className={classnames('Roboto-Regular', 'type')}>
                    {'Print (flyer, leaflet.. ), Identité visuelle'}
                  </span>
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

            <img
              src={CGFRetailSummitFristScreen}
              className='first-screen'
            />
          </div>
        </div>

        <div className='separator' style={{backgroundColor: projectColor}} />

        <div className='flp'>
          <div
            className='logo'
            style={{
              backgroundImage: `url(${CGFFLPLogo})`
            }}
          />

          <div className='description-box'>
            <Grid>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <div
                    className='circle-gradient'
                    style={{
                      backgroundImage: `url(${CGFFLPCircleGradient})`
                    }}
                  />
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}>
                  <span className={classnames('Roboto-Black', 'title')}>
                    {'CGF - Future Leaders Programme'}
                  </span>
                  <span className={classnames('Roboto-Regular-Italic', 'date')}>
                    {'01/01/2015'}
                  </span>

                  <span className={classnames('Roboto-Regular', 'type')}>
                    {'Print (flyer, leaflet.. ), Identité visuelle'}
                  </span>
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

            <img
              src={CGFFLPFirstScreen}
              className='first-screen'
            />
          </div>
        </div>
      </div>
    );
  }
}

CGFFLP.propTypes = {
  projectLink: PropTypes.string.isRequired,
  projectColor: PropTypes.string.isRequired
};
