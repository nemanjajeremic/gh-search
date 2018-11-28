class Ui {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                     <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                     <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>  
                <div class="col-md-9">
                <span class="badge badge-primary"> Public repos: ${user.public_repos}</span>
                <span class="badge badge-secondary"> Public gists: ${user.public_gists}</span>
                <span class="badge badge-success"> Followers: ${user.followers}</span>
                <span class="badge badge-info"> Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">website: ${user.blog}</li>
                <li class="list-group-item">location: ${user.location}</li>
                <li class="list-group-item">Member since: ${user.created_at}</li>
                </ul>
                </div>     
            </div>
        </div>
        <h3 class="page-heading mb-3"> Latest repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `<div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
           <a href="${repo.html_url}" target="blank"> ${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary"> Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary"> Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success"> Forks: ${repo.forks_count}</span>
                </div>
            </div>
            </div>`
        });
        document.getElementById('repos').innerHTML = output;
        
    }
   
    clearProfile() {
        this.profile.innerHTML = '';
    }
    //show alert message
    showAlert(message, className) {
        this.clearAlert();
        //create div
        const div = document.createElement('div');
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector('.searchContainer');
        //get the search box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search);

        //time  out after 2 seconds
        setTimeout(()=> {
            this.clearAlert();
        }, 1000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}