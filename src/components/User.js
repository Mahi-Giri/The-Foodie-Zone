import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "user_name",
                location: "location",
                twitter_username: "twitter_username",
                avatar_url: "avatar_url",
            },
        };
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {}

    componentWillUnmount() {}

    async getData() {
        const data = await fetch("https://api.github.com/users/Mahi-Giri");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    }

    render() {
        const { name, location, twitter_username, avatar_url } = this.state.userInfo;
        return (
            <div className="flex flex-col items-center">
                <p>
                    <span className="font-bold text-lg">Name: </span>
                    <UserContext.Consumer>{({ loggedInUser }) => <span>{loggedInUser}</span>}</UserContext.Consumer>
                </p>

                <p>
                    <span className="font-bold text-lg">Location: </span>
                    <span className="text-base">{location}</span>
                </p>
                <p>
                    <span className="font-bold text-lg">Twitter_Username: </span>
                    <span className="text-base">{twitter_username}</span>
                </p>
                <img className="w-1/6 h-1/6 rounded-full" src={avatar_url} />
            </div>
        );
    }
}

export default User;
