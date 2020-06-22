import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

//state should ALWAYS be at the top!

class Contacts extends Component {
  // You may not need a constructor.  Instead, you could use "state = " and then the array.

  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: "John Doe",
  //         email: "jdoe@gmail.com",
  //         phone: "555-555-5555",
  //       },
  //       {
  //         id: 2,
  //         name: "Karen Williams",
  //         email: "kwilliams@gmail.com",
  //         phone: "222-222-2222",
  //       },
  //       {
  //         id: 3,
  //         name: "Henry Johnson",
  //         email: "hjohnson@gmail.com",
  //         phone: "555-555-6666",
  //       },
  //     ],
  //   };
  // }

  // The delete will now be handled in context.js

  // deleteContact = (id) => {
  //   // console.log("123");
  //   // console.log(id);/
  //   const { contacts } = this.state;

  //   const newContacts = contacts.filter((contact) => contact.id !== id);

  //   this.setState({
  //     contacts: newContacts,
  //   });
  // };

  render() {
    //from context.js

    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>
                List
              </h1>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  // Instead of passing individual objects, you can pass the entire thing as
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)
                  //}
                  // name={contact.name}
                  // email={contact.email}
                  // phone={contact.phone
                />
              ))}{" "}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // const { contacts } = this.state;
    // return (
    //   <div>
    //     {contacts.map((contact) => (
    //       <Contact
    //         key={contact.id}
    //         // Instead of passing individual objects, you can pass the entire thing as
    //         contact={contact}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //         // name={contact.name}
    //         // email={contact.email}
    //         // phone={contact.phone}
    //       />
    //     ))}
    //   </div>
    // );
  }
}

export default Contacts;
