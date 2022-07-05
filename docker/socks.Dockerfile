FROM quay.io/wikipedialibrary/alpine:3.12-updated

RUN apk add openssh-server-pam openssh-client

COPY socks.entrypoint.sh /

EXPOSE 2080

ENTRYPOINT ["/bin/sh", "-i", "/socks.entrypoint.sh"]
