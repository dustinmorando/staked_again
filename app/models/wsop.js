import DS from 'ember-data';

export default DS.Model.extend({
  tournamentSeries: DS.attr('string'),
  eventNumber: DS.attr('number'),
  buyIn: DS.attr('number'),
  eventName: DS.attr('string'),
  eventDate: DS.attr('date'),
});
