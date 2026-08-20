import { PageStub } from '@/components/page-stub'

export const metadata = { title: 'Donate | allyours' }

export default function Page() {
  return (
    <PageStub
      kicker="Donate"
      title="Keep every program free."
      body="The donation page. Keep this short and single-purpose. Every extra field here costs you donors."
      sections={[
        'Impact snapshot: what the money did last cohort',
        'Choose an amount (with what each amount buys)',
        'One-time or monthly',
        'Payment methods: local and international',
        'Where the money goes (a simple breakdown)',
        'Budget & progress reports',
        'Thank-you page (measure completion rate here)',
      ]}
    />
  )
}
