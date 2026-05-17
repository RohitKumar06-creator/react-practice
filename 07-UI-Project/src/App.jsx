import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
      intro:
        "Experienced business strategist helping companies improve customer engagement and accelerate digital transformation initiatives.",
      tag: "Business Consultant",
    },

    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
      intro:
        "Creative marketing professional specializing in branding, campaign management, and data-driven growth strategies.",
      tag: "Marketing Manager",
    },

    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
      intro:
        "Senior software engineer focused on building scalable applications and modern user-friendly digital experiences.",
      tag: "Software Engineer",
    },
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
