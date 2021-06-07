import React, { Component } from 'react';
import './index.css';

class Form extends Component {
  render() { 
    return (
      <div className="class__form">
        <form action="">
          <fieldset>
            <legend>Form</legend>
          <div className="form__group">
            <input type="text" id="name" placeholder="Name"/>
          </div>
          <div className="form__group">
            <input type="text" id="name" placeholder="Email"/>
          </div>
          <div className="form__group">
            <button className="btn submit" type="submit">Save</button>
            <button className="btn clean" type="reset">Clean</button>
          </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
 
export default Form;