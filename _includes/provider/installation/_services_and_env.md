### 4. Configuration setup

You will need to add an entry to the services configuration file so that after config files are cached for usage in production environment (Laravel command `artisan config:cache`) all config is still available.

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
