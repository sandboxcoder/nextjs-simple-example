import './TableOfContents.css'
import Link from 'next/link'

function TableOfContents() {
  return (
    <div className="sidebar-container">
        <div className='sidebar'>
          <Link href="/">Home</Link>
          <br /><Link href="../dashboard/boardGame">Board Game</Link>
        </div>
    </div>
  )
}
export default TableOfContents