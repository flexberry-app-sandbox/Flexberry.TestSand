import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import NewPlatformTestSandAuthorLForm from './forms/new-platform-test-sand-author-l';
import NewPlatformTestSandBookLForm from './forms/new-platform-test-sand-book-l';
import NewPlatformTestSandCountryLForm from './forms/new-platform-test-sand-country-l';
import NewPlatformTestSandLanguageLForm from './forms/new-platform-test-sand-language-l';
import NewPlatformTestSandAuthorEForm from './forms/new-platform-test-sand-author-e';
import NewPlatformTestSandBookEForm from './forms/new-platform-test-sand-book-e';
import NewPlatformTestSandCountryEForm from './forms/new-platform-test-sand-country-e';
import NewPlatformTestSandLanguageEForm from './forms/new-platform-test-sand-language-e';
import NewPlatformTestSandAuthorModel from './models/new-platform-test-sand-author';
import NewPlatformTestSandBookModel from './models/new-platform-test-sand-book';
import NewPlatformTestSandCountryModel from './models/new-platform-test-sand-country';
import NewPlatformTestSandLanguageModel from './models/new-platform-test-sand-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-test-sand-author': NewPlatformTestSandAuthorModel,
    'new-platform-test-sand-book': NewPlatformTestSandBookModel,
    'new-platform-test-sand-country': NewPlatformTestSandCountryModel,
    'new-platform-test-sand-language': NewPlatformTestSandLanguageModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-test-sand-country-l': {
            caption: 'new-platform-test-sand-country-l',
            title: 'new-platform-test-sand-country-l'
          },
          'new-platform-test-sand-book-l': {
            caption: 'new-platform-test-sand-book-l',
            title: 'new-platform-test-sand-book-l'
          },
          'new-platform-test-sand-author-l': {
            caption: 'new-platform-test-sand-author-l',
            title: 'new-platform-test-sand-author-l'
          },
          'new-platform-test-sand-language-l': {
            caption: 'new-platform-test-sand-language-l',
            title: 'new-platform-test-sand-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'new-platform-test-sand-author-l': NewPlatformTestSandAuthorLForm,
    'new-platform-test-sand-book-l': NewPlatformTestSandBookLForm,
    'new-platform-test-sand-country-l': NewPlatformTestSandCountryLForm,
    'new-platform-test-sand-language-l': NewPlatformTestSandLanguageLForm,
    'new-platform-test-sand-author-e': NewPlatformTestSandAuthorEForm,
    'new-platform-test-sand-book-e': NewPlatformTestSandBookEForm,
    'new-platform-test-sand-country-e': NewPlatformTestSandCountryEForm,
    'new-platform-test-sand-language-e': NewPlatformTestSandLanguageEForm
  },

});

export default translations;
