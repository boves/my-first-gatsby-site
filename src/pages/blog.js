import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle={"My Blog Posts"}>
            <p>My cool blog posts are right here: </p>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage