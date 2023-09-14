---
sidebar_position: 1
---

# Arch Linux: Configuring Additional IP

[Arch Linux](https://en.wikipedia.org/wiki/Arch_Linux) network configuration file is stored in 

```/etc/systemd/network/eth0_STATIC.network``` 

To open this file, we recommend using the text-editor *“nano”* . Other editors, such as *“vim”* will also work. The text-editor *“nano”* is not pre-installed on Arch Linux. To install it, just execute the following command:

```pacman -S nano```

After installing *“nano”* open the network configuration file with this command:

```nano /etc/system/network/eth0_STATIC.network```

When opening the file for the first time, it will look like this picture:

![Arch Linux Network Configuration](/img/products/additional-ips/howto/arch-linux-config/IP-additional-Arch-1.png)

In order to add 192.51.100.42 to your server, you need to add another **“Address”** entry at the end of the **"[Network]"** section. If you are a Contabo customer, the exact values can be found in the email Contabo sent you. If you are not a Contabo customer, contact your provider. The edited file should look like this picture:

![Arch Linux Network Address Configuration](/img/products/additional-ips/howto/arch-linux-config/IP-additional-Arch-2.png)

After completing the instructions, save the file and restart your server by typing: ```reboot```