# twlight_ezproxy

EZproxy Configuration for the Wikipedia Library.

## Documentation

See the [EZproxy Documentation](https://help.oclc.org/Library_Management/EZproxy) for instructions on installing and configuring EZproxy in this directory.

## Local configuration testing

  - Get Docker and Docker Compose
  - clone this repository
  - let ezproxy know the secret value for TWLight authentication
    - `echo <TWLIGHT_EZPROXY_SECRET_VALUE> | docker/secrets/EZPROXY_SECRET`
  - let ezproxy know it's licence key
    - `echo <EZPROXY_WSKEY_VALUE> | docker/secrets/EZPROXY_WSKEY`
  - Fire it up `docker-compose up`
  - [twlight_ezproxy FoxyProxy Configuration](docker/twlight_ezproxy_foxyproxy.md)
  - See the thing running on [localhost](http://ezproxy.localdomain:2048)
  - Add a [self-signed certificate to EZproxy](https://help.oclc.org/Library_Management/EZproxy/Secure_your_EZproxy_server/010SSL_configuration)
