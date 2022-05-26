const GITHUB_USER_DATA = (login) => {
  return `https://api.github.com/${login}`;
};

const GITHUB_USER_REPOS= (login) => {
  return `https://api.github.com/${login}/repos`;
};

const GITHUB_REPO_README = (login, repo) => {
  return `https://api.github.com/repos/${login}/${repo}/readme`;
};





