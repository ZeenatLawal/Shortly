import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import InputUrl from '../components/InputUrl';

describe('InputUrl component', () => {
  test('Snapshot test', () => {
    const input = renderer.create(
      <Provider store={store}>
        <InputUrl />
      </Provider>,
    )
      .toJSON();
    expect(input).toMatchSnapshot();
  });

  test('render url input', () => {
    render(
      <Provider store={store}>
        <InputUrl />
      </Provider>,
    );

    const input = screen.getByTestId('url-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'url');
  });
});
