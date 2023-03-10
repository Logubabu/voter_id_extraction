import React from 'react';
import ReactDOM from 'react-dom';
import VoterSearch from './voter_search';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VoterSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});