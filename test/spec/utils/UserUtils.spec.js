import UserUtils from '../../../src/utils/UserUtils';

describe('UserClient', () => {
    describe('removeDuplicateUsers(users)', () => {
        const userList = [...UsrMocks.pearsonUsers];
        it('should remove duplicate users', () => {
            expect(UserUtils.removeDuplicateUsers(userList).length).to.equal(3);
        });
    });
});
