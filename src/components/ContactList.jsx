/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";



export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div className="contactList">
      <h3>Contact List</h3>
      <p>Click on the contacts for more info</p>
      <table>
        <thead>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId}
              ></ContactRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
