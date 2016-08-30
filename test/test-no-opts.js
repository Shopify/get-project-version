import gitRevSync from 'git-rev-sync';
import assert from 'assert';

import getProjectVersion from '../src/';

export default () => {
  test('we should get the git tag version and git commit', () => {
    const projectVersion = getProjectVersion();

    const tag = gitRevSync.tag();
    const commit = gitRevSync.short();
    const regexVersion = /.*(\d+)\.(\d)+\.(\d).*/;
    const resultVersion = regexVersion.exec(tag);
    const major = resultVersion[2];
    const minor = resultVersion[3];
    const patch = resultVersion[4];
    const version = `${major}.${minor}.${patch}`;

    const expected = `Version: ${version} Commit: ${commit}`;

    assert.equal(projectVersion, expected, 'version string matched');
  });
};
