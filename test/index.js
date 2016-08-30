import testModifyTemplate from './test-modify-template';
import testNoOpts from './test-no-opts';
import testNoTag from './test-no-tag';

suite('test basic usage', () => {
  testNoOpts();
  testModifyTemplate();
  testNoTag();
});
