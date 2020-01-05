module.exports = {
  analyzeCommits: {
    parserOpts: {
      noteKeywords: [
        'BREAKING CHANGE',
        'BREAKING CHANGES',
        'BREAKING'
      ]
    },
    preset: 'angular',
    releaseRules: [
      {
        release: 'patch',
        scope: 'README',
        type: 'docs'
      },
      {
        release: 'patch',
        type: 'refactor'
      },
      {
        release: 'patch',
        type: 'style'
      }
    ]
  },
  branch: 'master',
  generateNotes: {
    parserOpts: {
      noteKeywords: [
        'BREAKING CHANGE',
        'BREAKING CHANGES',
        'BREAKING'
      ]
    },
    preset: 'angular',
    writerOpts: {
      commitsSort: [
        'subject',
        'scope'
      ]
    }
  },
  prepare: [
    '@semantic-release/git'
  ],
  publish: [
    '@semantic-release/github'
  ],
  verifyConditions: [
    '@semantic-release/github'
  ]
};
