---
sidebar_position: 6
---

# Ubuntu (17.10 and above): Configuring Additional IP

In Ubuntu beginning with version 17.10, you can find the network configuration in the file **/etc/netplan/01-netcfg.yaml**. With this method you can assign additional ipv4 addresses to the interface eth0. 
To do so, open the network configuration file with the following command:

```nano /etc/netplan/01-netcfg.yaml```

It should look like this picture:

![Ubuntu 17.10 Network Address Configuration](/img/products/additional-ips/howto/ubuntu17.10-config/IP-additional-Ubuntu-newer-versions-1.png)


To add additional IP addresses to Ubuntu, just add a new line to the **“addresses:”** section. It’s important to keep the correct format!

![Ubuntu 17.10 Network Address Configuration](/img/products/additional-ips/howto/ubuntu17.10-config/IP-additional-Ubuntu-newer-versions-2.png)

The red framed IP address is the added one. To apply the changes, please enter the following commands:

```
netplan apply
reboot
```

*If you are a Contabo customer*, you will find all the necessary values in the email Contabo sent you. *Otherwise*, contact your provider regarding your additional IP address.