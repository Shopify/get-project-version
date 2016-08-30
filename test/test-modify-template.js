import gitRevSync from 'git-rev-sync';
import assert from 'assert';

import getProjectVersion from '../src/';

export default () => {
  test('we should get a version string that looks different if we change the template', () => {
    const projectVersion = getProjectVersion({
      template: '{{version}} {{commit}}',
    });

    const tag = gitRevSync.tag();
    const commit = gitRevSync.short();
    const regexVersion = /.*(\d+)\.(\d)+\.(\d).*/;
    const resultVersion = regexVersion.exec(tag);
    const major = resultVersion[1];
    const minor = resultVersion[2];
    const patch = resultVersion[3];
    const version = `${major}.${minor}.${patch}`;

    const expected = `${version} ${commit}`;

    assert.equal(projectVersion, expected, 'version string matched');
  });
};
