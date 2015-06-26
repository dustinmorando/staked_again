import DS from 'ember-data';

export default DS.Model.extend({
  tournamentName: DS.attr('string'),
  eventNumber: DS.attr('number'),
  buyIn: DS.attr('number'),
  eventName: DS.attr('string'),
  tournamentDate: DS.attr('date'),
});
