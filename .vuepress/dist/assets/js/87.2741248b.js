(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{86:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"_1-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-installation","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Installation")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// This assumes that you have composer installed globally\ncomposer require socialiteproviders/Etsy\n")])]),a("h2",{attrs:{id:"_2-service-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-service-provider","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Service Provider")]),a("ul",[a("li",[a("p",[t._v("Remove "),a("code",[t._v("Laravel\\Socialite\\SocialiteServiceProvider")]),t._v(" from your "),a("code",[t._v("providers[]")]),t._v(" array in "),a("code",[t._v("config\\app.php")]),t._v(" if you have added it already.")])]),a("li",[a("p",[t._v("Add "),a("code",[t._v("\\SocialiteProviders\\Manager\\ServiceProvider::class")]),t._v(" to your "),a("code",[t._v("providers[]")]),t._v(" array in "),a("code",[t._v("config\\app.php")]),t._v(".")])])]),a("p",[t._v("For example:")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'providers'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// a whole bunch of providers")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// remove 'Laravel\\Socialite\\SocialiteServiceProvider',")]),t._v("\n    \\"),a("span",{attrs:{class:"token package"}},[t._v("SocialiteProviders"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Manager"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// add")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("ul",[a("li",[t._v("Note: If you would like to use the Socialite Facade, you need to "),a("a",{attrs:{href:"https://github.com/laravel/socialite",target:"_blank",rel:"noopener noreferrer"}},[t._v("install it.")])])]),a("h2",{attrs:{id:"_3-event-listener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-event-listener","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Event Listener")]),a("ul",[a("li",[a("p",[t._v("Add "),a("code",[t._v("SocialiteProviders\\Manager\\SocialiteWasCalled")]),t._v(" event to your "),a("code",[t._v("listen[]")]),t._v(" array  in "),a("code",[t._v("app/Providers/EventServiceProvider")]),t._v(".")])]),a("li",[a("p",[t._v("Add your listeners (i.e. the ones from the providers) to the "),a("code",[t._v("SocialiteProviders\\Manager\\SocialiteWasCalled[]")]),t._v(" that you just created.")])]),a("li",[a("p",[t._v("The listener that you add for this provider is "),a("code",[t._v("'SocialiteProviders\\\\Etsy\\\\EtsyExtendSocialite@handle',")]),t._v(".")])]),a("li",[a("p",[t._v("Note: You do not need to add anything for the built-in socialite providers unless you override them with your own providers.")])])]),a("p",[t._v("For example:")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * The event handler mappings for the application.\n *\n * @var array\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$listen")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    \\"),a("span",{attrs:{class:"token package"}},[t._v("SocialiteProviders"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Manager"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SocialiteWasCalled")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// add your listeners (aka providers) here")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'SocialiteProviders\\\\Etsy\\\\EtsyExtendSocialite@handle'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("h4",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[t._v("#")]),t._v(" Reference")]),a("ul",[a("li",[a("a",{attrs:{href:"http://laravel.com/docs/5.0/events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel docs about events")])]),a("li",[a("a",{attrs:{href:"https://laracasts.com/lessons/laravel-5-events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laracasts video on events in Laravel 5")])])]),a("h2",{attrs:{id:"_4-configuration-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-configuration-setup","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. Configuration setup")]),a("p",[t._v("You will need to add an entry to the services configuration file so that after config files are cached for usage in production environment (Laravel command "),a("code",[t._v("artisan config:cache")]),t._v(") all config is still available.")]),a("h4",{attrs:{id:"add-to-config-services-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-to-config-services-php","aria-hidden":"true"}},[t._v("#")]),t._v(" Add to "),a("code",[t._v("config/services.php")]),t._v(".")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'etsy'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'client_id'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("env")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ETSY_KEY'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'client_secret'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("env")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ETSY_SECRET'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'redirect'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("env")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ETSY_REDIRECT_URI'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),a("h2",{attrs:{id:"_5-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. Usage")]),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://laravel.com/docs/master/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel docs on configuration")])])]),a("li",[a("p",[t._v("You should now be able to use it like you would regularly use Socialite (assuming you have the facade installed):")])])]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Socialite"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("with")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Etsy'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("h3",{attrs:{id:"lumen-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lumen-support","aria-hidden":"true"}},[t._v("#")]),t._v(" Lumen Support")]),a("p",[t._v("You can use Socialite providers with Lumen.  Just make sure that you have facade support turned on and that you follow the setup directions properly.")]),a("p",[a("strong",[t._v("Note:")]),t._v(" If you are using this with Lumen, all providers will automatically be stateless since "),a("strong",[t._v("Lumen")]),t._v(" does not keep track of state.")]),a("p",[t._v("Also, configs cannot be parsed from the "),a("code",[t._v("services[]")]),t._v(" in Lumen.  You can only set the values in the "),a("code",[t._v(".env")]),t._v(" file as shown exactly in this document.  If needed, you can\nalso override a config (shown below).")]),a("h3",{attrs:{id:"stateless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stateless","aria-hidden":"true"}},[t._v("#")]),t._v(" Stateless")]),a("ul",[a("li",[t._v("You can set whether or not you want to use the provider as stateless.  Remember that the OAuth provider (Twitter, Tumblr, etc) must support whatever option you choose.")])]),a("p",[a("strong",[t._v("Note:")]),t._v(" If you are using this with Lumen, all providers will automatically be stateless since "),a("strong",[t._v("Lumen")]),t._v(" does not keep track of state.")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// to turn off stateless")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Socialite"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("with")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Etsy'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("stateless")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// to use stateless")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Socialite"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("with")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Etsy'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("stateless")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("h3",{attrs:{id:"overriding-a-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overriding-a-config","aria-hidden":"true"}},[t._v("#")]),t._v(" Overriding a config")]),a("p",[t._v("If you need to override the provider's environment or config variables dynamically anywhere in your application, you may use the following:")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$clientId")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"secret"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$clientSecret")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"secret"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$redirectUrl")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"http://yourdomain.com/api/redirect"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$additionalProviderConfig")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'site'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'meta.stackoverflow.com'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$config")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SocialiteProviders"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Manager"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Config")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$clientId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$clientSecret")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$redirectUrl")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$additionalProviderConfig")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Socialite"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("with")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Etsy'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("setConfig")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$config")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("h3",{attrs:{id:"retrieving-the-access-token-response-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-the-access-token-response-body","aria-hidden":"true"}},[t._v("#")]),t._v(" Retrieving the Access Token Response Body")]),a("p",[t._v("Laravel Socialite by default only allows access to the "),a("code",[t._v("access_token")]),t._v(".  Which can be accessed\nvia the "),a("code",[t._v("\\Laravel\\Socialite\\User->token")]),t._v(" public property.  Sometimes you need access to the whole response body which\nmay contain items such as a "),a("code",[t._v("refresh_token")]),t._v(".")]),a("p",[t._v("You can get the access token response body, after you called the "),a("code",[t._v("user()")]),t._v(" method in Socialite, by accessing the property "),a("code",[t._v("$user->accessTokenResponseBody")]),t._v(";")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Socialite"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("driver")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Etsy'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("user")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$accessTokenResponseBody")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$user")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("accessTokenResponseBody")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("h4",{attrs:{id:"reference-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Reference")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/laravel/socialite",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Socialite Docs")])]),a("li",[a("a",{attrs:{href:"https://laracasts.com/series/whats-new-in-laravel-5/episodes/9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laracasts Socialite video")])])])])}],!1,null,null,null);s.default=e.exports}}]);