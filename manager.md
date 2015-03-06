---
layout: default
---

# Socialite Providers Manager

## Contents

- [About](#about)
  - [Benefits](#benefits)
- [Available Providers](#available-providers)
- [Installation](#installation)
  - [1. Composer](#composer)
  - [2. Service Provider](#service-provider)
  - [3. Add the Event and Listeners](#add-the-event-and-listeners)
    - [Reference](#reference)
  - [4. Services Array and .env](#services-array-and-env)
    - [Reference](#reference-1)
- [Usage](#usage)
    - [Reference](#reference-2)
- [Creating a Handler](#creating-a-handler)
    - [Reference](#reference-3)
- [Creating a Provider](#creating-a-provider)
- [Overriding a Provider](#overriding-a-built-in-provider)

## About

A package for Laravel Socialite that allows you to easily add new providers or override current providers.

### Benefits

* You will have access to all of the providers that you load in using the manager.
* Instantiation is deferred until Socialite is called
* You can override current providers
* You can create new providers

## Available Providers

* See the [SocialiteProviders](https://github.com/SocialiteProviders) list
* You can also make your own or modify someone else's

## Installation

### 1. Composer

Note: You will not need to do this if you require one of the available providers.

{% highlight bash startinline=true %}
// This assumes that you have composer installed globally
composer require socialiteproviders/manager
{% endhighlight %}

### 2. Service Provider

* Remove `Laravel\Socialite\SocialiteServiceProvider` from your `providers[]` array in `config\app.php` if you have added it already.

* Add `SocialiteProviders\Manager\ServiceProvider` to your `providers[]` array in `config\app.php`.

For example:

{% highlight php startinline=true %}
'providers' => [
    // a whole bunch of providers
    // remove 'Laravel\Socialite\SocialiteServiceProvider',
    'SocialiteProviders\Manager\ServiceProvider', // add
];
{% endhighlight %}

### 3. Add the Event and Listeners

* Add `SocialiteProviders\Manager\SocialiteWasCalled` to your `listen[]` array  in `<app_name>/Providers/EventServiceProvider`.

* Add your listeners (i.e. the ones from the providers) to the `SocialiteProviders\Manager\SocialiteWasCalled[]` that you just created.

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
        'Your\Name\Space\ProviderNameExtendSocialite@handle', // the listener for the provider that you made
        'SocialiteProviders\Meetup\MeetupExtendSocialite@handle', // the listener for an actual provider
        // This is where we define all of our ExtendSocialite listeners (i.e. new providers)
    ],
];
{% endhighlight %}

#### Reference

* [Laravel docs about events](http://laravel.com/docs/5.0/events)
* [Laracasts video on events in Laravel 5](https://laracasts.com/lessons/laravel-5-events)


### 4. Services Array and .env

**Note:** In these examples, you need to replace the `providername` with the actual name of the provider.

* Add your provider to `config/services.php`.

{% highlight php startinline=true %}
'providername' => [
    'client_id' => env('PROVIDERNAME_KEY'),
    'client_secret' => env('PROVIDERNAME_SECRET'),
    'redirect' => env('PROVIDERNAME_REDIRECT_URI'),
]
{% endhighlight %}

* Append provider values to your `.env` file

{% highlight php startinline=true %}
// other values above
PROVIDERNAME_KEY=yourkeyfortheservice
PROVIDERNAME_SECRET=yoursecretfortheservice
PROVIDERNAME_REDIRECT_URI=https://example.com/login
{% endhighlight %}

#### Reference

* [Laravel docs on configuration](http://laravel.com/docs/master/configuration)


## Usage

You should now be able to use it like you would regularly use socialite:

{% highlight php startinline=true %}
return Socialite::with('providername')->redirect();
// replace providername with your provider name!
{% endhighlight %}

#### Reference

* [Laravel Socialite Docs](http://laravel.com/docs/5.0/authentication#social-authentication)
* [Laracasts Socialite video](https://laracasts.com/series/whats-new-in-laravel-5/episodes/9)



## Creating a Handler

Below is an example handler.  You need to add this full class name to the `listen[]` in the `EventServiceProvider`.

* [See also the Laravel docs about events](http://laravel.com/docs/5.0/events).
* `providername` is the name of the provider such as `meetup`.
* You will need to change your the namespacing and class names of course.


{% highlight php startinline=true %}
namespace Your\Name\Space;

use SocialiteProviders\Manager\SocialiteWasCalled;

class ProviderNameExtendSocialite
{
    public function handle(SocialiteWasCalled $socialiteWasCalled)
    {
        $socialiteWasCalled->extendSocialite('providername', 'Your\Name\Space\ProviderName');
    }
}
{% endhighlight %}

#### Reference

* [Laravel Docs on Events](http://laravel.com/docs/master/events)

## Creating a Provider

* Look at the already made [providers](#available-providers) for inspiration.
* [See this article on Medium](https://medium.com/@morrislaptop/adding-auth-providers-to-laravel-socialite-ca0335929e42)

## Overriding a Built-in Provider

You can easily override a built-in `laravel/socialite` provider by creating a new one with exactly the same name.
