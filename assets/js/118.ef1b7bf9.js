(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{132:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"contribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contribute","aria-hidden":"true"}},[t._v("#")]),t._v(" Contribute")]),e("h2",{attrs:{id:"creating-a-provider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-provider","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating a Provider")]),e("ul",[e("li",[t._v("Create the provider class")]),e("li",[t._v("Create a listener/handler")]),e("li",[t._v("Create a composer.json file and add "),e("em",[t._v("socialiteproviders/manager")]),t._v(" ("),e("a",{attrs:{href:"https://github.com/SocialiteProviders/Manager"}},[t._v("See the manager package.")]),t._v(') in the "require" section.')]),e("li",[t._v("If using OAuth1 you need to also create a server class.")])]),e("p",[t._v("To speed up the creation of your provider you can use the "),e("a",{attrs:{href:"https://github.com/SocialiteProviders/Generators"}},[t._v("generator")]),t._v(".")]),e("p",[t._v("Look at the already created "),e("a",{attrs:{href:"#providers"}},[t._v("providers")]),t._v(" and the "),e("a",{attrs:{href:"https://github.com/SocialiteProviders/Manager"}},[t._v("Manager")]),t._v(" package for inspiration.")]),e("h2",{attrs:{id:"submitting-a-new-provider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-new-provider","aria-hidden":"true"}},[t._v("#")]),t._v(" Submitting a new provider")]),e("p",[t._v("Send new provider pull requests to the "),e("a",{attrs:{href:"https://github.com/SocialiteProviders/Providers"}},[t._v("Providers")]),t._v(" repo.")]),e("h2",{attrs:{id:"creating-a-handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-handler","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating a handler")]),e("p",[t._v("Below is an example handler. You need to add the fully qualified class name to the "),e("code",[t._v("listen[]")]),t._v(" in the "),e("code",[t._v("EventServiceProvider")]),t._v(".")]),e("ul",[e("li",[e("a",{attrs:{href:"http://laravel.com/docs/5.0/events"}},[t._v("See also the Laravel docs about events")])]),e("li",[e("code",[t._v("providername")]),t._v(" is the name of the provider such as "),e("code",[t._v("meetup")]),t._v(".")]),e("li",[t._v("You will need to change the namespaces to match your vendor and package name.")])]),e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{attrs:{class:"token package"}},[t._v("Your"),e("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Name"),e("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Space")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{attrs:{class:"token package"}},[t._v("SocialiteProviders"),e("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Manager"),e("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SocialiteWasCalled")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("ProviderNameExtendSocialite")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("handle")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SocialiteWasCalled "),e("span",{attrs:{class:"token variable"}},[t._v("$socialiteWasCalled")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token variable"}},[t._v("$socialiteWasCalled")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("extendSocialite")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'providername'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Your\\Name\\Space\\ProviderName'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("h2",{attrs:{id:"resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[t._v("#")]),t._v(" Resources")]),e("ul",[e("li",[e("a",{attrs:{href:"https://medium.com/@morrislaptop/adding-auth-providers-to-laravel-socialite-ca0335929e42"}},[t._v("See this article on Medium")]),t._v(" about creating a new provider")]),e("li",[e("a",{attrs:{href:"http://laravel.com/docs/5.0/events"}},[t._v("Laravel docs on events")])])]),e("h2",{attrs:{id:"overriding-a-built-in-provider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overriding-a-built-in-provider","aria-hidden":"true"}},[t._v("#")]),t._v(" Overriding a Built-in Provider")]),e("p",[t._v("You can easily override a built-in laravel/socialite provider by creating a new provider with exactly the same name (i.e. 'facebook').")]),e("h2",{attrs:{id:"tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Tests")]),e("p",[t._v("If we have tests in the repo (currently and foreseeably only the ("),e("a",{attrs:{href:"https://github.com/SocialiteProviders/Manager"}},[t._v("Manager")]),t._v(" package)\nyou need to have tests cover any changes submitted in a pull request.  We currently use PHPUnit and Mockery for our test suite.")]),e("h2",{attrs:{id:"style"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#style","aria-hidden":"true"}},[t._v("#")]),t._v(" Style")]),e("p",[t._v("Run PHP-CS-Fixer on your machine and put a .styleci.yml into the repository with preset: symfony to make sure that pull requests and merges follow the "),e("a",{attrs:{href:"http://symfony.com/doc/current/contributing/code/standards.html"}},[t._v("Symfony Coding Standards")]),t._v(".")])])}],!1,null,null,null);a.default=r.exports}}]);