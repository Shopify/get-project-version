import fs from 'fs';
import path from 'path';

let packageJSON;

export default (opts) => {
  if (!packageJSON) {
    const pathPackageJSON = path.join(opts.cwd, 'package.json');

    try {
      packageJSON = JSON.parse(
        fs.readFileSync(pathPackageJSON, 'utf8')
      );
    } catch (error) {
      throw new Error(`Could not load package.json from ${pathPackageJSON}`);
    }
  }

  return packageJSON;
};
