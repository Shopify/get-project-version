import assert from 'assert';
import fs from 'fs';
import path from 'path';

export default () => {
  test('we should get the git tag version and git commit', () => {
    const projectVersion = fs.readFileSync(path.join(__dirname, 'out-version-template'), 'utf8');

    const version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')).version;

    const expected = `${version}`;

    assert.equal(projectVersion, expected, 'version string matched');
  });
};
