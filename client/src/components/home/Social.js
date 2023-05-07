import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Social = () => {
  return (
    <div className="home__social">
      <a className="home__social-icon"
        href="https://www.linkedin.com/in/rossana-ventrella/"
      // target="_blank"
      >
        <i className="uil uil-linkedin"><FaLinkedin /></i>
      </a>

      <a
        href="https://github.com/rossana87"
        className="home__social-icon"
      // target="_blank"
      >
        <i className="uil uil-github-alt"><FaGithub /></i>
      </a>
    </div>
  )
}

export default Social
