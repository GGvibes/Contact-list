/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(dummyContacts);
  console.log("Contacts: ", contacts);

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
                onClick={() => setSelectedContactId(contact.id)}
              ></ContactRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
