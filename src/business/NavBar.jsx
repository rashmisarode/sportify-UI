import React, { PureComponent } from 'react'
import { Navbar} from 'react-bootstrap';
import LogInPage from '../components/LogInPage';
import LogOut from '../components/LogOut';

class NavBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            userObj: undefined,
            user: ""
        }
    }
    componentDidMount() {
        let userName = sessionStorage.getItem("userName")
        let userObj = sessionStorage.getItem("userObj")
        console.log(userObj)
        console.log(userName)
        this.setState({
            userObj: userObj,
            user: userName
        })

    }

    render() {
        const { userObj } = this.state;
        return (
            <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>SpoRtify</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: {userObj &&
                                <a href="#login">{this.state.user}</a>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                    {userObj && <LogOut></LogOut>}
                    {!userObj && <LogInPage></LogInPage>}
                </Navbar>
        )
    }
}

export default NavBar