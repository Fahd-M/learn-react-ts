import { ReactNode } from 'react'


type CounterProps = {
    setCount:React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const Counter = ({ setCount, children }: CounterProps) => {
    // EXAMPLE WITH USESTATE IN THE CHILD COMPONENT
    // const [count, setCount] = useState<number | null>(null)
    //const [count, setCount] = useState<number>(1)
    // <number> would be implied anyways


  return (
    <>
        <h1> {children} </h1>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setCount(prev => prev + -1)}>-</button>

    </>
    )
}

export default Counter