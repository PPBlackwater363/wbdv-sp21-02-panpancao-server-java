function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/panpancao/users';
    var self = this;
    function createUser(user) {

    }
    function findAllUsers() {
        var promise = fetch(self.url)
        promise.then(function (response) {
            console.log(response)
        })
    }
    function findUserById(userId) {

    }
    function updateUser(userId, user) {

    }
    function deleteUser(userId) {

    }
}