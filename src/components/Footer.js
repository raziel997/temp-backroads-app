import Menu from "./Menu"
import Social from "./Social"

const Footer = () => {
  return (
        <footer className="section footer">
      <ul className="footer-links">
        <Menu className="footer-link"/>
      </ul>
      <ul className="footer-icons">
        <Social className="footer-icon" />
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer