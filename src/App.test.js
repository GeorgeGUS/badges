import React from 'react';
import ReactDOM from 'react-dom';
import SheetA4 from './components/SheetA4';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SheetA4 />, div);
});
