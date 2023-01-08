import * as React from 'react'
import Greeting from "../components/greeting"

// Rendering the <Greeting> component
const SayHello = () => {
    return (
        <div>
            <Greeting name="Megan" />
            <Greeting name="Obinna" />
            <Greeting name="Generosa" />
        </div>
    )
}
export const Head = () => <Title>Say Hello!</Title>
export default SayHello
