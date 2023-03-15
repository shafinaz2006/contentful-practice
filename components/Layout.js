const Layout = ({children}) => {
  return (
    <div className="page">
      <header>
        <h2>Contentful Practice</h2>
      </header>
      <div>
        {children}
      </div>
      <footer>Contact @shafinaz2006@gmail.com for details</footer>
    </div>
  )
}

export default Layout;