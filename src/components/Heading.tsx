import { ReactElement } from "react"

type HeadingProps = {
    title: string
}



const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1>{title}</h1>
  //fx components return jsx.element, usually let ts infer the return type 
  // this example only an element is returned here so a more direct return type of ReactElement used  
}

export default Heading