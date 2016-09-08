import gitRevSync from 'git-rev-sync';
import assert from 'assert';
import fs from 'fs';
import path from 'path';

export default () => {
  test('we should get the git tag version and git commit', () => {
    const projectVersion = fs.readFileSync(path.join(__dirname, 'out-version'), 'utf8');

    const tag = gitRevSync.tag();
    const commit = gitRevSync.short();
    const regexVersion = /.*(\d+)\.(\d)+\.(\d).*/;
    const resultVersion = regexVersion.exec(tag);
    const major = resultVersion[1];
    const minor = resultVersion[2];
    const patch = resultVersion[3];
    const version = `${major}.${minor}.${patch}`;

    const expected = `Version: ${version} Commit: ${commit}`;

    assert.equal(projectVersion, expected, 'version string matched');
  });
};
