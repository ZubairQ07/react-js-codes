import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import InputComponent from "./InputComponent";
function App() {
  const contacts = [
    {
      id: "1",
      name: "Zubair",
      email: "zubair@gmail.com",
    },
    {
      id: "2",
      name: "Rohan",
      email: "rohan@gmail.com",
    },
    {
      id: "3",
      name: "Ahad",
      email: "Ahad@gmail.com",
    },
    {
      id: "4",
      name: "Sufiyan",
      email: "sufiyan@gmail.com",
    },
    {
      id: "5",
      name: "Kamraan",
      email: "kamraan@gmail.com",
    },
  ];
  return (
    <div className='App'>
      <AddContact />
      <ContactList contacts={contacts} />
      <InputComponent/>
    </div>
  );
}

export default App;
