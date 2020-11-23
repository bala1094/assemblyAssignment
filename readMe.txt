Node - v8.9.4 (https://heynode.com/tutorial/install-nodejs-locally-nvm)
Angular - v5 ("npm install" is enough )

Server Side config : 
1. Navigate to backEnd folder through CMD or VS code
2. run - npm insall
3. run - node index.js

Client Side config : 
1. Navigate to frontEnd/customTwitApp folder
2. run - yarn install
3. run - yarn start

App usage : Only localhost has been configured
1. Home page - click login to proceed futher
2. On successful login, twitter re-direct to home page
3. Home page displays the name
4. There two tabs 
4.a timeline - used to fetch the tweets
4.a.1 click on timeline text 
4.a.2 click on fetch tweets - currently configured to fetch 50 latest tweets - it might take time to load
4.b customTimeline - used to filter/search fetched tweets based on hashtags
4.b.1 List of hasttags available are displayed
4.b.2 Type the hasttag to get the tweets


Note : 
1. 4.b can be used only after clicking 4.a.2
2. DB is not interfaced - Backend itself took more time since i dont have practical knowledge on it
3. CSS has been cooked for just visualization purpose - Need more time to make it like website
4. Few of the duplicate features was not implemented due to time constrain - like search by location which is similar to filter by hashtag
5. If heroku deployment is needed, I can do it in next weekend and submit once again. 

