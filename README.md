
----
# [Project Module-2](#project-module-2)

This project is an online store built for a brand ![Terese](), using [HTML, CSS, Javascript].


----
# Table of Contents
## [Structure](#structure)
- Header
Navbar
Announcement
- Main
Hero section
Categorial(Shirts) section
Special Projects section
Best Sellers section
Client Notes section
- Footer

## [Tech stack](#techstack)
- HTML
- CSS
- JavaScript
External Libraries/Framework: Bootstrap


## [Installation](#installation)

-  [Steps of Netlify sign up process & connect to Github]
   1. Visit the Netlify website homepage and clik Sign Up button and choose one of the methods,
   here we choose Sign Up with email. ![Signup1 ss](./assets/img/readme-ss-mod2/Screenshot%20(471).png)![Signup2 ss](./assets/img/readme-ss-mod2/Screenshot%20(472).png)

   2. After Sign up with email and create a password, now log in with email and password ![Login ss](./assets/img/readme-ss-mod2/Screenshot%20(416).webp)
   Confirm the email address by clicking verification link sent to your inbox. Choose Netlify several pricing tiers. Select Free tiers and start using Netlify.

   3. After create a Netlify account with email, create a site, click on "New site from Git" select gitHub. Log in Github account first, and click on "Authorize Netlify"  
   ![Connect github ss](./assets/img/readme-ss-mod2/Screenshot%20(418).webp) 
   
   ![Connect github ss](./assets/img/readme-ss-mod2/Screenshot%20(419).webp)
   
   
- [Steps of auto deployment with Netlify]
   1. Select the specific repository that you want to deploy, the repository need to be public ![Choose repo ss](./assets/img/readme-ss-mod2/Screenshot%20(420).webp) You can scroll down here select branch to deploy, here we select " "main" branch and skip other options. After configuring the build settings, click on "Deploy site"
   ![Deploy repo ss](./assets/img/readme-ss-mod2/Screenshot%20(421).webp)
   Wait until the process complete![Process1 depo ss](./assets/img/readme-ss-mod2/Screenshot%20(422).webp)![Process2 depo ss](./assets/img/readme-ss-mod2/Screenshot%20(423).webp)
   Its the display after its deployed ![Deploy success1 ss](./assets/img/readme-ss-mod2/Screenshot%20(469).png) Once the deployment is successful, Netlify will give URL to access your site
   ![Deploy success2 ss](./assets/img/readme-ss-mod2/Screenshot%20(426).webp)
   2. Check for auto deployment in Netlify, click on "Deploys" ![Check deploy1 ss](./assets/img/readme-ss-mod2/Screenshot%20(434).png)![Check deploy2 ss](./assets/img/readme-ss-mod2/Screenshot%20(424).webp)![Check deploy3 ss](./assets/img/readme-ss-mod2/Screenshot%20(425).webp)![Check deploy4 ss](./assets/img/readme-ss-mod2/Screenshot%20(506).png)


- [Set up custom domain]
   1. Go to Niagahoster homepage and try log in with Google account, click "Domain" and "Miliki domain baru". Write the domain name and select the domain that suits your need.
    ![Make domain ss](./assets/img/readme-ss-mod2/Screenshot%20(428).webp)
    and click "Beli domain"
    ![Buy domain ss](./assets/img/readme-ss-mod2/Screenshot%20(430).webp)![Domain regis ss](./assets/img/readme-ss-mod2/Screenshot%20(431).webp)
    Wait for the verification and the domain registration to be finish minimum in 30 minutes, check email for further verification ![Wait verification ss](./assets/img/readme-ss-mod2/Screenshot%20(433).webp)
   2. Connect the new domain to Netlify, click Domain management write the new domain and click "Verify" ![Manage domain1 netlify ss](./assets/img/readme-ss-mod2/Screenshot%20(435).png)
   click "Add domain" ![Manage domain2 netlify ss](./assets/img/readme-ss-mod2/Screenshot%20(436).png) and the display will be like this ![Manage domain3 netlify ss](./assets/img/readme-ss-mod2/Screenshot%20(438).png)
   and select "Primary domain" and click "Options" select "Set up Netlify DNS"
   and click "Verify" ![Set DNS1 ss](./assets/img/readme-ss-mod2/Screenshot%20(439).png) click "Add domain" button ![Set DNS2 ss](./assets/img/readme-ss-mod2/Screenshot%20(440).png) click "Continue"![Set DNS3 ss](./assets/img/readme-ss-mod2/Screenshot%20(442).png)
   ![Set DNS4  ss](./assets/img/readme-ss-mod2/Screenshot%20(443).png) and all these 4 DNS address need to be copied and paste to Niagahoster new DNS addresses
   3. Copy the 4 DNS from Netlify to this page, click "DNS/Nameserver" select radiobutton "Ganti nama server" ![Rename DNS1 ss](./assets/img/readme-ss-mod2/Screenshot%20(444).png)
   ![Rename DNS2 ss](./assets/img/readme-ss-mod2/Screenshot%20(447).png)![Rename DNS2 ss](./assets/img/readme-ss-mod2/Screenshot%20(448).png)![Rename DNS3 ss](./assets/img/readme-ss-mod2/Screenshot%20(449).png)
   Back to Netlify again to check if the new domain works with the DNS set up with Niagahoster. 
   ![Result DNS1 ss](./assets/img/readme-ss-mod2/Screenshot%20(455).png) Go to "Site overview" ![Result DNS2 ss](./assets/img/readme-ss-mod2/Screenshot%20(452).png)
   ![Result DNS3 ss](./assets/img/readme-ss-mod2/Screenshot%20(456).png)
   Check at Netlify again ![Result DNS4 ss](./assets/img/readme-ss-mod2/Screenshot%20(474).png)
   and the elemen and performance score ![Check1 ss](./assets/img/readme-ss-mod2/Screenshot%20(457).png)![Check2 ss](./assets/img/readme-ss-mod2/Screenshot%20(468).png)


## [Usage](#usage)

- [Running locally]
   You will need a github account to clone this repository, make sure you're connected to github.

1. Clone the repository:
   ```bash
   git clone https://github.com/revou-fsse-oct24/milestone-1-yvitamn

2. Create a new branch named "develop", in this repository we would like to develop the website with personal information.
   ```bash
   git branch -b "develop"

3. Once it's created, checkout to a new branch
   ```bash
   git checkout -b "develop"

4. Develop & modify the website with your personal information, once it's done you will need to push it.
   ```bash
   git add .
   git commit -m "update message" // make sure to give details commit message to get better logs
   git push origin develop 

5. Once you're done, you can merge into main/master branch for production build.
   ```bash
   git checkout main
   git pull origin main // pull the latest version before commit merge
   git merge develop // if there are any conflicts, you should resolve them manually
   git commit -m "Merge develop into main"
   git push origin main


- [Visit the website in your browser] at [https://teresestudios.web.id/]

## [Contributing](#contributing)
## [License](#license)
## [Acknowledgments](#acknowledgments)
## [Contact](#contact)

 If you have any questions or feedback, feel free to reach out:

- Email: [mnyovita516@gmail.com]
- GitHub: [https://github.com/yvitamn]
 Github pages: 
 [https://revou-fsse-oct24.github.io/module-2-yvitamn/]

 
----
