import gitRevSync from 'git-rev-sync';
import assert from 'assert';
import fs from 'fs';
import path from 'path';

import getProjectVersion from '../src/';

export default () => {
  test('we should get the git tag version and git commit', () => {
    const projectVersion = fs.readFileSync(path.join(__dirname, 'out-version-template'), 'utf8');

    const tag = gitRevSync.tag();
    const regexVersion = /.*(\d+)\.(\d)+\.(\d).*/;
    const resultVersion = regexVersion.exec(tag);
    const major = resultVersion[1];
    const minor = resultVersion[2];
    const patch = resultVersion[3];
    const version = `${major}.${minor}.${patch}`;

    const expected = `${version}`;

    assert.equal(projectVersion, expected, 'version string matched');
  });
};
