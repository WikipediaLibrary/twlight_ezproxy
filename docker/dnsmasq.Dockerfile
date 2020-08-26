FROM library/alpine:3.12

# Install dnsmasq.
RUN apk add dnsmasq

ENTRYPOINT ["/usr/sbin/dnsmasq", "--conf-dir=/etc/dnsmasq.d", "--no-daemon"]
