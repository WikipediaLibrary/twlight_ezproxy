#!/bin/sh
/usr/bin/ssh-keygen -A && cat /dev/zero | ssh-keygen -q -N ""
cp /root/.ssh/id_rsa.pub /root/.ssh/authorized_keys
/usr/sbin/sshd -p 2222 -e
ssh -v -N -o StrictHostKeyChecking=no -g -tt -D 2080 127.0.0.1 -p 2222
