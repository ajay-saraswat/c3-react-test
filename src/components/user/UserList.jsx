import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserCard from './UserCard';

const propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    getUserList: PropTypes.func.isRequired,
};

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
        };
    }

    componentDidMount() {
        this.init();
    }

    init = () => {
        const {
            users,
            getUserList,
        } = this.props;
        if (!users.length) {
            getUserList(); // fetch user list
        }
    }

    componentWillReceiveProps(nextProps) {
        const { users } = nextProps;
        if (users && !isEqual(users, this.props.users)) {
            this.setState({
                users,
            });
        }
    }

    // find and delete user from list
    deleteUser = (user) => {
        const { users } = this.state;
        users.splice(users.indexOf(user), 1);
        this.setState({ users });
    };

    render() {
        const { users } = this.state;
        return (
            <React.Fragment>
                <main>
                    <div className='heroUnit'>
                        <div className='heroContent'>
                            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                            Pearson User Management
                            </Typography>
                        </div>
                    </div>
                    <div className='layout cardGrid'>
                        <Grid container spacing={40}>
                            {users.length > 0 && users.map((user, i) => (
                                <Grid item key={i} sm={6} md={4} lg={4}>
                                    <UserCard user={user} onDelete={this.deleteUser}></UserCard>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </main>
                <footer className='footer'>
                    <Typography variant="h6" align="center" gutterBottom>
                Footer
                    </Typography>
                </footer>
            </React.Fragment>
        );
    }
}

UserList.propTypes = propTypes;
export default (UserList);
