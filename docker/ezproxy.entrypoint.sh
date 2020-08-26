#!/bin/sh

# Install EZproxy
# https://help.oclc.org/Library_Management/EZproxy/Install_and_update_EZproxy/EZproxy_for_Linux_Install
cd /usr/local/ezproxy
if [ ! -f /usr/local/ezproxy/ezproxy ]
then
    wget --output-document=ezproxy-linux.bin https://help.oclc.org/@api/deki/files/9850/ezproxy-linux.bin?revision=1
    wget --output-document=ezproxy-linux-sha256sum.txt https://help.oclc.org/@api/deki/files/9121/ezproxy-linux-sha256sum.txt?revision=3
    sha256sum -c ezproxy-linux-sha256sum.txt
    mv ezproxy-linux.bin ezproxy
    chmod 755 ezproxy
    /usr/local/ezproxy/ezproxy -m
fi

if [ ! -f /usr/local/ezproxy/wskey.key ]
then
  /usr/local/ezproxy/ezproxy -k ${EZPROXY_WSKEY}
fi

/usr/local/ezproxy/ezproxy
