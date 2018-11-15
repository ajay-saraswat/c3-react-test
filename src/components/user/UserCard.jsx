import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardActions, CardContent, Button, Typography, CardHeader, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
    user: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};

const CogUserStyles = {
    width: 200,
    height: 400,
    buttonRoot: 'small',
};

function UserCard({
    user, onDelete,
}) {
    return (
        <Card className="card">
            <CardActionArea>
                <CardHeader className="cardHeader"
                    action={
                        <Avatar className="cardAvatar"
                            alt={`${user.first_name} ${user.last_name}`}
                            src={user.avatar}
                        />
                    }
                ></CardHeader>
                <CardContent>
                    <Typography gutterbutton="true" variant="h5" component="h2" className="cardUser">
                        {`${user.first_name} ${user.last_name}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary"
                    id={`btn-del${user.id}`} className="delButton"
                    onClick={() => onDelete(user)}>
                    <span>Delete</span>
                </Button>
            </CardActions>
        </Card>
    );
}

UserCard.propTypes = propTypes;

export default withStyles(CogUserStyles)(UserCard);
