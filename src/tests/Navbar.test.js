import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('Snapshot test', () => {
    const navbar = renderer.create(
      <Navbar />,
    )
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
