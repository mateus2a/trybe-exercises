import React, { Component } from 'react';

class File extends Component {
  render() { 
    const { value, handleInputChange } = this.props;
    
    return ( 
      <label>
        Arquivo:
        <input    
          name="updateAFile"
          type="file"
          value={value}
          onChange={handleInputChange} 
        />
    </label>
    );
  }
}
 
export default File;