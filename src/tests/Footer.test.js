import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('Snapshot test', () => {
    const footer = renderer.create(
      <Footer />,
    )
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
});
