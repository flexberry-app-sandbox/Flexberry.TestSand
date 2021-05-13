import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.books.caption'),
          title: i18n.t('forms.application.sitemap.books.title'),
          children: [{
            link: 'new-platform-test-sand-country-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-sand-country-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-sand-country-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'new-platform-test-sand-book-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-sand-book-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-sand-book-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'new-platform-test-sand-author-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-sand-author-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-sand-author-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'new-platform-test-sand-language-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-sand-language-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-sand-language-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})