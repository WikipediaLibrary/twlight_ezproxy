FROM library/alpine:3.12

#RUN apk add openssh-server-pam openssh-client && echo root:root | chpasswd && /usr/bin/ssh-keygen -A && cat /dev/zero | ssh-keygen -q -N ""

RUN apk add openssh-server-pam openssh-client

COPY socks.entrypoint.sh /

EXPOSE 2022

#ENTRYPOINT ["/usr/sbin/sshd", "-p", "2022", "-D", "-e"]
ENTRYPOINT ["/bin/sh", "-i", "/socks.entrypoint.sh"]
