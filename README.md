# twlight_ezproxy

EZproxy Configuration for the Wikipedia Library.

## Documentation

See the [EZproxy Documentation](https://help.oclc.org/Library_Management/EZproxy) for additional EZproxy configuration details.

## Configuring proxied resources

Resources are defined in [ezproxy.cfg](expert/ezproxy.cfg).
OCLC maintains a list of [predefined Database stanzas](https://help.oclc.org/Library_Management/EZproxy/Database_stanzas) which it updates over time.
Many of these stanzas are available as include files in the hosted environment.
When adding or updating a resource, always check for a hosted include file first and simply add a reference to it if possible. 
If you add a reference to a hosted include file in [ezproxy.cfg](expert/ezproxy.cfg), you must add a corresponding empty file to the expert/databases directory to allow a local ezproxy instance to start.

If a predifined stanza is available, but no hosted include file is available, simply copy the stanza into [ezproxy.cfg](expert/ezproxy.cfg). These should be periodically checked for updates.

If no predefined stanza is available, contact the resource provider to see if they already have a suitable configuration. If so, copy that stanza into [ezproxy.cfg](expert/ezproxy.cfg) and test.

If the resource provider is unable to help, you'll need to create a new configuration. The documentation for [starting point URLS and config.txt](https://help.oclc.org/Library_Management/EZproxy/EZproxy_configuration/Starting_point_URLs_and_config_txt) is a great place to start learning about EZproxy resource configuration.

## Customizing the user interface

See the [Default Web Pages](https://help.oclc.org/Library_Management/EZproxy/Manage_EZproxy/Default_web_pages) documentation for modifying the user interface.

## Local configuration testing

  - Get Docker and Docker Compose
  - clone this repository
  - copy `example.env` to `.env` and fill in the values
  - Fire it up `docker-compose up`
  - [twlight_ezproxy FoxyProxy Configuration](docker/twlight_ezproxy_foxyproxy.md)
  - Sign into the [admin interface](http://ezproxy.dev.localdomain:2048/admin) with username `twlight` and password `twlight`
  - Add a [self-signed wildcard certificate to EZproxy](http://ezproxy.dev.localdomain:2048/ssl-new) for `*.ezproxy.dev.localdomain` see [ezproxy ssl documentation](https://help.oclc.org/Library_Management/EZproxy/Secure_your_EZproxy_server/010SSL_configuration)
    - fill in all non-optional text fields
    - Certificate name: `*.ezproxy.dev.localdomain`
    - Subject Alternate Name: check the boxes for both options
    - Create: Self-Signed Certficate
  - [restart ezproxy](http://ezproxy.dev.localdomain:2048/restart)

If you will be doing end-to-end testing with TWLight:
  - [logout](http://ezproxy.dev.localdomain:2048/logout) from the local ezproxy admin account.
  - test against your account in a locally running twlight instance.

If you are just testing resource configuration:
  - go to the [ezproxy menu](http://ezproxy.dev.localdomain:2048/menu) and select a resource from the `BUNDLE` resource group. The local ezproxy admin account has access to `BUNDLE` resources.

## Deploying changes to the hosted EZproxy environment

See the [Hosted EZproxy Self-Service Howto](https://help.oclc.org/@api/deki/files/4533/Hosted_EZproxy_Self_Service_How_To.pdf).
