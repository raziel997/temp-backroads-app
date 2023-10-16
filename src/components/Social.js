import { socialLinks } from "../data"

const Social = (props) => {
    const className = props.className || "nav-icon"
  return (
   <>
    {socialLinks.map((link) => {
        
    return (<li key={link.id}>
        <a href={link.href} target="_blank" className={className} rel="noreferrer">
            <i className={link.icon}></i>
        </a>
    </li>)
    })}
   </>
  )
}
export default Social