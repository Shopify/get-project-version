import gitRevSync from 'git-rev-sync';
import assert from 'assert';
import fs from 'fs';
import path from 'path';

import getProjectVersion from '../src/';

export default () => {
  test('new no commit message should be used', () => {
    const noCommit = '0-commmits';
    const projectVersion = getProjectVersion({
      noCommit,
      ignoreGit: true,
    });

    const version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')).version;

    const expected = `Version: ${version} Commit: ${noCommit}`;

    assert.equal(projectVersion, expected, 'version string matched');
  });
};
