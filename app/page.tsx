import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 className='text-2xl underline'>Popular companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
          />
        <CompanionCard 
          id="456"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={30}
          color="#ffda6e"
          />
        <CompanionCard 
          id="789"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={15}
          color="#BDE7FF"
          />
      </section>
      <section className='home-section'>
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"/>
        <CTA />
      </section>
    </div>
  )
}

export default Page