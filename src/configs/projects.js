
import BTXParis                                   from '../components/btx-paris';
import Loveforlivres                              from '../components/loveforlivres';
import Occabike                                   from '../components/occabike';
import CGFFLP                                     from '../components/cgf-future-leaders-programme';

import btxparisCover                              from '../assets/images/btxparis-cover.jpg';
import loveforlivresCover                         from '../assets/images/loveforlivres-cover.jpg';
import occabikeCover                              from '../assets/images/occabike-cover.jpg';
import cgfFLPCover                                from '../assets/images/cgf-flp-cover.jpg';

const projects = [
  {
    id: 'btx-paris',
    name: 'BTX Paris',
    type: 'Webdesign',
    cover: btxparisCover,
    color: '#fbb323',
    link: 'http://btxparis.fr/',
    component: BTXParis
  },
  {
    id: 'loveforlivres',
    name: 'Love for Livres',
    type: 'Webdesign, Branding',
    cover: loveforlivresCover,
    color: '#00aeeb',
    link: '',
    component: Loveforlivres
  },
  {
    id: 'occabike',
    name: 'Occabike',
    type: 'Webdesign',
    cover: occabikeCover,
    color: '',
    link: '',
    component: Occabike
  },
  {
    id: 'cgf-future-leaders-programme',
    name: 'CGF | Future Leaders Programme',
    type: 'Print, Branding',
    cover: cgfFLPCover,
    color: '',
    link: '',
    component: CGFFLP
  }
];

export default projects;
