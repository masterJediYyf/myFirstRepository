import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from './hello';
import Index from './components/demo'

ReactDOM.render(
  <>
    <Index />
    <HelloComponent />
    tendo is good!
  </>,
  document.getElementById('root')
);
