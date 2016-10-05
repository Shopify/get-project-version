import testCliDefault from './test-cli-default';
import testCliTemplate from './test-cli-template';
import testCliNoCommit from './test-cli-no-commit';
import testModifyTemplate from './test-modify-template';
import testNoOpts from './test-no-opts';
import testNoTag from './test-no-tag';
import testNoCommit from './test-no-commit';

suite('test api', () => {
  testNoOpts();
  testModifyTemplate();
  testNoTag();
  testNoCommit();
});

suite('test cli', () => {
  testCliDefault();
  testCliTemplate();
  testCliNoCommit();
});
