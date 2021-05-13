import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-test-sand-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-test-sand-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-test-sand-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-test-sand-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
