// Init Guthub
const github = new GitHub

// Init UI
const ui = new UI;
// Search input

const searchUser = document.getElementById('searchUser');


searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    if (userText !== '') {
        //Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    //show alert
                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    //display profile
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)

                }
            })
    } else {
        //clear profile 
        ui.clearProfile();
    }
});