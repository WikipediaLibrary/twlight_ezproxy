# twlight_ezproxy

EZproxy Configuration for the Wikipedia Library.

## Documentation

See the [EZproxy Documentation](https://help.oclc.org/Library_Management/EZproxy) for instructions on installing and configuring EZproxy in this directory.

## Local configuration testing

  - Get Docker and Docker Compose
  - clone this repository
  - copy `example.env` to `.env` and fill in the values
  - Fire it up `docker-compose up`
  - [twlight_ezproxy FoxyProxy Configuration](docker/twlight_ezproxy_foxyproxy.md)
  - Sign into the [admin interface](http://ezproxy.dev.localdomain:2048/admin) with username `twlight` and password `twlight`
  - Add a [self-signed wildcard certificate to EZproxy](http://ezproxy.dev.localdomain:2048/ssl-new) for `*.ezproxy.dev.localdomain` see [ezproxy ssl documentation](https://help.oclc.org/Library_Management/EZproxy/Secure_your_EZproxy_server/010SSL_configuration)
  - [restart ezproxy](http://ezproxy.dev.localdomain:2048/restart)
  - [logout](http://ezproxy.dev.localdomain:2048/logout) from the local ezproxy admin account.
  - test against locally running twlight instance.
