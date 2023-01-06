import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"

import { useState } from 'react'
import List from "./components/List"

function App() {
  
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello"}/>
      <Section title={"Different Title"}>
        {/* Anything between tags will be considered children */}
        This is my section!
      </Section>

      {/* Passing down setState & children instead of passing count itself  */}
      <Counter setCount={setCount}>
        Count is {count}
      </Counter>
      <List items={["Coffee","BBT","Code"]}
            render={(item: string) => <span className="bold">{item}</span>}
            // Could render anything we want with this anonymous fx(p,div,heading or anything we want to display the list items with) 
      />
    </>
  )
}

export default App
