import React, {Component} from 'react';

class AddComment extends Component {

  state = {
    comment: '',
    name: ''
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  render() {
    const {name, comment} = this.state;
    return (
      <div className="card card-body mb-3">
        <form onSubmit={this.onSubmit}>
          <textarea 
            className="form-control form-control-lg mb-3"
            type="text"
            placeholder="Add a comment..."
            name="comment"
            value={comment}
            onChange={this.onChange}
          ></textarea>
          <input 
            type="submit" 
            className="float-right btn-primary" 
            value="Post" 
          />
        </form>
      </div>
    )
  }
}

export default AddComment;