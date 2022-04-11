---
sidebar_position: 1
title: Persisting hostname
---

# Persisting hostname for cloud-init enabled Cloud VPS/VDS

As [`cloud-init`](https://cloudinit.readthedocs.io/en/latest/) sets the hostname on each reboot, the hostname you wish to set may not be persistent or reboot safe.

There are several possibilities to make sure your hostname remains:

1. simply set the hostname via cloud-init, please refer to [Set Hostname](https://cloudinit.readthedocs.io/en/latest/topics/modules.html?highlight=hostname#set-hostname). Then it will always be set to the desired name.
2. disable cloud-init altogether by `sudo touch /etc/cloud/cloud-init.disabled`
3. perform a proper shutdown or reboot of your operating system e.g. via `reboot`. This will eject the cloud-init file mounted causing setting the hostname on each reboot.
