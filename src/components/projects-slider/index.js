/*
* ProjectsSlider component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';
import _                                from 'lodash';
import moment                           from 'moment';

import React                            from 'react';
import {findDOMNode}                    from 'react-dom';
import PropTypes                        from 'prop-types';
import {Link}                           from 'react-router-dom';

import * as dynamics                    from 'dynamics.js/lib/dynamics';

import stylesheet                       from './stylesheet.styl';

import ProjectsSlidershapes             from '../../assets/images/projects-slider-shapes.png';
import ProjectsSliderLeftNavControl     from '../../assets/images/projects-slider-left-navigation-control.png';
import ProjectsSliderRightNavControl    from '../../assets/images/projects-slider-right-navigation-control.png';

export default class ProjectsSlider extends React.Component {
  constructor(props) {
    super(props);

    this.slider = {
      index: 0
    };
  }

  changeSlide(nextIndex, direction) {
    const currentSliderItem = findDOMNode(this.refs[`slider-item-${this.slider.index}`]);
    const nextSliderItem = findDOMNode(this.refs[`slider-item-${nextIndex}`]);

    const currentSlide = findDOMNode(this.refs[`slider-item-mockup-${this.slider.index}`]);
    const nextSlide = findDOMNode(this.refs[`slider-item-mockup-${nextIndex}`]);

    const currentInfosSlide = findDOMNode(this.refs[`slider-item-infos-${this.slider.index}`]);
    const nextInfosSlide = findDOMNode(this.refs[`slider-item-infos-${nextIndex}`]);

    this.slider.index = nextIndex;

    const translateXValue = findDOMNode(this.refs['slider-box']).offsetWidth / 2;

    dynamics.animate(currentSlide, {
      opacity: 0,
      translateX: direction === 'right' ? translateXValue * -1 : translateXValue,
      rotateZ: direction === 'right' ? -10 : 10
    }, {
      type: dynamics.spring,
			duration: 800,
			friction: 144,
      frequency: 140,
      complete: () => {
        dynamics.css(currentSliderItem, {visibility: 'hidden'});
        dynamics.css(currentSlide, {opacity: 0, visibility: 'hidden'});
      }
    });

    dynamics.animate(currentInfosSlide, {
      opacity: 0,
      translateX: direction === 'right' ? -250 : 250
    }, {
      type: dynamics.bezier,
      points: [{'x':0,'y':0,'cp':[{'x':0.2,'y':1}]},{'x':1,'y':1,'cp':[{'x':0.3,'y':1}]}],
      duration: 400,
      complete: () => {
        dynamics.css(currentInfosSlide, {opacity: 0, visibility: 'hidden'});
      }
    });

    dynamics.css(nextSliderItem, {visibility: 'visible'});
    dynamics.css(nextSlide, {
      opacity: 0,
      visibility: 'visible',
      translateX: direction === 'right' ?  translateXValue : translateXValue * -1,
      rotateZ: direction === 'right' ? 10 : -10
    });

    dynamics.css(nextInfosSlide, {
      opacity: 0,
      visibility: 'visible',
      translateX: direction === 'right' ? 250 : -250
    });

    dynamics.animate(nextSlide, {
      opacity: 1,
      translateX: 0,
      rotateZ: 0
    }, {
      type: dynamics.spring,
			duration: 800,
			friction: 144,
      frequency: 140
    });

    dynamics.animate(nextInfosSlide, {
      opacity: 1,
      translateX: 0
    }, {
      type: dynamics.bezier,
      points: [{'x':0,'y':0,'cp':[{'x':0.2,'y':1}]},{'x':1,'y':1,'cp':[{'x':0.3,'y':1}]}],
      duration: 400
    });
  }

  prevProjectButtonDidClicked() {
    const {projects} = this.props;
    const prevIndex = this.slider.index > 0 ? this.slider.index - 1 : projects.length - 1;

    this.changeSlide(prevIndex, 'left');
  }

  nextProjectButtonDidClicked() {
    const {projects} = this.props;
    const nextIndex = this.slider.index < projects.length - 1 ? this.slider.index + 1 : 0;

    this.changeSlide(nextIndex, 'right');
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {projects, baseRoute} = this.props;

    return (
      <div className='projects-slider'>
        <div
          className='slider-box'
          style={{backgroundImage: `url(${ProjectsSlidershapes})`}}
          ref='slider-box'
        >
            {
              projects.map((project, key) => {
                return (
                  <div
                    className='slider-item'
                    ref={`slider-item-${key}`}
                    key={key}
                  >
                    <div
                      className={classnames('slider-item-mockup', `slider-item-mockup-${key}`)}
                      ref={`slider-item-mockup-${key}`}
                    >
                      <Link
                        to={{
                          pathname: `${baseRoute}/${project.id}`,
                          state: {
                            modal: true
                          }
                        }}
                      >
                        <div
                          className='mockup-laptop'
                          style={{
                            backgroundImage: `url(${project.mockup})`
                          }}
                        />
                      </Link>
                    </div>

                    <div
                      className={classnames('slider-item-infos', `slider-item-infos-${key}`)}
                      ref={`slider-item-infos-${key}`}
                    >
                      <div className='slider-item-infos-content'>
                        <span className={classnames('name', 'Nexa-Bold')}>
                          {project.name}
                        </span>

                        <div className='dash' />

                        <span className={classnames('type', 'Nexa-Light')}>
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            }

            <div className='slider-navigation-controls-box'>
              <div className='slider-navigation-controls'>
                <a
                  href='#'
                  className={classnames('navigation-control', 'navigation-control-left')}
                  style={{
                    backgroundImage: `url(${ProjectsSliderLeftNavControl})`
                  }}
                  onClick={(e) => {e.preventDefault(); this.prevProjectButtonDidClicked()}}
                />
                <a
                  href='#'
                  className={classnames('navigation-control', 'navigation-control-right')}
                  style={{
                    backgroundImage: `url(${ProjectsSliderRightNavControl})`
                  }}
                  onClick={(e) => {e.preventDefault(); this.nextProjectButtonDidClicked()}}
                />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

ProjectsSlider.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  baseRoute: PropTypes.string.isRequired
};
