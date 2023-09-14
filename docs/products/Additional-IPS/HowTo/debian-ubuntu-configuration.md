---
sidebar_position: 5
---

# Debian (10/11) & Ubuntu (until 17.04): Configuring Additional IP

Debian’s and Ubuntu’s network interface configuration is stored in **/etc/network/interfaces**. 
Now we will open the network interface configuration with the text editor *”nano”*. To do so use this command:

```nano /etc/network/interfaces```

When opening the file for the first time it should look like this picture:

![Debian Network Address Configuration](/img/products/additional-ips/howto/debian-config/IP-additional-Debian-1.jpg)

In order to add **192.51.100.42** to your server, you need to copy the first block (framed in red) except the last line (starting at **“auto eth0”**; ending at **“dns-nameservers 231.136.95.11 231.136.95.10”**). Then paste the copied block with a little bit of spacing below as shown in the screenshot (The yellow framed block is the pasted one):

![Debian Network Address Configuration](/img/products/additional-ips/howto/debian-config/IP-additional-Debian-2.png)

Explaining the Screenshot: The red box contains all primary IP settings and 192.51.100.10 is your primary IP address. The yellow box contains additional IP settings. It’s similar to the first box but the **“address”** has been changed to the additional IP you’ve bought. Now it’s important to change the values for **“address”**, **“netmask”** and **“gateway“**. *If you are a Contabo customer* the exact values can be found in the email Contabo sent you. *Otherwise contact your provider* regarding the exact values.

After completing the instructions, save the file and restart your server using the command: ```reboot```