// ***** old TS method before React18*******
//import React from "react";

//React.FC not needed anymore in TS
// export const Section: React.FunctionComponent<{ title: string }> = ({ children, title }) => {
//     return (
//         <section>
//             <h2>{title}</h2>
//             <p> {children} </p>
//         </section>
//     )
// } 

//previously could do the above without explicitly giving type for children

import { ReactNode } from "react";

type SectionProps = {
    title?: string,
    children: ReactNode
    //explicitly give type for children, corresponds to many types because don't know what children will be 
    // Note:  children is not props, it goes between the h2 and p. 
}


export const Section = ({ children, title = "My subheading" }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}
// default value for title if title not provided
//note: do not confuse with default props (which will be deprecated soon) ex Section.defaultProps = ____
