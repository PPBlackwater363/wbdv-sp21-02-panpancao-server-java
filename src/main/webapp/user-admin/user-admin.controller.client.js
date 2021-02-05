
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

var createUserBtn = jQuery("#wbdv-createUser")

function addUser() {
  alert("create new user")
  createUser({
    username: 'ka',
    password: 'ka',
    firstname: "ln",
    lastname: "okaa",
    role: "Admin"})
}

createUserBtn.click(addUser)

var users = [
  {username: 'lala', password: 'kaka', firstname: "jun", lastname: "okawa", role: "Admin"},
  {username: 'la', password: 'aka', firstname: "jn", lastname: "okaa", role: "Admin"}
];

console.log(users)

var theHeading = jQuery("h1")
// theHeading
//   .html("User Admin Editor")
//   .css("background-color", "blue")
//   .css("color", "yellow")
//   .append("!")
//   .append("remove")
//   .append("<button>GO</button>")
// console.log(theHeading)


var theTableBody = jQuery("tbody")

function createUser(user) {
  users.push(user)
  renderUsers(users)
}

createUser({username: 'ka', password: 'ka', firstname: "ln", lastname: "okaa", role: "Admin"})
createUser({username: 'a', password: 'ka', firstname: "ln", lastname: "okaa", role: "Admin"})
createUser({username: 'k', password: 'da', firstname: "lu", lastname: "kaa", role: "Admin"})



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

  $(".wbdv-remove").click(function(event) {
    alert("remove this user")
    var button = $(event.target)
    var id = button.attr("id")
    console.log(id)

    users.splice(id, 1)

    renderUsers(users)
  })

  // jQuery(".wbdv-remove").click(function(event){
  //   console.log(event.target)
  //
  // })
}

renderUsers(users)








