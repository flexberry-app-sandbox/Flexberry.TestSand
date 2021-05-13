import { Serializer as CountrySerializer } from
  '../mixins/regenerated/serializers/new-platform-test-sand-country';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CountrySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
