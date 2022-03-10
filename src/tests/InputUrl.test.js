import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
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
});
