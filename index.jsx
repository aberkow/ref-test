import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemArr: []
    }
    this.onButtonClick = this.onButtonClick.bind(this);

  }
  //get the item from the form and add it to an array (this.state.itemArr).
  onButtonClick(evt){
    evt.preventDefault();
    var form = ReactDOM.findDOMNode(this.refs.inputForm.textInput);
    var item = form.value;
    //create a new array instead of pushing to the old one!
    var updatedArr = this.state.itemArr.concat(item);
    this.setState({itemArr: updatedArr});
    console.log(this.state.itemArr, 'from onButtonClick');
  }
  render(){
    console.log(this.state, 'from container');
    return(
      <div className='wrapper'>
        <InputWithButton ref='inputForm'
          onClick={this.onButtonClick}
           />
         <List ref='itemList' items={this.state.itemArr} />
      </div>
    );
  }
}

class InputWithButton extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <form>
          <input type='text'
            ref={function(element){
              this.textInput = element;
            }.bind(this)}
            />
          <input type='submit' onClick={this.props.onClick} />
        </form>
      </div>
    );
  }
}

class List extends React.Component {
  constructor(){
    super();
  }
  render(){
    var items = this.props.items.map(function(item, index){
      return <li key={index}>{item}</li>;
    });
    return(
      <div className='list__wrapper'>
        <h1 className='list__title'>{this.props.listTitle}</h1>
        <ul className='list' ref={function(element){
            this.itemList = element;
          }.bind(this)}>
          {items}
        </ul>
      </div>
    );
  }
}

List.defaultProps = { listTitle: 'My List' }

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Container />, document.getElementById('app'));
});

//import InputWithButton from './components/InputWithButton';

//this.onInputBoxChange = this.onInputBoxChange.bind(this);
//var item = this.state.currentItem;
// onInputBoxChange(evt){
//   var form = ReactDOM.findDOMNode(this.refs.inputForm.textInput);
//   var item = form.value;
//   this.setState({currentItem: item});
//   console.log(this.state, 'from change');
// }

// onChange={this.onInputBoxChange}
// onChange={this.props.onChange}
