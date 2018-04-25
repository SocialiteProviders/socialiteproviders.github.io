(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{57:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"_1-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-installation","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Installation")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("// This assumes that you have composer installed globally\ncomposer require socialiteproviders/kakao\n")])]),s("h2",{attrs:{id:"_2-service-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-service-provider","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Service Provider")]),s("ul",[s("li",[s("p",[t._v("Remove "),s("code",[t._v("Laravel\\Socialite\\SocialiteServiceProvider")]),t._v(" from your "),s("code",[t._v("providers[]")]),t._v(" array in "),s("code",[t._v("config\\app.php")]),t._v(" if you have added it already.")])]),s("li",[s("p",[t._v("Add "),s("code",[t._v("\\SocialiteProviders\\Manager\\ServiceProvider::class")]),t._v(" to your "),s("code",[t._v("providers[]")]),t._v(" array in "),s("code",[t._v("config\\app.php")]),t._v(".")])])]),s("p",[t._v("For example:")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'providers'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// a whole bunch of providers")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// remove 'Laravel\\Socialite\\SocialiteServiceProvider',")]),t._v("\n    \\"),s("span",{attrs:{class:"token package"}},[t._v("SocialiteProviders"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Manager"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// add")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("ul",[s("li",[t._v("Note: If you would like to use the Socialite Facade, you need to "),s("a",{attrs:{href:"https://github.com/laravel/socialite",target:"_blank",rel:"noopener noreferrer"}},[t._v("install it.")])])]),s("h2",{attrs:{id:"_3-event-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-event-listener","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Event Listener")]),s("ul",[s("li",[s("p",[t._v("Add "),s("code",[t._v("SocialiteProviders\\Manager\\SocialiteWasCalled")]),t._v(" event to your "),s("code",[t._v("listen[]")]),t._v(" array  in "),s("code",[t._v("app/Providers/EventServiceProvider")]),t._v(".")])]),s("li",[s("p",[t._v("Add your listeners (i.e. the ones from the providers) to the "),s("code",[t._v("SocialiteProviders\\Manager\\SocialiteWasCalled[]")]),t._v(" that you just created.")])]),s("li",[s("p",[t._v("The listener that you add for this provider is "),s("code",[t._v("'SocialiteProviders\\\\Kakao\\\\KakaoExtendSocialite@handle',")]),t._v(".")])]),s("li",[s("p",[t._v("Note: You do not need to add anything for the built-in socialite providers unless you override them with your own providers.")])])]),s("p",[t._v("For example:")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/**\n * The event handler mappings for the application.\n *\n * @var array\n */")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$listen")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    \\"),s("span",{attrs:{class:"token package"}},[t._v("SocialiteProviders"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Manager"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SocialiteWasCalled")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// add your listeners (aka providers) here")]),t._v("\n        "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'SocialiteProviders\\\\Kakao\\\\KakaoExtendSocialite@handle'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h4",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[t._v("#")]),t._v(" Reference")]),s("ul",[s("li",[s("a",{attrs:{href:"http://laravel.com/docs/5.0/events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel docs about events")])]),s("li",[s("a",{attrs:{href:"https://laracasts.com/lessons/laravel-5-events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laracasts video on events in Laravel 5")])])]),s("h2",{attrs:{id:"_4-configuration-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-configuration-setup","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. Configuration setup")]),s("p",[t._v("You will need to add an entry to the services configuration file so that after config files are cached for usage in production environment (Laravel command "),s("code",[t._v("artisan config:cache")]),t._v(") all config is still available.")]),s("h4",{attrs:{id:"add-to-config-services-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-to-config-services-php","aria-hidden":"true"}},[t._v("#")]),t._v(" Add to "),s("code",[t._v("config/services.php")]),t._v(".")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'kakao'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'client_id'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'KAKAO_KEY'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'client_secret'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'KAKAO_SECRET'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'redirect'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'KAKAO_REDIRECT_URI'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),s("h2",{attrs:{id:"_5-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. Usage")]),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://laravel.com/docs/master/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel docs on configuration")])])]),s("li",[s("p",[t._v("You should now be able to use it like you would regularly use Socialite (assuming you have the facade installed):")])])]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Socialite"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("with")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Kakao'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("redirect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h3",{attrs:{id:"lumen-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lumen-support","aria-hidden":"true"}},[t._v("#")]),t._v(" Lumen Support")]),s("p",[t._v("You can use Socialite providers with Lumen.  Just make sure that you have facade support turned on and that you follow the setup directions properly.")]),s("p",[s("strong",[t._v("Note:")]),t._v(" If you are using this with Lumen, all providers will automatically be stateless since "),s("strong",[t._v("Lumen")]),t._v(" does not keep track of state.")]),s("p",[t._v("Also, configs cannot be parsed from the "),s("code",[t._v("services[]")]),t._v(" in Lumen.  You can only set the values in the "),s("code",[t._v(".env")]),t._v(" file as shown exactly in this document.  If needed, you can\nalso override a config (shown below).")]),s("h3",{attrs:{id:"stateless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stateless","aria-hidden":"true"}},[t._v("#")]),t._v(" Stateless")]),s("ul",[s("li",[t._v("You can set whether or not you want to use the provider as stateless.  Remember that the OAuth provider (Twitter, Tumblr, etc) must support whatever option you choose.")])]),s("p",[s("strong",[t._v("Note:")]),t._v(" If you are using this with Lumen, all providers will automatically be stateless since "),s("strong",[t._v("Lumen")]),t._v(" does not keep track of state.")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// to turn off stateless")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Socialite"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("with")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Kakao'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("stateless")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("redirect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// to use stateless")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Socialite"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("with")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Kakao'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("stateless")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("redirect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h3",{attrs:{id:"overriding-a-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overriding-a-config","aria-hidden":"true"}},[t._v("#")]),t._v(" Overriding a config")]),s("p",[t._v("If you need to override the provider's environment or config variables dynamically anywhere in your application, you may use the following:")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$clientId")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"secret"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$clientSecret")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"secret"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$redirectUrl")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"http://yourdomain.com/api/redirect"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$additionalProviderConfig")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'site'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'meta.stackoverflow.com'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$config")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SocialiteProviders"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Manager"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Config")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$clientId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$clientSecret")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$redirectUrl")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$additionalProviderConfig")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Socialite"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("with")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Kakao'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("setConfig")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$config")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("redirect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h3",{attrs:{id:"retrieving-the-access-token-response-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-the-access-token-response-body","aria-hidden":"true"}},[t._v("#")]),t._v(" Retrieving the Access Token Response Body")]),s("p",[t._v("Laravel Socialite by default only allows access to the "),s("code",[t._v("access_token")]),t._v(".  Which can be accessed\nvia the "),s("code",[t._v("\\Laravel\\Socialite\\User->token")]),t._v(" public property.  Sometimes you need access to the whole response body which\nmay contain items such as a "),s("code",[t._v("refresh_token")]),t._v(".")]),s("p",[t._v("You can get the access token response body, after you called the "),s("code",[t._v("user()")]),t._v(" method in Socialite, by accessing the property "),s("code",[t._v("$user->accessTokenResponseBody")]),t._v(";")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Socialite"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("driver")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Kakao'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("user")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$accessTokenResponseBody")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$user")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("accessTokenResponseBody")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h4",{attrs:{id:"reference-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Reference")]),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/laravel/socialite",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Socialite Docs")])]),s("li",[s("a",{attrs:{href:"https://laracasts.com/series/whats-new-in-laravel-5/episodes/9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laracasts Socialite video")])])])])}],!1,null,null,null);a.default=e.exports}}]);