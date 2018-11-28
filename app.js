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
                    //this user does not exist
                    console.log('User does not exist!');
                    
                } else {
                    ui.showProfile(data.profile);
                }
            });
    } else {
        //clear profile
    }
});