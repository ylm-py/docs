---
sidebar_position: 3
---

# FreeBSD 12.2: Configuring Additional IP

FreeBSDs network interface configuration is stored in **/etc/rc.conf**. 
In order to configure additional IPv4 addresses, you need to add aliases. To do so, we are going to install the text-editor *“nano”* first. 
Other editors, such as *“vim”* are possible as well, but for this tutorial we will use *“nano”*. This editor is not pre-installed on FreeBSD. To install nano use the following command:

```pkg install nano```

Now open the network interface configuration file with:

```nano /etc/rc.conf```

Go to the end of the document and create a new alias by inserting this line:

```ifconfig_vtnet0_alias1=inet 192.51.100.42 netmask 255.255.255.255```

**Important**: If you are a Contabo customer the values for **“inet”** and **“netmask”** can be found in the email Contabo sent you. Otherwise contact you provider regarding the exact values. 
We used our example-values here.

If you want to add more than one additional IP address, use the same scheme, but carry on with alias2, alias3 and so on. After completing the instructions, save the file and restart your server with the following command: ```reboot```