import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-test-sand-book', 'Unit | Serializer | new-platform-test-sand-book', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:new-platform-test-sand-book',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
