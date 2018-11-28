class Ui {
    constructor() {
        this.profile = document.getElementById('profile');
    }

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
}