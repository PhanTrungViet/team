import React, { Component } from 'react';
import {connect} from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id: '0',
      name: '',
      detail: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange (event) {
    this.setState({[event.target.name]: event.target.value} );
  }
  onSubmit(e){
    e.preventDefault();
    // console.log(this.state.name+this.state.detail);
    // const project = {
    //   name: this.props.name,
    //   detail: this.props.detail
    // };
    const project = this.state;
    console.log(this.state)
    this.props.clickNew(project);
  }
  // onSubmit(e) {
  //   e.preventDefault();

  //   const project = {
  //     name: this.state.name,
  //     detail: this.state.detail
  //   };

  //   this.props.clickNew(project);
  // }
  
  
  render() {
    return (
        <div className="col-md-4">
        <br />
        <form role="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>
            <input type="text" className="form-control" id="name" name="name" onChange={event => this.handleChange(event)}/>
          </div>
          <div className="form-group">
            <label htmlFor="detail">
              Detail
            </label>
            <input type="text" className="form-control" id="detail" name="detail" onChange={event => this.handleChange(event)} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      clickNew: (project) => {
          dispatch({type:'NEW_PROJECT', project: project})
      }
  }
}
export default connect(null, mapDispatchToProps)(Form);