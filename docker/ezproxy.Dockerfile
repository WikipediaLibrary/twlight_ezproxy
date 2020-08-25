FROM library/alpine:3.12

# EZproxy needs glibc.
RUN \
    wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
    wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.32-r0/glibc-2.32-r0.apk && \
    apk add glibc-2.32-r0.apk
# Install EZproxy
# https://help.oclc.org/Library_Management/EZproxy/Install_and_update_EZproxy/EZproxy_for_Linux_Install
RUN \
    mkdir -p /usr/local/ezproxy && \
    cd /usr/local/ezproxy && \
    if [ ! -f /usr/local/ezproxy/ezproxy ] ; \
    then \
        wget --output-document=ezproxy-linux.bin https://help.oclc.org/@api/deki/files/9850/ezproxy-linux.bin?revision=1 && \
        wget --output-document=ezproxy-linux-sha256sum.txt https://help.oclc.org/@api/deki/files/9121/ezproxy-linux-sha256sum.txt?revision=3 && \
        sha256sum -c ezproxy-linux-sha256sum.txt && \
        mv ezproxy-linux.bin ezproxy && \
        chmod 755 ezproxy ; \
    fi

EXPOSE 2048

ENTRYPOINT ["/usr/local/ezproxy/ezproxy"]
