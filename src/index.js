import gitRevSync from 'git-rev-sync';

import getPackageJSON from './get-package-json';

/**
 *  This function will return the default version string appended to the comment header.
 *  The version number is generated based on the latest git-tag and git-version. If the
 *  git-tag is not a version number then the package.json version number maybe used
 *
 * @param  {Object} opts these are the options passed to the plugin. Mostly we use the package.json object for this function
 * @return {String}      formatted version string
 */
export default (opts) => {
  const options = Object.assign(
    {
      cwd: process.cwd(),
      template: 'Version: {{version}} Commit: {{commit}}',
    },
    opts
  );

  // Because commit and tag numbers will change for this module for testing purposes
  // we allow for passing in version and commit via opts. If this was not allowed then
  // most tests would fail once a new commit is made or this repo is tagged.
  // Fear not there's a test just to test this function.
  // this regex should match things like:
  // 30.1.2
  // 1.1.1-alpha etc
  // 10.1.2b
  const regexVersion = /.*(\d+)\.(\d)+\.(\d).*/;
  const regexVarVersion = /\{\{ *version *\}\}/i;
  const regexVarCommit = /\{\{ *commit *\}\}/i;
  const commit = options.commit || gitRevSync.short(options.cwd);
  const tag = options.tag || gitRevSync.tag(options.cwd);
  const resultVersion = regexVersion.exec(tag);
  let version;

  // if git tag does not have a version number read in from package.json
  if (resultVersion) {
    const major = resultVersion[1];
    const minor = resultVersion[2];
    const patch = resultVersion[3];

    version = `${major}.${minor}.${patch}`;
  } else {
    version = getPackageJSON(options).version;
  }

  return options.template.replace(regexVarVersion, version)
    .replace(regexVarCommit, commit);
};
