---
layout: default
title: Steam
permalink: "/providers/steam/"
---

{% comment %} Assign variables for current provider {% endcomment %}

{% for provider in site.data.providers %}
    {% if provider.name == page.title %}
        {% assign name = provider.name %}
        {% assign repo = provider.repo %}
        {% assign maintainer = provider.maintainer %}
        {% assign maintainer_profile = provider.maintainer_profile %}
        {% assign package = provider.package %}
        {% assign listener = provider.listener %}

        {% if provider.socialite_name %}
            {% assign socialite_name = provider.socialite_name %}
            {% assign provider_key = provider.socialite_name | upcase %}
        {% else %}
            {% assign provider_key = name %}
        {% endif %}

        {% assign extra_service_lines = provider.extra_service_lines %}
        {% assign extra_env_lines = provider.extra_env_lines %}
    {% endif%}
{% endfor %}

{% comment %} Create the provider key by removing any special chars from the name and upcasing {% endcomment %}

{% assign remove = '. +' | split: ' ' %}

{% for char in remove %}
   {% assign provider_key = provider_key | remove: char %}
{% endfor %}

{% assign provider_key = provider_key | upcase %}

{% comment %}
Include the templates.  They use the above variables.
{% endcomment %}

{% include provider/_contents.md %}

## Installation

{% include provider/installation/_composer.md %}

{% include provider/installation/_service_provider.md %}

{% include provider/installation/_event_and_listeners.md %}

### 4. Environment Variables

If you add environment values to your .env as exactly shown below, **you do not need to add an entry to the services array.**

#### Append provider values to your `.env` file

```php
// other values above
{{ provider_key }}_KEY=yourapikeyfortheservice
{{ provider_key }}_REDIRECT_URI=https://example.com/login {% if extra_env_lines != empty %} {% for line in extra_env_lines %}
{{ provider_key }}_{{ line.key | upcase }}={{ line.value }} {% endfor %} {% endif %}
```



#### Add to `config/services.php`.

**You do not need to add this if you add the values to the .env exactly as shown above.**
The values below are provided as a convenience in the case that a developer is not able to use the `.env` method

```php
'{{ provider_key | downcase }}' => [
    // the client_id key is required, even though it isn't utilised by the Steam provider
    'client_id' => null,
    'client_secret' => env('{{ provider_key }}_KEY'),
    'redirect' => env('{{ provider_key }}_REDIRECT_URI'), {% if extra_service_lines != empty %} {% for line in extra_service_lines %}
    '{{ line.key | downcase }}' => env('{{ provider_key }}_{{ line.value | upcase }}'), {% endfor %}
], {% else %}
],
{% endif %}
```

#### Reference

* [Laravel docs on configuration](http://laravel.com/docs/master/configuration)

## Usage

* You should now be able to use it like you would regularly use Socialite (assuming you have the facade installed):

```php
return Socialite::with('{{ name | downcase | remove: '.' | replace:' ','_' }}')->redirect();
```

### Lumen Support

You can use Socialite providers with Lumen.  Just make sure that you have facade support turned on and that you follow the setup directions properly.

Also, configs cannot be parsed from the `services[]` in Lumen.  You can only set the values in the `.env` file as shown exactly in this document.  If needed, you can
  also override a config (shown below).


### Overriding a config

If you need to override the provider's environment or config variables dynamically anywhere in your application, you may use the following:

```php
$clientKey = "apikey";
$redirectUrl = "http://yourdomain.com/api/redirect";
$additionalProviderConfig = ['site' => 'meta.stackoverflow.com'];
$config = new \SocialiteProviders\Manager\Config(null, $clientKey, $redirectUrl, $additionalProviderConfig);
return Socialite::with('{{ name | downcase | remove: '.' | replace:' ','_' }}')->setConfig($config)->redirect();
```


#### Reference

* [Laravel Socialite Docs](https://github.com/laravel/socialite)
* [Laracasts Socialite video](https://laracasts.com/series/whats-new-in-laravel-5/episodes/9)

