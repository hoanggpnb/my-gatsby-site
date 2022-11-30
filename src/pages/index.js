import * as React from "react"
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <>
      <h1>this is home page</h1>
      <Link to="/about">About</Link>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
