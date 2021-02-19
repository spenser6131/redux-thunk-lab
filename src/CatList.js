import React, { Component } from 'react';

class CatList extends Component {

  renderCats = () => {
    return this.props.catPics.map(pic => <img src={pic.url} key={pic.id} alt="cat pic" />)
  }

  render(){
    console.log(this.props);
    return (
      <div>
        {this.renderCats()}
      </div>
    )
  }
}

export default CatList