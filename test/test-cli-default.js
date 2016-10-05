import gitRevSync from 'git-rev-sync';
import assert from 'assert';
import fs from 'fs';
import path from 'path';

export default () => {
  test('we should get the git tag version and git commit', () => {
    const projectVersion = fs.readFileSync(path.join(__dirname, 'out-version'), 'utf8');

    const commit = gitRevSync.short();
    const version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')).version;

    const expected = `Version: ${version} Commit: ${commit}`;

    assert.equal(projectVersion, expected, 'version string matched');
  });
};
