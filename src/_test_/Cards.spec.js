import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Cards from '../features/Card/Cards';

it('Cards page rendering', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Cards />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
