class Github {
    constructor() {
        this.client_id = '777f499eb879f4c9d210',
            this.client_secret = '7a377245b7e1de951c705e28f38359b78189bf46'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();


        return {
            profile
        }
    }
}