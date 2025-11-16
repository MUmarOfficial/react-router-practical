import { Link } from "react-router"

export const ContactNotFoundPage = () => {
  return <>
    <h1>Contact not found</h1>
    <Link to={'/contacts'}>Go to Contacts page</Link>
  </>
}