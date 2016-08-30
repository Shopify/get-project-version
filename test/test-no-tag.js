import gitRevSync from 'git-rev-sync';
import assert from 'assert';
import fs from 'fs';
import path from 'path';

import getProjectVersion from '../src/';

export default () => {
  test('we should get version from package.json if tag is not a version numbers', () => {
    const projectVersion = getProjectVersion({
      tag: 'this will cause tag to not be a proper version number and read from package.json instead'
    });

    const version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')).version;
    const commit = gitRevSync.short();
    const expected = `Version: ${version} Commit: ${commit}`;

    assert.equal(projectVersion, expected, 'version string matched');
  });
};
