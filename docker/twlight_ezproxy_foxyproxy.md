# twlight_ezproxy FoxyProxy Standard Configuration

## Using FoxyProxy to automatically proxy only ezproxy URLs:

You may use the FoxyProxy Standard for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/) and [Chrome](https://chrome.google.com/webstore/detail/foxyproxy-standard/gcknhkkoolaabfmlnjonogaaifnjlfnp) to proxy only matched URL patterns. This removes the hassle of having to regularly enable/disable a proxy.

## Configuring FoxyProxy Standard

You can import the [twlight_ezproxy FoxyProxy settings file](twlight_ezproxy_foxyproxy.json) or you can add the following configuration manually:

Proxy:

```
Title:      ezproxy.localdomain
Proxy Type: SOCKS5
Proxy DNS?: On (Firefox only)
IP Address: 127.0.0.1
Port:       2080
```

White Patterns:

```
Name:       ezproxy.localdomain
Pattern:    *.ezproxy.localdomain:*
Type:       wildcard
http(s):    all
On/Off:     on
```

## A note on FoxyProxy Standard for Chrome

The Chrome version is more fiddly to setup, as you must set a shortcut to include the [--host-resolver-rules](https://www.chromium.org/developers/design-documents/network-stack/socks-proxy) flag due to the way the browser handles DNS. On Windows, the Start Menu shortcut for Chrome is located in the following location:

```
%programdata%\Microsoft\Windows\Start Menu\Programs
```

Update the Target (note that this is 32-bit Chrome) from:

```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
```

to:

```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --host-resolver-rules
```

Unpin and repin and start menu and taskbar shortcuts to Chrome afterwards.
