### 4. Configuration setup

We recommend to **manually add an entry to the services configuration file** because after config files are cached for usage in production environment (Laravel command `artisan config:cache`), **values stored in the .env file are not accessible anymore by the application and the provider won't work**.

#### Add to `config/services.php`.

```php
'{{ provider_key | downcase }}' => [
    'client_id' => env('{{ provider_key }}_KEY'),
    'client_secret' => env('{{ provider_key }}_SECRET'),
    'redirect' => env('{{ provider_key }}_REDIRECT_URI'), {% if extra_service_lines != empty %} {% for line in extra_service_lines %}
    '{{ line.key | downcase }}' => env('{{ provider_key }}_{{ line.value | upcase }}'), {% endfor %}
], {% else %}
],
{% endif %}
```

#### Reference

* [Laravel docs on configuration](http://laravel.com/docs/master/configuration)
