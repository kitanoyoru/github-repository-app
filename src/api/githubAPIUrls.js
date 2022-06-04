export const GITHUB_USERDATA = `
  query findUserData($login:String!) {
    user(login:$login) {
      login
      name
      location
      avatar_url: avatarUrl
    }
  }
`;

export const GITHUB_REPOS = `
  query findRepos($login:String!) {
    user(login:$login) {
      repositories(first:100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;
