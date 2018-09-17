import React, { Component } from 'react';
import {connect} from 'react-redux';

class Table extends Component {
  
  constructor(props, context) {
    super(props, context);
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
 }
  handleClick = (id) => {
    this.props.clickDelete(id)
  }
  items = this.props.projects.map((item) => {
    return (
      <tr key={item.id}>
      <td>
        {item.id}
      </td>
      <td>
        {item.name}
      </td>
      <td>
        {item.detail}
      </td>
      <td>
        <button type="button" className="btn btn-outline-danger btn-sm" value={item.id} onClick={() => this.handleClick(item.id)}>
          Delete
        </button>
      </td>
    </tr>
    )
  })
  
  render() {
    return (
        <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Project
              </th>
              <th>
                Detail
              </th>
              <th>
                -
              </th>
            </tr>
          </thead>
          <tbody>
            {this.items}
          </tbody>
        </table>
      </div>
    )
  }


}

const mapStateToProps = (state, ownProps) => {
  console.log(state.projects)
  return {
      projects: state.projects,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      clickDelete: (id) => {
          dispatch({type:'DELETE_PROJECT', id: id})
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);