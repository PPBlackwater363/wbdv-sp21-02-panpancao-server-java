
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

// alert("Welcome to Js!!!")
// console.log("haha")

// var createUserBtn = jQuery("#wbdv-createUser")

// function addUser() {
//   alert("create new user")
//   createUser({
//     username: 'ka',
//     password: 'ka',
//     firstname: "ln",
//     lastname: "okaa",
//     role: "Admin"})
// }
//
// createUserBtn.click(addUser)

var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $createBtn
var theTableBody
var userService = new AdminUserServiceClient()

var users = [];

console.log(users)

// var theHeading = jQuery("h1")
// theHeading
//   .html("User Admin Editor")
//   .css("background-color", "blue")
//   .css("color", "yellow")
//   .append("!")
//   .append("remove")
//   .append("<button>GO</button>")
// console.log(theHeading)




function createUser(user) {
  users.push(user)
  renderUsers(users)
}

// createUser({username: 'ka', password: 'ka', firstname: "ln", lastname: "okaa", role: "Admin"})
// createUser({username: 'a', password: 'ka', firstname: "ln", lastname: "okaa", role: "Admin"})
// createUser({username: 'k', password: 'da', firstname: "lu", lastname: "kaa", role: "Admin"})



function renderUsers(users) {
  theTableBody.empty()
  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    theTableBody.prepend(`theTableBody
.append('<tr class="wbdv-template wbdv-user wbdv-hidden">
              <td class="wbdv-username">${user.username}</td>
              <td>&nbsp;</td>
              <td class="wbdv-first-name">${user.firstname}</td>
              <td class="wbdv-last-name">${user.lastname}</td>
              <td class="wbdv-role">${user.role}</td>
              <td class="wbdv-actions">
              <span class="pull-right">
                <i class="fa-2x fa fa-times wbdv-remove" id="${i}"></i>
                <i class="fa-2x fa fa-pencil wbdv-edit"></i>
              </span>
              </td>
            </tr>')`)
  }

  function removeUser(event) {
    alert("remove this user")
    var button = $(event.target)
    var id = button.attr("id")
    console.log(id)
    users.splice(id, 1)
    renderUsers(users)
  }

  $(".wbdv-remove").click(removeUser)

  // jQuery(".wbdv-remove").click(function(event){
  //   console.log(event.target)
  //
  // })
}

// renderUsers(users)

function main() {
  $usernameFld = $(".wbdv-username-fld")
  $passwordFld = $(".wbdv-password-fld")
  $firstNameFld = $(".wbdv-firstName-fld")
  $lastNameFld = $(".wbdv-lastName-fld")
  $roleFld = $(".wbdv-role-fld")

  $createBtn = $(".wbdv-create")
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

  userService.findAllUsers()

}

jQuery(main)






