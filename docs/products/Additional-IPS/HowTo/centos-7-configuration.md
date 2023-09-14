---
sidebar_position: 2
---

# CentOS 7.x: Configuring Additional IP

CentOS has all its network interface configuration files stored in **/etc/sysconfig/network-scripts**. 
In order to configure additional IPv4 addresses, one virtual interface for each additional IPv4 address has to be created.
The main interface is stored in **“ifcfg-eth0”**. If the main interface is e.g. **ifcfg-eth0**, the virtual interfaces would be named **ifcfg-eth0:0, ifcfg-eth0:1, ifcfg-eth0:2** and so on. 
To add additional IP addresses, it’s required to create a new virtual interface. To do so, we are going to install the text-editor *“nano”* first. 
It’s also possible to use any other text editor, such as *“vim”*, if you want to. The *“nano”* editor is not pre-installed on CentOS 7.x. 
To install nano, use the following command:

```yum install nano```

Now, navigate to the network interface configuration folder using the following command:

```cd /etc/sysconfig/network-scripts```

Create a new virtual interface with:

```nano ifcfg-eth0:0```

The file will be created and opened with the text-editor “nano”. Now the following paragraphs must be added:
```
DEVICE=”eth0:0”
BOOTPROTO=”none”
ONBOOT=”yes”
IPADDR=”192.51.100.42”
NETMASK=”255.255.255.255”
```

**Important**: Values used in this article are just an example. The values for **“IPADDR”** and **“NETMASK”** can be found in the email Contabo sent you. If you are not a Contabo customer the values should be provided by your provider.

The file should look like this picture:

![Centos7 Network Address Configuration](/img/products/additional-ips/howto/centos7-config/Additional-IP-CentOS-1.png)

After completing the instructions, save the file and restart your server by typing: ```reboot```

