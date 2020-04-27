import { mount } from '@vue/test-utils';
import About from './About.vue';

// const wrapper = mount(About);

// // eslint-disable-next-line no-undef
// test('has blash class', () => {
//   // eslint-disable-next-line no-undef
//   expect(wrapper.contains('.about').toBe(true));
// });

// eslint-disable-next-line no-undef
describe('About', () => {
  const wrapper = mount(About);

  // eslint-disable-next-line no-undef
  it('renders the correct markup', () => {
    // eslint-disable-next-line no-undef
    expect(wrapper.html()).toContain('<h1>This is an about page</h1>');
  });
});
