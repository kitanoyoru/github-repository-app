import React, { useState, useEffect, useCallback } from "react";

import {
  GITHUB_USER_DATA,
  GITHUB_USER_REPOS,
  GITHUB_REPO_README,
} from "./lib/githubAPI";

const App = () => {
  const [login, setLogin] = useState("");
  const [userData, setUserData] = useState();
  const [repos, setRepos] = useState();
  const [repo, setRepo] = useState("");
  const [markdown, setMarkdown] = useState("");

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const loadReadme = useCallback(async (login, repo) => {
    setLoading(true);

    const url = GITHUB_REPO_README(login, repo);
    const { download_url } = await fetch(url).then((res) => res.json());
    const markdown = await fetch(download_url).then((res) => res.text());

    setMarkdown(markdown);
    setLoading(false);

    return markdown;
  }, []);

  useEffect(() => {
    fetch(GITHUB_USER_DATA(login))
      .then(() => setLoading(true))
      .then((res) => res.json())
      .then(setUserData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  useEffect(() => {
    fetch(GITHUB_USER_REPOS(login))
      .then(() => setLoading(true))
      .then((res) => res.json())
      .then(setRepos)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  useEffect(() => {
    if (!repo || !login) return;
    loadReadme(login, repo).catch(setError);
  }, [repo]);

  if (!login) {
    return <Blank setLogin={setLogin} />;
  }

  if (loading) {
    return <Load />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Header>
        <SearchForm setLogin={setLogin} />
      </Header>
      <GithubUser data={userData} />
      <RepositoryMenu repos={repos} setRepo={setRepo} />
      <RepositoryReadme markdown={markdown} />
      <Footer />
    </>
  );
};

export default App;
