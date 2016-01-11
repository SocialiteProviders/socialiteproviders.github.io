### 3. Add the Event and Listeners

* Add `SocialiteProviders\Manager\SocialiteWasCalled` event to your `listen[]` array  in `app/Providers/EventServiceProvider`.

* Add your listeners (i.e. the ones from the providers) to the `SocialiteProviders\Manager\SocialiteWasCalled[]` that you just created.

* The listener that you add for this provider is `'{{ listener }}',`.

* Note: You do not need to add anything for the built-in socialite providers unless you override them with your own providers.

For example:
 
{% highlight php startinline=true %}
/**
 * The event handler mappings for the application.
 *
 * @var array
 */
protected $listen = [
    `SocialiteProviders\Manager\SocialiteWasCalled` => [
        // add your listeners (aka providers) here
    ],
];
{% endhighlight %}

#### Reference

* [Laravel docs about events](http://laravel.com/docs/5.0/events)
* [Laracasts video on events in Laravel 5](https://laracasts.com/lessons/laravel-5-events)
