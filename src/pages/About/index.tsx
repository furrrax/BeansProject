import { Link } from "react-router-dom";
import style from './style.module.css';

export const AboutPage = () => {
    return(
        <div className={style.container}>
            <div className={style.title}>What to find in this API?</div>
            <hr />
            <ul className={style.numbers}>
                <li>
                    <h3>100 +</h3>
                    <span>Jelly belly beans</span>
                </li>
                <li>
                    <h3>8</h3>
                    <span>Properties on each bean</span>
                </li>
                <li>
                    <h3>99 +</h3>
                    <span>Facts on Jelly Belly</span>
                </li>
                <li>
                    <h3>20 +</h3>
                    <span>Milestones in the Jelly Belly History</span>
                </li>
                <li>
                    <h3>25 +</h3>
                    <span>Recipes</span>
                </li>
                <li>
                    <h3>50 +</h3>
                    <span>Jelly Belly Combinations</span>
                </li>
            </ul>
            <div className={style.links}>
                <span>All data reflecting from the original <a href="http://www.jellybelly.com/">Jelly Belly Website</a></span>
                <div className={style.links__title}>Тут дублируются ссылки на страницы:</div>
                <div className={style.links__list}>
                    <Link to="/BeansProject/beans">Beans</Link>
                    <Link to="/BeansProject/facts">Facts</Link>
                    <Link to="/BeansProject/recipes">Recipes</Link>
                    <Link to="/BeansProject/combinations">Combinations</Link>
                    <Link to="/BeansProject/history">History</Link>
                    <Link to="/BeansProject/about">About</Link>
                </div>
            </div>
            <div className={style.description}>
                <h2>Content and Sources</h2>
                <p>The content, including images and data, has been sourced from the official Jelly Belly website (<a href="www.jellybelly.com">www.jellybelly.com</a>). It's important to note that I do not claim ownership of any information on this API or website, except for the original graphics of the logo and logotype. The rest of the content is a creative remix of the available information.</p>
                <h2>Contribution and Contact</h2>
                <p>If you have suggestions, comments, or contributions for this API or website, please feel free to reach out. You can contact me through the "Contact" section on this website or directly via email at <a href="mailto:moshikoatia@gmail.com">moshikoatia@gmail.com</a>. Your input and collaboration are greatly appreciated.</p>
                <h2>Repositories and Project Structure</h2>
                <p>This project is divided into three main parts, each with its own repository:</p>
                <ul>
                    <li><b>1. Web Scraper Repository</b> (<a href="https://github.com/Object-ions/capstone-supporting-files">GitHub Repo</a>): This repository contains scripts and supporting files for data collection using Python, BeautifulSoup and ChromeDrive. It details the methodology used for creatively gathering data step by step until it was ready to be seeded into the C# API.</li>
                    <li><b>2. API Repository</b> (<a href="https://github.com/Object-ions/Jelly-Belly-Wiki-API">GitHub Repo</a>): The heart of the project, this repository holds the C# and EF Core .Net API with MySql migrations. It serves as the core database of the project. Detailed instructions on how to use this API are available in the repository, similar to the API Documentation provided in the UI.</li>
                    <li><b>3. UI Repository</b> (<a href="https://github.com/Object-ions/Jelly_Belly_Wiki_Client">GitHub Repo</a>): The User Interface makes full use of the API's database, showcasing one approach to design by utilizing all the endpoints and their various options.</li>
                </ul>
                <p><b>Note:</b> This is not the final version of this project, and it will continue to evolve. As it's a large-scale work and I am a precise person, this is still a work in progress.</p>
            </div>
        </div>
    )
}

export default AboutPage;