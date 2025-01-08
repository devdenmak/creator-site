import { DEFAULT_TITLE } from '@/app/_shared/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Home Page | ${DEFAULT_TITLE}`,
  description: 'Transform the Way Your Influencer Management Agency Operates',
}

export default function Home() {
  return <div className="container">page</div>
}
