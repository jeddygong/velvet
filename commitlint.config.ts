// const commitTypes = [
//   'feat',
//   'fix',
//   'perf',
//   'style',
//   'docs',
//   'test',
//   'refactor',
//   'build',
//   'ci',
//   'chore',
//   'revert',
//   'wip',
//   'workflow',
//   'types',
// ];

// const typeRules = {
//   rules: {
//     'type-enum': [2, 'always', commitTypes],
//   },
//   value: () => null,
// };

module.exports = {
  extends: ['@commitlint/config-conventional'],
  // rules: {
  //   'type-empty': [0],
  //   'scope-case': [0],
  //   'subject-full-stop': [0, 'never'],
  //   'subject-case': [0, 'never'],
  //   'subject-empty': [2, 'never'],
  //   'body-leading-blank': [2, 'always'],
  //   'header-max-length': [0, 'always', 72],
  //   'type-enum': typeRules.rules['type-enum'],
  // },
};
