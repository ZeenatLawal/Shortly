import renderer from 'react-test-renderer';
import Stats from '../components/Stats';

describe('Stats component', () => {
  test('Snapshot test', () => {
    const stats = renderer.create(
      <Stats />,
    )
      .toJSON();
    expect(stats).toMatchSnapshot();
  });
});
