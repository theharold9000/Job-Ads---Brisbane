const jobInfo = {
  companyInfo: 'Highly successful and popular multi-national brand',
  serverSideStack: 'Dockerized micro-services, built in Java 8',
  clientSideStack: 'Angular/TypeScript',
  companyCulture: 'A company that solves global-scale technical problems and values innovation'
}

const emailTo = console.log

const hasSkill = (skill, value) => (skillset) => skillset.includes(skill) ? value : 0

const mustHaves = [
  hasSkill('Core Java 7, 8 or 9', 1),
  hasSkill('Spring Boot or something similar', 1),
  hasSkill('Cloud computing (preferably AWS)', 1),
  hasSkill('TDD (what\'s your test coverage on new code like atm?)', 1),
]

const bonusRound = [
  hasSkill('Fable, Elm or Reason', 2),
  hasSkill('Docker, Kubernetes or similar technologies', 2)
]

const skillset = [
  'Core Java 7, 8 or 9',
  'Spring Boot or something similar',
  'TDD (what\'s your test coverage on new code like atm?)',
  'Node, Express and Meteor',
  'Fable, Elm or Reason',
]

const rating = [...mustHaves, ...bonusRound]
  .reduce((tally, skill) => tally + skill(skillset), 0)

if (rating >= 5) {
  emailTo('harold@justdigitalpeople.com.au')
} else {
  console.log('Keep trying!')
}
/*
See something dumb or incorrect in one of my ads? Let me know! Constructive criticism is always appreciated.

If you have an active GitHub, GitLab, BitBucket or Stack Overflow profile include a link or follow me because I want to see it!

**Harold Liu**</br>
**ph/txt:** 0400 659 332 | **email:** harold@justdigitalpeople.com.au</br>
**Twitter:** @theharold9000</br>
**Youtube:** https://www.youtube.com/user/justdigitalpeople</br>
**Instagram:** justdigitalpeople</br>
**GitHub:** theharold9000</br>
*/