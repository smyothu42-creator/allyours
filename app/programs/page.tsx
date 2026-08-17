import { PageStub } from '@/components/page-stub'

export const metadata = { title: 'Programs — allyours' }

export default function Page() {
  return (
    <PageStub
      kicker="Programs"
      title="Peekaboo, and the two ways into it."
      body="The full program page: what Peekaboo is, how the two specializations differ, when the next cohort opens, and the application itself."
      sections={[
        'Peekaboo — what it is, who it is for, how a cohort runs',
        'Literature Arts — curriculum, mentors, what you leave with',
        'Design Studies — curriculum, mentors, what you leave with',
        'Events & showcase',
        'Cohort gallery',
        'Application form (the conversion point for Goal 1)',
        'FAQ — cost, language, time commitment, eligibility',
      ]}
    />
  )
}
