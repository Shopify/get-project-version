# get-project-version

This module will return the current project version string. The version string is made of the last git tag or package.json version (if no git tag exists) and the last commit hash.

## Table Of Contents

- [Installation](#installation)
- [Examples](#examples)
  + [Basic Usage](#example-basic-usage)
  + [Using Template](#example-using-template)
  + [Using CWD](#example-using-cwd)
- [API](#api)
  + [`const instance = getProjectVersion([options])`](#const-instance-getprojectversion-options)
- [CLI](#cli)
  + [`Basic Usage`](#cli-example-basic)
  + [`Using Template`](#cli-example-template)
  + [`Using CWD`](#cli-example-cwd)
- [License](http://github.com/Shopify/get-project-version/blob/master/LICENSE.md)

## Installation
```bash
$ npm install get-project-version
```

## Examples

#### Example - Basic Usage

The following is a basic example:

```javascript
import getProjectVersion from 'get-project-version';

const version = getProjectVersion();

console.log(version); // Version: 1.0.0 Commit: 081b152
```

#### Example - Using Template

This example shows how you can customize the output of `get-project-version` using a template string:

```javascript
import getProjectVersion from 'get-project-version';

const version = getProjectVersion({
  template: '{{version}}-{{commit}}'
});

console.log(version); // 1.0.0-081b152
```

#### Example - Using CWD

There are cases where you'd like to output a version string for a particular folder this can be done like this:

```javascript
import getProjectVersion from 'get-project-version';

const version = getProjectVersion({
  cwd: 'pathToProjectDir/'
});

console.log(version); // 1.0.0-081b152
```

## API

#### `const version = getProjectVersion([options]);`

Options you can pass `getProjectVersion`:
- `template` - An optional String which templates the output of `getProjectVersion`. Version will be injected into `{{version}}` and a shortened commit hash will be injected into `{{commit}}`. eg. `'{{version}}-{{commit}}'`
- `cwd` - An optional String. By default the current working directory will be `process.cwd()` you can modify this by passing a path. eg. `'pathToProjectDir/'`

## CLI

#### CLI Example - Basic

```bash
$ get-project-version
```

The above would output to stdout something like `Version: 1.0.0 Commit: 081b152`

#### CLI Example - Template

```bash
$ get-project-version --template '{{version}}-{{commit}}'
```

The above would output to stdout something like `1.0.0-081b152`

#### CLI Example - CWD

```bash
$ get-project-version --cwd pathToProjectDir/
```

The above would output a version string for `pathToProjectDir/`


## License

MIT, see [LICENSE.md](http://github.com/Shopify/get-project-version/blob/master/LICENSE.md) for details.

<img src="https://cdn.shopify.com/shopify-marketing_assets/builds/19.0.0/shopify-full-color-black.svg" width="200" />
