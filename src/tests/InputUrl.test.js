import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('pass valid url to test url input field', () => {
    render(
      <Provider store={store}>
        <InputUrl />
      </Provider>,
    );

    const input = screen.getByTestId('url-input');
    const button = screen.getByTestId('button');
    userEvent.type(input, 'https://www.robinwieruch.de/react-testing-library/');

    expect(screen.getByTestId('url-input')).toHaveValue('https://www.robinwieruch.de/react-testing-library/');
    fireEvent.click(button);
    expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument();
  });
});
