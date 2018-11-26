const UserUtils = {
    removeDuplicateUsers(users) {
        if (users) {
            const userArray = users.filter((user, index, self) =>
                index === self.findIndex(t => (
                    t.first_name === user.first_name && t.last_name === user.last_name
                )));
            return userArray;
            // this can also be done by Set and then followed map method
        }
        return [];
    },

};

export default UserUtils;
