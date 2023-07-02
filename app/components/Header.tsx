import Link from "next/link"
const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href='/'>VM HOME</Link>
            </div>
            <div className="links">
                <Link href='/about'>ABOUT</Link>
                <Link href='/login'>LOGIN</Link>
                <Link href='/'>LOGOUT</Link>
            </div>
        </div>
    </header>
    
  )
}

export default Header