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
        <List />
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
    return(
      <div className='list__wrapper'>
        <ul className='list'>

        </ul>
      </div>
    );
  }
}

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
