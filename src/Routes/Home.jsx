import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'

const Home = () => {
  const {dentists} = useGlobalStates();
  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists?.map(dentist => (<Card key={dentist.id} id={dentist.id} username={dentist.username} name={dentist.name} />))}
      </div>
    </main>
  )
}

export default Home