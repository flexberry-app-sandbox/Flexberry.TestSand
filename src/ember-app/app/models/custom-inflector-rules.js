import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('language', 'Languages');
inflector.irregular('country', 'Countrys');
inflector.irregular('author', 'Authors');
inflector.irregular('book', 'Books');

export default {};
