import assert from 'assert';
import fs from 'fs';
import path from 'path';

export default () => {
  test('new no commit message should be used', () => {
    const projectVersion = fs.readFileSync(path.join(__dirname, 'out-no-commit-message'), 'utf8');

    const version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')).version;

    const expected = `Version: ${version} Commit: 0-commits`;

    assert.equal(projectVersion, expected, 'version string matched');
  });
};
