/* Scala Developer
=====

## A chance to build microservices in their purest form */

const jobInfo = {
  companyInfo: 'They help produce some of the coolest content on the internet in 2018',
  serverSideStack: 'Scala and Haskell microservices',
  clientSideStack: 'JavaScript, TypeScript and Reason',
  companyCulture: 'This group value collaboration and innovation on route to kicking major ass and taking many names'
}

const emailTo = console.log

const hasSkill = (skill, value) => (skillset) => skillset.includes(skill) ? value : 0

const mustHaves = [
  hasSkill('Haskell or Scala', 1),
  hasSkill('TypeScript', 1),
  hasSkill('Cloud computing exposure', 1),
  hasSkill('Understanding of microservices architecture', 1),
]

const bonusRound = [
  hasSkill('PHP', 2),
  hasSkill('ReasonML', 2)
]

const skillset = [
  'Haskell or Scala',
  'TypeScript',
  'Cloud Computing experience',
  'Understanding of microservices architecture',
  'PHP',
  'ReasonML',
]

const rating = [...mustHaves, ...bonusRound]
  .reduce((tally, skill) => tally + skill(skillset), 0)

if (rating >= 5) {
  emailTo('harold@justdigitalpeople.com.au')
} else {
  console.log('Keep trying!')
}

/* See something dumb or incorrect in one of my ads? Let me know! Constructive criticism is always appreciated.

If you have an active GitHub, GitLab, BitBucket or Stack Overflow profile include a link because I want to see it!

**Harold Liu**</br>
**ph/txt:** 0400 659 332 | **email:** harold@justdigitalpeople.com.au</br>
**Twitter:** @theharold9000</br>
**Youtube:** <https://www.youtube.com/user/justdigitalpeople></br>
**Instagram:** justdigitalpeople</br>
**GitHub:** theharold9000</br> */