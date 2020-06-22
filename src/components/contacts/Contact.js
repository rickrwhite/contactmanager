import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

//import "./contact.css";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  // Add the deleteClickHandler property at the bottom
  onDeleteClick = async (id, dispatch) => {
    // console.log("clicked");
    // this.props.deleteClickHandler();

    //Make API call to back end

    // axios
    //   .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((res) => dispatch({ type: "DELETE_CONTACT", payload: id }));

    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
    // dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  // state = {};

  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  // onShowClick() {
  //   console.log("Hello World");
  // }
  // Use 'this' to bind to something that is not part of Component
  // onShowClick = (id, e) => {
  //   console.log(id);
  // };

  render() {
    // Alternately, we could use const to get the properties first
    // and then use the names in the property names in the tags below..
    //Ex. const {name, email, phone} = this.props
    //    <h4>{name}</h4/>
    //    <li>Email:{email}</li>
    //    <li>Phone:{phone}</li>
    // const { contact } = this.props;
    // const { showContactInfo } = this.state;

    //or add
    //this.props.contact and change the objects to just name, email and phone

    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.onShowClick}
                  //   //onClick={this.onShowClick.bind(this, 1)}
                  className="icon-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="icon-remove"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="icon-pencil"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                    }}
                  ></i>
                </Link>
              </h4>
              {/* if true, show info else hide */}
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
      // <div className="card card-body mb-3">
      //   <h4>
      //     {name}
      //     {/* <i
      //       onClick={() => console.log("Hello")}
      //       className="icon-sort-down"
      //     ></i> */}
      //     <i
      //       onClick={this.onShowClick}
      //       //   //onClick={this.onShowClick.bind(this, 1)}
      //       className="icon-sort-down"
      //       style={{ cursor: "pointer" }}
      //     ></i>
      //     <i
      //       className="icon-remove"
      //       style={{ cursor: "pointer", float: "right", color: "red" }}
      //       onClick={this.onDeleteClick}
      //     ></i>

      //     {/* <i onClick={() =>
      //         this.setState({ showContactInfo: !this.state.showContactInfo })
      //       } */}
      //     {/* //onClick={this.onShowClick.bind(this, 1)}
      //       className="icon-sort-down"
      //     ></i> */}
      //   </h4>
      //   {/* if true, show info else hide */}
      //   {showContactInfo ? (
      //     <ul className="list-group">
      //       <li className="list-group-item">Email: {email}</li>
      //       <li className="list-group-item">Phone: {phone}</li>
      //     </ul>
      //   ) : null}
      //   {/* // <ul className="list-group">
      //   //   <li className="list-group-item">Email: {email}</li>
      //   //   <li className="list-group-item">Phone: {phone}</li>
      //   // </ul> */}
      // </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // deleteClickHandler: PropTypes.func.isRequired,
};

export default Contact;
