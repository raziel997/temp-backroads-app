import { pageLinks } from "../data"

const Menu = (props) => {
    const className = props.className || "nav-link"
  return (
    <>
    {pageLinks.map((link) => {
          return (
            <li key={link.id}>
            <a href={link.href} className={className}> 
              {link.text}
            </a>
          </li>
          )})}
    </>
  )
}
export default Menu