import React, { Component } from "react";
import Axios from "axios";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: ""
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving Data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null}
        <img className="image-card" alt="Cool" src={this.state.img} />
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default UserForm;
