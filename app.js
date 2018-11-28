const gh = new Github;
const ui = new Ui;

//search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    //get input text
    const searchText = e.target.value;
    if (searchText !== '') {

        gh.getUser(searchText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    /* ui.showRepos(data.repos); */
                    ui.showRepos(data.repos);
                }
            });
    } else {
        ui.clearProfile();
    }
});