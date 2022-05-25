---
sidebar_position: 1
---

# Missing private IP (CentOS 7)

When restarting a CentOS 7 server after adding it to a private network, the configuration of the new private network interface may fail, leaving it without an IP address. This can be fixed with a another attempt after applying a small change to cloud-init:

```bash
# Patch cloud-init
sudo sed "s/== 'static'/in ['static', 'static6']/" -i /usr/lib/python2.7/site-packages/cloudinit/net/sysconfig.py

# Reset cloud-init
sudo cloud-init clean

# Reboot to apply
sudo reboot
```

This is only necessary when just performing restart. The IP configuration should always succeed after a reinstallation. Other operating systems are not affected either.
