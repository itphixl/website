
import BTXParis                                   from '../components/btx-paris';
import Loveforlivres                              from '../components/loveforlivres';
import Occabike                                   from '../components/occabike';
import CGFFLP                                     from '../components/cgf-future-leaders-programme';

import btxparisCover                              from '../assets/images/btxparis-cover.jpg';
import loveforlivresCover                         from '../assets/images/loveforlivres-cover.jpg';
import occabikeCover                              from '../assets/images/occabike-cover.jpg';
import cgfFLPCover                                from '../assets/images/cgf-flp-cover.jpg';

import btxparisMockup                             from '../assets/images/btx-paris-mockup.png';
import loveforlivresMockup                        from '../assets/images/loveforlivres-mockup.png';
import occabikeMockup                             from '../assets/images/occabike-mockup.png';
import cgfMockup                                  from '../assets/images/cgf-mockup.png';

const projects = [
  {
    id: 'btx-paris',
    name: 'BTX Paris',
    type: 'Webdesign',
    cover: btxparisCover,
    mockup: btxparisMockup,
    color: '#fbb323',
    link: 'http://btxparis.fr/',
    component: BTXParis,
  },
  {
    id: 'loveforlivres',
    name: 'Love for Livres',
    type: 'Webdesign, Branding',
    cover: loveforlivresCover,
    mockup: loveforlivresMockup,
    color: '#00aeeb',
    link: 'http://loveforlivres.com/',
    component: Loveforlivres
  },
  {
    id: 'occabike',
    name: 'Occabike',
    type: 'Webdesign',
    cover: occabikeCover,
    mockup: occabikeMockup,
    color: '#adc318',
    link: 'http://occabike.fr/',
    component: Occabike
  },
  {
    id: 'cgf-future-leaders-programme',
    name: 'CGF | Future Leaders Programme',
    type: 'Print, Branding',
    cover: cgfFLPCover,
    mockup: cgfMockup,
    color: '#eb0764',
    link: '',
    component: CGFFLP
  }
];

export default projects;
