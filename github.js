class GitHub {
    constructor() {
        this.client_id = "92bb37e3ddd4a4e6a1b0"
        this.client_secret = "e7850438df046cc158113961ee06f56b910c714f "
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sortclient_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json()

        return {
            profile: profileData,
            repos:
        }
    }
}