import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  // You may not need a constructor.  Instead, you could use "state = " and then the array.

  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-555-5555",
        },
        {
          id: 2,
          name: "Karen Williams",
          email: "kwilliams@gmail.com",
          phone: "222-222-2222",
        },
        {
          id: 3,
          name: "Henry Johnson",
          email: "hjohnson@gmail.com",
          phone: "555-555-6666",
        },
      ],
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            // Instead of passing individual objects, you can pass the entire thing as
            contact={contact}
            // name={contact.name}
            // email={contact.email}
            // phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
