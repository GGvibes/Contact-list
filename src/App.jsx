import  { useState } from 'react';
import ContactList from "./components/ContactList";
import SelectedContact from './components/SelectedContact';


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div><SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId}></SelectedContact></div>
      ) : (
        <ContactList  setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}

