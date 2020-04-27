// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils';
import Rocket from './Rocket';
import About from './About.vue';

const feature = loadFeature('src/views/rocket.feature');

defineFeature(feature, (test) => {
  test('Launching a SpaceX rocket', ({ given, when, then }) => {
    let rocket;
    const wrapper = mount(About);

    given('I am Elon Musk attempting to launch a rocket into space', () => {
      rocket = new Rocket();
    });

    when('I launch the rocket', () => {
      rocket.launch();
    });

    then('the rocket should end up in space', () => {
      // eslint-disable-next-line no-undef
      expect(rocket.isInSpace).toBe(true);
      // eslint-disable-next-line no-undef
      expect(wrapper.html()).toContain('<h1>This is an about page</h1>');
    });

    then('the booster(s) should land back on the launch pad', () => {
      // eslint-disable-next-line no-undef
      expect(rocket.boostersLanded).toBe(true);
    });

    then('nobody should doubt me ever again', () => {
      // eslint-disable-next-line no-undef
      expect('people').not.toBe('haters');
    });
  });
});
