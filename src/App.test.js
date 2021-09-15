import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/ >', () => {
  test('renders header', () => {
    render(<App />);
    const ele = screen.queryByText('Pokemon Search');
    expect(ele).toBeInTheDocument();
  });

  // test('xxx', () => {
  //   render(<App/>);
  //   const buttonEle = screen.getByC
  // });
  // don't know what to test???
});
