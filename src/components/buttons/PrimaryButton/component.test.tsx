import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Component from './component';

let body: RenderResult;

const props = {
  label: 'This is a test',
};

describe('<PrimaryButton />', () => {
  beforeEach(() => {
    body = render(
      <Component
        label={props.label}
        onClick={() => {
          console.log('test');
        }}
      />,
    );
  });

  it('contains correct label', () => {
    expect(body.getByText(props.label)).toBeInTheDocument();
  });
});
