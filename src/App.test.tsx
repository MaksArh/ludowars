import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders', () => {
    const { getByText } = render(<App />);
    expect(getByText('LudoWars — empty shell')).toBeInTheDocument();
  });
});