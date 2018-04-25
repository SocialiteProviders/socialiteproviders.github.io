(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{140:function(e,n,t){"use strict";t.r(n);var r=t(0),a=Object(r.a)({},function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n    ### 3. Add the Event and Listeners\n\n    * Add `SocialiteProviders\\Manager\\SocialiteWasCalled` event to your `listen[]` array  in `app/Providers/EventServiceProvider`.\n\n    * Add your listeners (i.e. the ones from the providers) to the `SocialiteProviders\\Manager\\SocialiteWasCalled[]` that you just created.\n\n    * The listener that you add for this provider is `'"+this._s(this.$page.frontmatter.listener)+"',`.\n\n    * Note: You do not need to add anything for the built-in socialite providers unless you override them with your own providers.\n\n    For example:\n\n    ```php\n    /**\n     * The event handler mappings for the application.\n     *\n     * @var array\n     */\n    protected $listen = [\n        \\SocialiteProviders\\Manager\\SocialiteWasCalled::class => [\n            // add your listeners (aka providers) here\n            '"+this._s(this.$page.frontmatter.listener)+"',\n        ],\n    ];\n    ```\n\n    #### Reference\n\n    * [Laravel docs about events](http://laravel.com/docs/5.0/events)\n    * [Laracasts video on events in Laravel 5](https://laracasts.com/lessons/laravel-5-events)\n")])},[],!1,null,null,null);n.default=a.exports}}]);