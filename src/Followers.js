import React from "react";
import { Card, Image } from "semantic-ui-react";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.followers);
    return (
      <div className="followers">
        {this.props.followers.map((follower) => {
          return (
            <Card>
              <Image src={follower.avatar_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{follower.login}</Card.Header>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Followers;
