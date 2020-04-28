import { mount } from '@vue/test-utils';
import { defineFeature, loadFeature } from 'jest-cucumber';

import Rocket from './Rocket';
import About from '../About.vue';

const feature = loadFeature('src/views/practice/rocket.feature');

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
      expect(rocket.isInSpace).toBe(true);
      // test dom tag
      expect(wrapper.html()).toContain('<h1>This is an about page</h1>');
    });

    then('the booster(s) should land back on the launch pad', () => {
      expect(rocket.boostersLanded).toBe(true);
    });

    then('nobody should doubt me ever again', () => {
      expect('people').not.toBe('haters');
    });
  });
});
