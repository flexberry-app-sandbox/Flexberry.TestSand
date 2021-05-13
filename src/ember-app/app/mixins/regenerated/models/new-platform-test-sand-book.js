import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  capacity: DS.attr('number'),
  annotation: DS.attr('string'),
  agenda: DS.attr('string'),
  picturesAuthor: DS.attr('string'),
  reaction: DS.attr('string'),
  copyright: DS.attr('string'),
  libraryCode: DS.attr('string'),
  tags: DS.attr('string'),
  theme: DS.attr('string'),
  topic: DS.attr('string'),
  corrector: DS.attr('string'),
  format: DS.attr('string'),
  font: DS.attr('string'),
  publishDate: DS.attr('date'),
  bestseller: DS.attr('boolean'),
  author: DS.belongsTo('new-platform-test-sand-author', { inverse: null, async: false }),
  language: DS.belongsTo('new-platform-test-sand-language', { inverse: null, async: false }),
  country: DS.belongsTo('new-platform-test-sand-country', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  capacity: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.capacity.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  annotation: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.annotation.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  agenda: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.agenda.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  picturesAuthor: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.picturesAuthor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  reaction: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.reaction.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  copyright: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.copyright.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  libraryCode: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.libraryCode.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tags: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.tags.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  theme: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.theme.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  topic: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.topic.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  corrector: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.corrector.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  format: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.format.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  font: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.font.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  publishDate: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.publishDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  bestseller: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.bestseller.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  author: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  language: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.language.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  country: {
    descriptionKey: 'models.new-platform-test-sand-book.validations.country.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'new-platform-test-sand-book', {
    name: attr('Name', { index: 0 }),
    capacity: attr('Capacity', { index: 1 }),
    annotation: attr('Annotation', { index: 2 }),
    agenda: attr('Agenda', { index: 3 }),
    picturesAuthor: attr('Pictures author', { index: 4 }),
    reaction: attr('Reaction', { index: 5 }),
    copyright: attr('Copyright', { index: 6 }),
    libraryCode: attr('Library code', { index: 7 }),
    tags: attr('Tags', { index: 8 }),
    topic: attr('Topic', { index: 9 }),
    theme: attr('Theme', { index: 10 }),
    corrector: attr('Corrector', { index: 11 }),
    format: attr('Format', { index: 12 }),
    font: attr('Font', { index: 13 }),
    publishDate: attr('Publish date', { index: 14 }),
    bestseller: attr('Bestseller', { index: 15 }),
    language: belongsTo('new-platform-test-sand-language', 'Language', {
      name: attr('Name', { index: 17 })
    }, { index: 16 }),
    author: belongsTo('new-platform-test-sand-author', 'Author', {
      name: attr('Name', { index: 19 })
    }, { index: 18 }),
    country: belongsTo('new-platform-test-sand-country', 'Country', {
      name: attr('Name', { index: 21 })
    }, { index: 20 })
  });

  modelClass.defineProjection('BookL', 'new-platform-test-sand-book', {
    name: attr('Name', { index: 0 }),
    capacity: attr('Capacity', { index: 1 }),
    annotation: attr('Annotation', { index: 2 }),
    agenda: attr('Agenda', { index: 3 }),
    picturesAuthor: attr('Pictures author', { index: 4 }),
    reaction: attr('Reaction', { index: 5 }),
    copyright: attr('Copyright', { index: 6 }),
    libraryCode: attr('Library code', { index: 7 }),
    tags: attr('Tags', { index: 8 }),
    topic: attr('Topic', { index: 9 }),
    theme: attr('Theme', { index: 10 }),
    corrector: attr('Corrector', { index: 11 }),
    format: attr('Format', { index: 12 }),
    font: attr('Font', { index: 13 }),
    publishDate: attr('Publish date', { index: 14 }),
    bestseller: attr('Bestseller', { index: 15 }),
    language: belongsTo('new-platform-test-sand-language', 'Name', {
      name: attr('Name', { index: 16 })
    }, { index: -1, hidden: true }),
    author: belongsTo('new-platform-test-sand-author', 'Name', {
      name: attr('Name', { index: 17 })
    }, { index: -1, hidden: true }),
    country: belongsTo('new-platform-test-sand-country', 'Name', {
      name: attr('Name', { index: 18 })
    }, { index: -1, hidden: true })
  });
};
