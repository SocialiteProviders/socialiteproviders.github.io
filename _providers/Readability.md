---
layout: page
title: Readability
permalink: "/providers/readability/"
---
# Readability – OAuth1

## Contents

- [Installation](#installation)
  - [1. Composer](#1-composer)
  - [2. Service Provider](#2-service-provider)
  - [3. Add the Event and Listeners](#3-add-the-event-and-listeners)
  - [4. Services Array and .env](#4-services-array-and-env)
    - [Add to `config/services.php`.](#add-to-configservicesphp)
    - [Append provider values to your `.env` file](#append-provider-values-to-your-env-file)
- [Usage](#usage)


## Installation

### 1. Composer

{% highlight bash %}
// This assumes that you have composer installed globally
composer require socialiteproviders/readability
{% endhighlight %}

### 2. Service Provider

* [See the docs on how to install the `SocialiteProviders` service provider.](https://github.com/SocialiteProviders/Manager#2-service-provider)


### 3. Add the Event and Listeners

* The listener that you will be adding is `'SocialiteProviders\Readability\ReadabilityExtendSocialite@handle',`.

* [See the docs on how to install](https://github.com/SocialiteProviders/Manager#3-add-the-event-and-listeners)

### 4. Services Array and .env

#### Add to `config/services.php`.

{% highlight php %}
'readability' => [
    'client_id' => env('READABILITY_KEY'),
    'client_secret' => env('READABILITY_SECRET'),
    'redirect' => env('READABILITY_REDIRECT_URI'),
],
{% endhighlight %}

#### Append provider values to your `.env` file

{% highlight php %}
// other values above
READABILITY_KEY=yourkeyfortheservice
READABILITY_SECRET=yoursecretfortheservice
READABILITY_REDIRECT_URI=https://example.com/login
{% endhighlight %}

* [See the main docs for more information](https://github.com/SocialiteProviders/Manager#4-services-array-and-env)


## Usage

* You should now be able to use it like you would regularly use Socialite:

{% highlight php %}
return Socialite::with('readability')->redirect();
{% endhighlight %}

* [See the main docs for more information](https://github.com/SocialiteProviders/Manager#usage)
