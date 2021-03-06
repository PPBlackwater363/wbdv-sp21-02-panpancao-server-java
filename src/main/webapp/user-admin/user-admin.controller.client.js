// (function () {
//   var $usernameFld, $passwordFld;
//   var $firstNameFld, $lastNameFld, $roleFld;
//   var $removeBtn, $editBtn, $createBtn;
//   var $userRowTemplate, $tbody;
//   var userService = new AdminUserServiceClient();
//   $(main);
//
//   function main() { … }
//   // function createUser() { … }
//   // function deleteUser() { … }
//   // function selectUser() { … }
//   // function updateUser() { … }
//   // function renderUsers(users) { … }
//   // function findAllUsers() { … } // optional - might not need this
//   // function findUserById() { … } // optional - might not need this
// })();

var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $createBtn
var $updateBtn
var $searchBtn
var theTableBody
var userService = new AdminUserServiceClient()
var users = []

function createUser(user) {
  userService.createUser(user)
      .then(function(actualUser) {
        users.push(actualUser)
        renderUsers(users)
      })
}

var selectedUser
function selectUser(event) {
  var selectBtn = jQuery(event.target)
  var theId = selectBtn.attr("id")
  selectedUser = users.find(user => user._id === theId)
  $usernameFld.val(selectedUser.username)
  $passwordFld.val(selectedUser.password)
  $firstNameFld.val(selectedUser.firstname)
  $lastNameFld.val(selectedUser.lastname)
  $roleFld.val(selectedUser.role)
}

function updateUser() {
  selectedUser.username = $usernameFld.val()
  selectedUser.password = $passwordFld.val()
  selectedUser.firstname = $firstNameFld.val()
  selectedUser.lastname = $lastNameFld.val()
  selectedUser.role = $roleFld.val()
  userService.updateUser(selectedUser._id, selectedUser)
      .then(status => {
        var index = users.findIndex(user => user._id === selectedUser._id)
        users[index] = selectedUser
        renderUsers(users)
      })
  $usernameFld.val("")
  $passwordFld.val("")
  $firstNameFld.val("")
  $lastNameFld.val("")
}

function deleteUser(event) {
  alert("remove this user")
  var button = $(event.target)
  var index = button.attr("id")
  var id = users[index]._id
  userService.deleteUser(id)
      .then(function (status) {
        users.splice(index, 1)
        renderUsers(users)
      })
}

function searchUser() {
  var username = $usernameFld.val()
  var firstname = $firstNameFld.val()
  var lastname = $lastNameFld.val()
  var role = $roleFld.val()

  var searchUsers = users.filter(user => user.username === username || user.firstname === firstname
      || user.lastname === lastname || user.role === role
  )
  renderUsers(searchUsers)
}

function renderUsers(users) {
  theTableBody.empty()
  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    theTableBody.append(`theTableBody
.append('<tr class="wbdv-template wbdv-user wbdv-hidden">
              <td class="wbdv-username">${user.username}</td>
              <td>******</td>
              <td class="wbdv-first-name">${user.firstname}</td>
              <td class="wbdv-last-name">${user.lastname}</td>
              <td class="wbdv-role">${user.role}</td>
              <td class="wbdv-actions">
              <span class="pull-right">
                <i class="fa-2x fa fa-pencil wbdv-select float-right" id="${user._id}"></i>
                <i class="fa-2x fa fa-times wbdv-remove float-right" id="${i}"></i>
              </span>
              </td>
            </tr>')`)
  }

  $(".wbdv-remove").click(deleteUser)
  jQuery(".wbdv-select").click(selectUser)
}


function main() {
  $usernameFld = $(".wbdv-username-fld")
  $passwordFld = $(".wbdv-password-fld")
  $firstNameFld = $(".wbdv-firstName-fld")
  $lastNameFld = $(".wbdv-lastName-fld")
  $roleFld = $(".wbdv-role-fld")
  $createBtn = $(".wbdv-create")
  $updateBtn = $(".wbdv-update")
  $searchBtn = $(".wbdv-search")
  theTableBody = jQuery("tbody")
  $createBtn.click(function () {
    alert("Create a new user!")
    var newUser = {
      username: $usernameFld.val(),
      password: $passwordFld.val(),
      firstname: $firstNameFld.val(),
      lastname: $lastNameFld.val(),
      role: $roleFld.val()
    }
    createUser(newUser)
    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
  })
  $updateBtn.click(updateUser)
  userService.findAllUsers()
      .then(function (actualUsersFromServer) {
        users = actualUsersFromServer
        renderUsers(users)
      })

  $searchBtn.click(searchUser)


}

jQuery(main)






