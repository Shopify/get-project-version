import testCliDefault from './test-cli-default';
import testCliTemplate from './test-cli-template';
import testModifyTemplate from './test-modify-template';
import testNoOpts from './test-no-opts';
import testNoTag from './test-no-tag';

suite('test basic usage', () => {
  testNoOpts();
  testModifyTemplate();
  testNoTag();
});

suite('test cli', () => {
  testCliDefault();
  testCliTemplate();
});
