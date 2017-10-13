const jobInfo = {
  companyInfo: 'Highly successful company',
  serverSideStack: 'Massive and modern platform (.NET 4.6.2 codebase is considered the \'ancient legacy stuff\')',
  clientSideStack: 'React/Redux',
  companyCulture: 'The team value TDD (they can tell you test coverage on both legacy and new code with single-digit percentage precision'
}

const emailTo = console.log

const hasSkill = (skill, value) => (skillset) => skillset.includes(skill) ? value : 0

const mustHaves = [
  hasSkill('NET Core 1.0+', 1),
  hasSkill('React/Redux experience (commercial or recreational)', 1),
  hasSkill('Cloud computing (preferably MS Azure', 1),
  hasSkill('TDD (what\'s your test coverage on new code like atm?)', 1),
  hasSkill('Understanding of time/space complexity (you will be interrogated on this)', 1)
]

const bonusRound = [
  hasSkill('Fable, Elm or Reason', 2),
  hasSkill('Node, Express and Meteor', 2)
]

const skillset = [
  'React/Redux experience (commercial or recreational)',
  'TDD (what\'s your test coverage on new code like atm?)',
  'Understanding of time/space complexity (you will be interrogated on this)',
  'Node, Express and Meteor',
  'Fable, Elm or Reason'
]

const rating = [...mustHaves, ...bonusRound]
  .reduce((tally, skill) => tally + skill(skillset), 0)

if (rating >= 5) {
  emailTo('harold@justdigitalpeople.com.au')
} else {
  console.log('Keep trying!')
}