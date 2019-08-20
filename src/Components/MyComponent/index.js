import React from 'react';
class MyComponent extends React.Component{
constructor(props) {
  super(props);

  this.onChangeDisabled = this.onChangeDisabled.bind(this);
  this.onDeleteAll = this.onDeleteAll.bind(this);

  this.state = {
      disabled: props.initialDisabled || false
  };
}

onChangeDisabled(e) {
  this.setState({disabled: !e.target.checked});
}

onDeleteAll(e) {
  this.props.onDeleteAll();
}

render() {
  return (
      <div>
          <button
              disabled={this.state.disabled}
              onClick={this.onDeleteAll}
          >
              DELETE_ALL
          </button>

          <input
              type="checkbox"
              checked={!this.state.disabled}
              onChange={this.onChangeDisabled}
          />
      </div>
  );
}
}
export default MyComponent;
