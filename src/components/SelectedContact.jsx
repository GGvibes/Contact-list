/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  console.log("Contact: ", contact);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error("Error fetching contact: ", error);
      }
    }
    fetchSelectedContact();
  }, [selectedContactId]);


  return (
    <div  className="singleContact">
      <table>
        <thead>
          <tr>
            <th colSpan={"2"}>Contact</th>
          </tr>
        </thead>
        <tbody>
          {contact ? (
            <>
              <tr>
                <td>Name: </td>
                <td>{contact.name}</td>
              </tr>
              <tr>
                <td>Username: </td>
                <td>{contact.username}</td>
              </tr>
              <tr>
                <td>Email: </td>
                <td>{contact.email}</td>
              </tr>
              <tr>
                <td>Phone: </td>
                <td>{contact.phone}</td>
              </tr>
              <tr>
                <td>Website: </td>
                <td>{contact.website}</td>
              </tr>
              <tr>
                <td>Address: </td>
                <td>
                  {contact.address.street} {contact.address.suite},{" "}
                  {contact.address.city}, {contact.address.zipcode}
                </td>
              </tr>
              <tr>
                <td>Company: </td>
                <td>{contact.company.name}</td>
              </tr>
              <tr>
                <td></td>
                <td>{contact.company.catchPhrase}</td>
              </tr>
              <tr>
                <td></td>
                <td>{contact.company.bs}</td>
              </tr>
            </>
          ) : (
            <tr>
              <td>Loading..</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={() => setSelectedContactId(null)} style={{ marginTop: "20px" }}>
        Back to Contact List
</button>
    </div>
  );
}
