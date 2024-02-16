import { contactList } from "../../data/contactList"
import Contact from ".././Contact"
export const Contacts = () => {
  return (
    <div>
            {
                contactList.map(c => <Contact name={c.name} email={c.email} phone={c.phone} gender = { c.gender } contacted={c.contacted}/>)
            }
    </div>
  )
}
