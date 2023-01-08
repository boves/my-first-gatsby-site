// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <h1>About Me</h1>
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm Daiv. I made this site to learn how to 
                make new sites from scratch using Gatsby.
            </p>
        </main>
    )
}
export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
