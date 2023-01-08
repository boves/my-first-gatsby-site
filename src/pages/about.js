// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm Daiv. I made this site to learn how to 
                make new sites from scratch using Gatsby.
            </p>
        </Layout>
    )
}
export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
