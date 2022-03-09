import renderer from 'react-test-renderer';
import HeroHeader from '../components/HeroHeader';

describe('HeroHeader component', () => {
  test('Snapshot test', () => {
    const header = renderer.create(
      <HeroHeader />,
    )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
