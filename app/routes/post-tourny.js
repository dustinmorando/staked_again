import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('wsop');
  },
  event: function() {
    return this.store.findAll('eventName');
  }
});
