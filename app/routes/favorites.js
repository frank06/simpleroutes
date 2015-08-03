import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{ title: 'Test 1' }, { title: 'Test 2' }];
  }
});