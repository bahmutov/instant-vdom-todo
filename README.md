# instant-vdom-todo
> Prehydrated, self-rewriting TodoMVC using Virtual-Dom and bottle-service

[![Build status][instant-vdom-todo-ci-image] ][instant-vdom-todo-ci-url]

[live demo](https://instant-todo.herokuapp.com/),
[screen recording of the demo](https://youtu.be/KRVoibtht84) - notice that
I reload the page multiple times, but the app appears instantly.

Uses [bottle-service](https://github.com/bahmutov/bottle-service) 
to enable HTML rewriting on page load.

Read the [Instant web application](http://glebbahmutov.com/blog/instant-web-application/)
blog post.

## Browser support

### Chrome 

* Nothing to do, `ServiceWorker` should be enabled by default

### Firefox

* Open `about:config`
* Set the `dom.serviceWorkers.enabled` setting to **true**
* Set the `dom.serviceWorkers.interception.enabled` setting to **true**

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/instant-vdom-todo/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[instant-vdom-todo-ci-image]: https://travis-ci.org/bahmutov/instant-vdom-todo.png?branch=master
[instant-vdom-todo-ci-url]: https://travis-ci.org/bahmutov/instant-vdom-todo
