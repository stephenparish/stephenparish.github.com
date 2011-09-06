DESIGN
--------------------------------
- the big screen
  - movement
    - start with only title and menu
    - slide menu right and slide content out of slit
    - change of content scrolls away
  - background
    - chosen photos
- iPhone
  - start page
    - about, not latest
- iPad

- Computer
  - start page = about + latest


CODE TO BE WRITTEN
--------------------------------
- php
  - ajax functions
    - send contact email
    - javascript log saver (on only in dev mode)
      - write onunload and once per 10 seconds (or other set interval)
- javascript
  - logging errors / functions
  - photo gallery
    - start with iphone
    - mac
    - ipad
- dev mode
  - css auto refresh for less.js on
  - js console logging to file 

SEO
--------------------------------
- maybe
- only load page requested on start
  - once next page is requested, make ajax call for next page/ all others?

SITE LOAD OPTIMIZATION
--------------------------------

URLs
--------------------------------
- [mod rewrite](http://www.blogstorm.co.uk/htaccess-mod_rewrite-ultimate-guide/)
  - masks php url
- php
  - get url submitted, tells javascript which page to load to
  - variables
    - section !page
      - article !set or !car or anything else
        - view // opens photos, docs
- javascript
  - shows loading screen to hide movement
  - reads full path then handles one by one
  - slides directly to page or subpage
  - pulls content through ajax /?page=x&project=y&ajax=true
  - OR just sifts to page on dom ready -- preferred, easier, faster load times



| PHP                          | MOD\_REWRITE        | JS              |
| ---------------------------- | ------------------- | --------------- |
| /                            | /                   | /               | // leads to about page? or just newest blog and info
| /?page=about                 | /about              | /#              | // if ^ then does not exist
| /?page=web                   | /web                | /#web           | // brief summary of project - thumbnails of of 1 - 6 screens
| /?page=web&project=          | /web/project        | /#web/project   | // deeper exp. of project, tasks, features, specs
| /?page=photo                 | /photo              | /#photo         | // set titles and 6 thumbs
| /?page=photo&set=            | /photo/set          | /#photo/$set    | // set title, all thumbs on regular page
| /?page=photo&set=&photo=     | /photo/$set/$photo  | /#photo/$set/$p | // just the photo, slides up on load
| /?page=auto&car=&project=    | /auto/car/project   | /#auto/car/proj | // pulls up specific project
| /?page=contact               | /contact            | /#contact       |
| /?page=contact&method=       | /contact/card       | /#contact/card  |
| /?page=blog                  | /blog               | /#blog          |




File List
- PHP
  - combine.php - combines all js files and adds to /cache for faster loading http://rakaz.nl/code/combine
  - email.php
    - send form emails to me
    - send emails to others
    - send text and html email with image
  - database.php
    - connects to db
    - ajax query to json
- JS
  - jQuery
    - (other jquery plugins)
  - mobile.js
- CSS
  - screen.css
