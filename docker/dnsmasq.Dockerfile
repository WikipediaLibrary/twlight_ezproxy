FROM quay.io/wikipedialibrary/alpine:3.12-updated

# Install dnsmasq.
RUN apk add dnsmasq

ENTRYPOINT ["/usr/sbin/dnsmasq", "--conf-dir=/etc/dnsmasq.d", "--no-daemon"]
