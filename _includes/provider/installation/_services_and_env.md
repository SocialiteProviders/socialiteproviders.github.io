### 4. Environment Variables

If you add environment values to your .env as exactly shown below, **you do not need to add an entry to the services array.**

#### Append provider values to your `.env` file

```php
// other values above
{{ provider_key }}_KEY=yourkeyfortheservice
{{ provider_key }}_SECRET=yoursecretfortheservice
{{ provider_key }}_REDIRECT_URI=https://example.com/login {% if extra_env_lines != empty %} {% for line in extra_env_lines %}
{{ provider_key }}_{{ line.key | upcase }}={{ line.value }} {% endfor %} {% endif %}
```



#### Add to `config/services.php`.

**You do not need to add this if you add the values to the .env exactly as shown above.**
The values below are provided as a convenience in the case that a developer is not able to use the `.env` method

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
