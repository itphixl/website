/*
* GeometricShapeAnimation component
* author: Aurélien Dupays-Dexemple
*/

import classnames                       from 'classnames';

import React                            from 'react';
import PropTypes                        from 'prop-types';

import * as THREE                       from 'three';

import stylesheet                       from './stylesheet.styl'

export default class GeometricShapeAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.WebGLAssets = {
      sizes: null,
      framerate: 1000 / 60,
      camera: null,
      scene: null,
      sceneElement: null,
      renderer: null,
      renderInterval: null,
      particles: {
        items: [],
        sizes: {
          x: 5,
          y: 5
        },
        limit: 1000,
        count: 10,
        color: '#77FCAC'
      }
    };
  }

  updateSizes () {
    this.WebGLAssets.sizes = {
      Smartphone: {
        width: window.innerWidth - (7 * 2),
        height: 274
      },
      Tablet: {
        width: window.innerWidth - (30 * 2),
        height: 512
      },
      Desktop: {
        width: window.innerWidth,
        height: 200
      }
    }
  }

  updateCanvas() {
    const {camera, renderer, sizes} = this.WebGLAssets;

    const {deviceType} = this.props;
    const sceneSizes = sizes[deviceType];

    camera.aspect = sceneSizes.width / sceneSizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sceneSizes.width, sceneSizes.height);

    this.WebGLAssets.renderInterval = window.setInterval(() => {
      this.updateScene();
    });
  }

  updateParticles() {
    const {camera, particles} = this.WebGLAssets;

    particles.items.forEach(function(particle) {
      particle.position.z += (40 * 0.05);
      camera.rotation.z += 0.00002;

      if (particle.position.z > particles.limit * 2) {
        particle.scale.x = particle.scale.y = 1;

        particle.position.z -= particles.limit * 2;
				particle.position.x = Math.random() * particles.limit - particles.limit / 2;
				particle.position.y = Math.random() * particles.limit - particles.limit / 2;
      }

      particle.scale.x = particle.scale.y = particle.position.z / particles.limit * 2;
    });
  }

  updateScene() {
    const {renderer, scene, camera} = this.WebGLAssets;

    this.updateParticles();
    renderer.render(scene, camera);
  }

  renderParticles() {
    const {scene, particles, sizes} = this.WebGLAssets;

    var index = 0;

    for (var zPos = -Math.abs(particles.limit); zPos < particles.limit; zPos += particles.count) {

      const geometry = (index % 4 === 0 ? new THREE.CylinderGeometry(0, 3, 6, 4, false) : new THREE.BoxGeometry(6, 6, 6) );
      const material = new THREE.MeshBasicMaterial({wireframe: true, color: particles.color});
      const particle = new THREE.Mesh(geometry, material);

      scene.add(particle);

      particle.position.x = Math.random() * particles.limit - particles.limit / 2;
      particle.position.y = Math.random() * particles.limit - particles.limit / 2;

      particle.position.z = zPos;
			particle.scale.x = particle.scale.y = 1;

      scene.add(particle);

      particles.items.push(particle);
      index = index + 1;
    }
  }

  renderScene() {
    const {WebGLAssets} = this;

    const {deviceType} = this.props;
    const sceneSizes = WebGLAssets.sizes[deviceType];

    WebGLAssets.camera = new THREE.PerspectiveCamera(100, sceneSizes.width / sceneSizes.height, 1, 4000);
    WebGLAssets.camera.position.z = WebGLAssets.particles.limit * 2;

    WebGLAssets.scene = new THREE.Scene();
    WebGLAssets.scene.background = new THREE.Color(0xffffff);

    WebGLAssets.scene.add(WebGLAssets.camera);

    WebGLAssets.renderer = (window.WebGLRenderingContext ? new THREE.WebGLRenderer({antialias: true}) : new THREE.CanvasRenderer());
    WebGLAssets.renderer.setSize(sceneSizes.width, sceneSizes.height);

    WebGLAssets.sceneElement = this.refs['geometric-shape-animation-div'];
    WebGLAssets.sceneElement.appendChild(WebGLAssets.renderer.domElement);

    this.renderParticles();

    WebGLAssets.renderInterval = window.setInterval(() => {
      this.updateScene();
    });
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  componentWillUpdate() {
    this.updateSizes();
    window.clearInterval(this.WebGLAssets.renderInterval);
  }

  componentWillMount() {
    this.updateSizes();
    window.clearInterval(this.WebGLAssets.renderInterval);
  }

  componentDidMount() {
    this.renderScene();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.deviceType !== this.props.deviceType;
  }

  render() {
    const {deviceType} = this.props;
    const sceneSizes = this.WebGLAssets.sizes[deviceType];

    return (
      <div
        className='geometric-shape-animation'
        style={{
          width: sceneSizes.width,
          height: sceneSizes.height
        }}
        ref='geometric-shape-animation-div'
      />
    );
  }
}

GeometricShapeAnimation.propTypes = {
  deviceType: PropTypes.string.isRequired
}
