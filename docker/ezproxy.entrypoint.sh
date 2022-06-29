#!/bin/sh

# Install EZproxy
# https://help.oclc.org/Library_Management/EZproxy/Install_and_update_EZproxy/EZproxy_for_Linux_Install

if [ ! -f /usr/local/ezproxy/ezproxy ]
then
    mkdir -p /usr/local/ezproxy
    cd /usr/local/ezproxy
    wget --output-document=ezproxy-linux.bin https://help.oclc.org/@api/deki/files/9850/ezproxy-linux.bin?revision=6
    wget --output-document=ezproxy-linux-sha256sum.txt https://help.oclc.org/@api/deki/files/11977/ezproxy-linux-sha256.sum?revision=6
    sha256sum -c ezproxy-linux-sha256sum.txt
    mv ezproxy-linux.bin ezproxy
    chmod 755 /usr/local/ezproxy/ezproxy
    /usr/local/ezproxy/ezproxy -m
fi

if [ ! -f /usr/local/ezproxy/wskey.key ]
then
  /usr/local/ezproxy/ezproxy -k ${EZPROXY_WSKEY}
fi

if [ -f /usr/local/ezproxy/ezproxy ] && [ -f /usr/local/ezproxy/wskey.key ]
then
    chmod 755 /usr/local/ezproxy/ezproxy
    /usr/local/ezproxy/ezproxy
fi
