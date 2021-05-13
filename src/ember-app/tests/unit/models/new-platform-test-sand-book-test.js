import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-test-sand-book', 'Unit | Model | new-platform-test-sand-book', {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-test-sand-author',
    'model:new-platform-test-sand-book',
    'model:new-platform-test-sand-country',
    'model:new-platform-test-sand-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
