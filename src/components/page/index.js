/*
* Page component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import {findDOMNode}                    from 'react-dom';
import PropTypes                        from 'prop-types';

import {Link}                           from 'react-router-dom';
import {Grid, Row, Col}                 from 'react-flexbox-grid';

import {TweenLite, Power1}              from 'gsap';
import ScrollToPlugin                   from 'gsap/ScrollToPlugin';

import GeometricShapeAnimation          from '../geometric-shape-animation';
import ProjectsGrid                     from '../projects-grid';
import ProjectsSlider                   from '../projects-slider';
import Teammate                         from '../teammate';

import stylesheet                       from './stylesheet.styl';

import phixlLogo                        from '../../assets/images/phixl-logo.png';
import burgerIcon                       from '../../assets/images/burger-icon.png';
import instagramLogo                    from '../../assets/images/instagram-logo.png';

import {teammates, projects, links}     from '../../configs';

export default class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {deviceType: 'Smartphone'};
  }

  setScrolltop() {
    const {section} = this.props;

    const element = this.refs[section];
    const scrollTop = section === 'intro' ? 0 : element.offsetTop;

    const pageContainerDiv = findDOMNode(this.refs['page-container-div']);

    TweenLite.to(pageContainerDiv, 0.8, {
      scrollTo: {
        y: this.state.deviceType === 'Desktop' ? (scrollTop - 160) : scrollTop
      },
      ease: Power1.easeInOut
    });
  }

  setDeviceType() {
    var deviceType = 'Smartphone';

    if (window.innerWidth >= 768) {
      deviceType = window.innerWidth < 1200 ? 'Tablet' : 'Desktop';
    }

    this.setState({deviceType: deviceType});
  }

  windowDidResized() {
    this.setDeviceType();
  }

  componentDidUpdate() {
    this.setScrolltop();
    this.props.openNavigationAction(false);
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.setDeviceType();
    window.addEventListener('resize', (e) => {this.windowDidResized()}, false);

    this.setScrolltop();
  }

  shouldComponentUpdate(nextProps, nextState) {
    var shouldUpdate = false;

    if (nextProps.section !== this.props.section) {
      shouldUpdate = true;
    }
    else if (nextProps.section === this.props.section && this.props.navigationIsOpen && !nextProps.navigationCloseFromButton) {
      shouldUpdate = (this.refs['page-container-div'].scrollTop !== this.refs[nextProps.section].offsetTop) ;
    }
    else if (nextState.deviceType !== this.state.deviceType) {
      shouldUpdate = true;
    }

    return shouldUpdate;
  }

  render() {
    const {deviceType} = this.state;
    const {section} = this.props;

    return (
      <div className='page-container' ref='page-container-div'>
        <div className='page' ref='page-div'>

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

            <div className='inline-navigation-box'>
              <div className='inline-navigation'>
                <div className='inline-navigation-cell'>
                  <Link to={links.home}>
                    <span className={classnames({'is-section': section === 'intro'})}>{'Accueil'}</span>
                  </Link>
                </div>

                <div className='inline-navigation-cell'>
                  <Link to={links.work}>
                    <span className={classnames({'is-section': section === 'work'})}>{'Nos réalisations'}</span>
                  </Link>
                </div>

                <div className='inline-navigation-cell'>
                  <Link to={links.agency}>
                    <span className={classnames({'is-section': section === 'agency'})}>{'L\'agence'}</span>
                  </Link>
                </div>

                <div className='inline-navigation-cell'>
                  <Link to={links.contact}>
                    <span className={classnames({'is-section': section === 'contact'})}>{'Contact'}</span>
                  </Link>
                </div>
              </div>
            </div>
          </header>

          <section className='intro' ref='intro'>
            <div className='webgl-box'>
              <GeometricShapeAnimation
                deviceType={deviceType}
              />
            </div>

            <div className='logo-box'>
              <div
                className='logo'
                style={{
                  backgroundImage: `url(${phixlLogo})`
                }}
              />
            </div>
          </section>

          <section className='work' ref='work'>
            <h3 className={classnames('title', 'Nexa-Bold')}>
              {'Nos réalisations'}
            </h3>
            <div className='underline' />

            <p className={classnames('description', 'Nexa-Light')}>
              {'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor.through the cites of the word in classical literature, discovered the undoubtable source.'}
            </p>

            <div className='projects'>
              {
                deviceType === 'Desktop' ?
                (
                  <ProjectsSlider
                    projects={projects}
                    baseRoute='/project'
                  />
                ) :
                (
                  <ProjectsGrid
                    projects={projects}
                    numberByRow={2}
                    baseRoute='/project'
                  />
                )
              }
            </div>
          </section>

          <section className='agency' ref='agency'>
            <h3 className={classnames('title', 'Nexa-Bold')}>
              {'L\'agence'}
            </h3>
            <div className='underline' />

            <p className={classnames('description', 'Nexa-Light')}>
              {'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor.through the cites of the word in classical literature, discovered the undoubtable source.'}
            </p>

            <div className={classnames('underline', 'last-underline')} />

            <div className='team'>
              <Grid fluid>
                {
                  teammates.map((teammate, key) => {
                    return (
                      <Teammate
                        key={key}
                        shape={teammate.shape}
                        nameBrandSrc={teammate.nameBrandSrc}
                        nameBrandSizes={teammate[`nameBrandSizes${deviceType}`]}
                        job={teammate.job}
                        tagline={teammate.tagline}
                        linkedinLink={teammate.linkedinLink}
                        inverted={(key % 2 !== 0)}
                      />
                    );
                  })
                }
              </Grid>
            </div>
          </section>

          <section className='contact' ref='contact'>
            <h3 className={classnames('title', 'Nexa-Bold')}>
              {'Contact'}
            </h3>
            <div className='underline' />

            <p className={classnames('description', 'Nexa-Light')}>
              {'Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem.'}
            </p>

            <div className='mails'>
              <Grid fluid>
                <Row>
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <span className={classnames('mail-box', 'Roboto-Regular')}>
                      {'josue[at]phixl.fr'}
                    </span>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <span className={classnames('mail-box', 'Roboto-Regular')}>
                      {'jerome[at]phixl.fr'}
                    </span>
                  </Col>
                </Row>
              </Grid>
            </div>

            <div className='map'>
              <div className='map-infos'>
                <Grid>
                  <Row middle='xs'>
                    <Col xs={8} sm={8} md={8} lg={8}>
                      <span className={classnames('address', 'Roboto-Regular')}>
                        {'34 rue Périer, 92120 Montrouge - France'}
                      </span>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <a
                        href='https://www.google.fr/maps/place/34+Rue+P%C3%A9rier,+92120+Montrouge/@48.8143001,2.3138899,17z/data=!3m1!4b1!4m5!3m4!1s0x47e670ffabf9dfe5:0x93799543d0a0dcfa!8m2!3d48.8142966!4d2.3160839?hl=en'
                        target='_blank'
                        className={classnames('gmaps-button', 'Roboto-Regular')}
                      >
                        {'Ouvrir Gmaps'}
                      </a>
                    </Col>
                  </Row>
                </Grid>
              </div>
              <div className='map-illustration'>
              </div>
            </div>
          </section>

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

Page.propTypes = {
  section: PropTypes.string.isRequired,
  navigationIsOpen: PropTypes.bool.isRequired,
  navigationCloseFromButton: PropTypes.bool.isRequired,
  openNavigationAction: PropTypes.func.isRequired
};
