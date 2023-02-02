import Link from 'next/link'

function TestComp() {
  return (
    <ul>
    <h1>Test??</h1>
      <li>
        <Link href="/myaccount">
          My Account
        </Link>
      </li>
      <li>
        <Link href="/firstpost">
          First - Post
        </Link>
      </li>
    </ul>
  )
}

export default TestComp