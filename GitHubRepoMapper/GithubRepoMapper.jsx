import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import "./GithubRepo.css";
// import "./GithubRepo1.css";
import "./GithubRepo2.css";
// import "./GithubRepo3.css";
// import "./GithubRepo4.css";
// import "./GithubRepo5.css";
// import "./GithubRepo6.css";


const GithubRepoMapper = ({ username, headerText }) => {
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await userResponse.json();
        setUserInfo(userData);

        const repoResponse = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!repoResponse.ok) {
          throw new Error("Failed to fetch user's repositories");
        }
        const repoData = await repoResponse.json();
        setRepos(repoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);


  return (
    <>
      <div className="github-user">
        {userInfo && (
          <div>
            <h6 className="user-name">
              <a href={`https://github.com/${username}`}>{userInfo.login}</a>
            </h6>
            <img
              src={userInfo.avatar_url}
              alt={`Avatar of ${userInfo.login}`}
            />
          </div>
        )}
      </div>

      <div className="user-repositories">
        {headerText !== undefined ? (
          <h2 className="header">{headerText}</h2>
        ) : (
          ""
        )}
        <div className="card-container">
          {repos.map((repo) => (
            <div key={repo.id} className={`card repo${repo.id}`}>
              <h3 className="card-title">{repo.name}</h3>
              <p className="card-description">{repo.description}</p>
              <p className="card-stars">★{repo.stargazers_count}</p>
              <p className="card-forks">Forks: {repo.forks_count}</p>
              <p className="card-issues">Issues: {repo.open_issues_count}</p>
              <p className="card-last-updated">
                Last updated: {repo.updated_at}
              </p>
              <p className="card-repo-link">
                View on{" "}
                <a href={repo.html_url} className="card-repo-link-anchor">
                  GitHub
                </a>
              </p>
              {repo.homepage !== null ? (
                <p className="card-homepage-link">
                  <a href={repo.homepage} className="card-homepage-link-anchor">
                    Homepage
                  </a>
                </p>
              ) : (
                ""
              )}

              <p className="card-language">Language: {repo.language}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

GithubRepoMapper.propTypes = {
  username: PropTypes.string.isRequired,
  headerText: PropTypes.string,
};

export default GithubRepoMapper;
