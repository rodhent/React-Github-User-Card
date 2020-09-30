import React from "react";
import { Card, Icon, Image, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Followers from "./Followers";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.props);
    event.preventDefault();
    this.props.handleClick(this.state.input);
  };

  render() {
    return (
      <div>
        <div className="user">
          <h1>{this.props.userData.name} - Github Card</h1>
          <p>Find another user</p>
          <form onSubmit={this.handleSubmit}>
            <Input
              icon="search"
              placeholder="Search..."
              value={this.state.input}
              onChange={this.handleChange}
            />
          </form>
          <Card>
            <Image src={this.props.userData.avatar_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.userData.name}</Card.Header>
              <Card.Meta>
                <span className="location">{this.props.userData.location}</span>
              </Card.Meta>
              <Card.Description>{this.props.userData.login}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to={`/followers/${this.props.userData.login}`}>
                <Icon name="user" />
                Followers: {this.props.userData.followers}
              </Link>
            </Card.Content>
          </Card>
        </div>
        <h2>Followers:</h2>
        <Followers
          userData={this.props.userData}
          followers={this.props.followers}
        />
      </div>
    );
  }
}

export default UserCard;
