<a name="readme-top"></a>

<!-- GETTING STARTED WITH THE README -->
<!--
*** 1. Search for vote-game-app-v6 and replace with github repo name
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Patchalv/vote-game-app-v6">
    <img src="/public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Vote to Play!</h3>

  <p align="center">
    Can't decide what to play tonight? This app will let you and your friends end that argument by allow you to each vote based on a list of games you input.
    <br />
    <a href="https://github.com/Patchalv/vote-game-app-v6"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://vote-game-five.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Patchalv/vote-game-app-v6/issues">Report Bug</a>
    ·
    <a href="https://github.com/Patchalv/vote-game-app-v6/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Screennshot][product-screenshot]

One of the things my friends and I like to do on Saturday is crack open a few beers and spend the afternoon playing board games. Pretty much everytime we'll end up asking the question "What game do you want to play?" and spend a load time trying to work out what to play.

So it gave me the idea to come up with this handy little app!

Now all you need to do is pop in the names of 2-5 games you might play, and each person will drag and drop their selection into their personal order of preference.

And then it'll just calculate it for you and give you the list in order of how they were ranked.

Arguments avoided.

Time saved.

Beer drank.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This following frameworks/libraries were used to bootstrap this project:

[![React][React.js]][React-url]
[![Redux][Redux.js]][Redux-url]
[![Material-Ui][MaterialUi]][MaterialUi-url]

Notable mentions:

-   [dnd kit](https://dndkit.com/) - Drag and drop toolkit for React.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

1. Clone the repo
    ```sh
    git clone https://github.com/Patchalv/vote-game-app-v6.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Start local development server
    ```js
    npm run dev
    ```
4. Open browser to http://localhost:3000/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<img src="/public/images/product-use-screenshot.gif" width="450">

1. Players

-   Type the names of the players into the input (2 - 8 players needed).
-   You won't be able to pass on until you insert at least 2 players.
-   You can delete a player by hitting the trash can icon.
-   Click "Add Games >" button when ready.

2. Games

-   Type the names of the games into the input (3 - 5 games needed).
-   You won't be able to pass on until you insert at least 3 games.
-   You can delete a game by hitting the trash can icon.
-   Click "Player 1 Vote >" button when ready.

3. Each person votes

-   The name of the person to vote is at the top of the screen so pass the device to them.
-   The person should drag and drop their selection so that the games are in order of what they most want to play to least (top to bottom).
-   When ready, hit the next player button.
-   You must rearrange the selection before being allowed to move on.

4. Results

-   After the last person has voted you will be taken to the results page.
-   Click on the "Calculate" button to have the total scores calculated.
-   You will be shown a list of the games in order of how many points they got.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [ ] Clear state on hitting "Start Again".
-   [ ] Total calculated automatically on loading results page, instead of hitting calculate button.
-   [ ] Custom url

See the [open issues](https://github.com/Patchalv/vote-game-app-v6/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[![LinkedIn][linkedin-contact-shield]][linkedin-url]
[![Email][email-shield]][email-url]
[![Portfolio][portfolio-shield]][portfolio-url]
[![Github][github-shield]][github-url]

Whether you want to reach out about this project, collaborating together in the future, or you just want to reach out, please don't hesitiate to get in touch!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Some resources that I found helpful and would like to give credit to:

-   [Img Shields](https://shields.io)
-   [Vercel](https://vercel.com/)
-   [Othneil Drew README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Project Specfic -->

[product-screenshot]: /public/images/screenshot.jpg
[product-logo]: /public/images/logo.png
[product-use-screenshot]: /public/images/product-use-screenshot.gif

<!-- Project Shields -->

[contributors-shield]: https://img.shields.io/github/contributors/Patchalv/vote-game-app-v6.svg?style=for-the-badge
[contributors-url]: https://github.com/Patchalv/vote-game-app-v6/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Patchalv/vote-game-app-v6.svg?style=for-the-badge
[forks-url]: https://github.com/Patchalv/vote-game-app-v6/network/members
[stars-shield]: https://img.shields.io/github/stars/Patchalv/vote-game-app-v6.svg?style=for-the-badge
[stars-url]: https://github.com/Patchalv/vote-game-app-v6/stargazers
[issues-shield]: https://img.shields.io/github/issues/Patchalv/vote-game-app-v6.svg?style=for-the-badge
[issues-url]: https://github.com/Patchalv/vote-game-app-v6/issues
[license-shield]: https://img.shields.io/github/license/Patchalv/vote-game-app-v6.svg?style=for-the-badge
[license-url]: https://github.com/Patchalv/vote-game-app-v6/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Social Media -->

[linkedin-contact-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/patrickalvarezeades/
[email-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[email-url]: mailto:p.alvarezeades@gmail.com
[portfolio-shield]: https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white
[portfolio-url]: https://patrickalvarez.com/
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/Patchalv

<!-- Languages & Tech used -->

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: #
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: #
[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JavaScript-url]: #
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[MaterialUi]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MaterialUi-url]: https://mui.com/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[postgresql]: https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=nextdotjs&logoColor=white
[postgresql-url]: https://www.postgresql.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[swagger]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Vercel]: https://img.shields.io/badge/Vercel-black?style=flat&logo=Vercel&logoColor=white
[Vercel-url]: https://vercel.com/
