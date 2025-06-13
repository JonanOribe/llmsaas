import CompanionCard from '@/components/companionCard'
import CompanionsList from '@/components/companionsList'
import CTA from '@/components/cta'
import { Button } from '@/components/ui/button'
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
          color="#ffda6e"
          />
      </section>
      <section className='home-section'>
        <CompanionsList/>
        <CTA />
      </section>
    </div>
  )
}

export default Page