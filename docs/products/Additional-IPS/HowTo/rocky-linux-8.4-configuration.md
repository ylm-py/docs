---
sidebar_position: 4
---

# Rocky Linux 8.4: Configuring Additional IP

To add additional IP addresses in Rocky Linux, you need to use the pre-installed tool nmtui.
Login as root and use the following command to access the nmtui interface:
nmtui

It will look like this picture:

![Rocky 8.4 Network Address Configuration](/img/products/additional-ips/howto/rocky8.4-config/IP-additional-Rocky-1.png)

Hit [Enter] to select the menu option **“Edit a connection”**. You will usually find one connection under **“Ethernet”** which is **“System eth0”**. It will look like this picture:

![Rocky 8.4 Network Address Configuration](/img/products/additional-ips/howto/rocky8.4-config/IP-additional-Rocky-2.png)

Now hit [Enter] again. The new screen will look like this picture:

![Rocky 8.4 Network Address Configuration](/img/products/additional-ips/howto/rocky8.4-config/IP-additional-Rocky-3.png)

Use the arrow keys and/or the [Tab] key to navigate in this menu. Make sure, that the IPv4 Configuration is set to **“Manual”**, otherwise change it to **“Manual”**. Navigate to the **“<Add…>”** section right below **“Addresses”** and hit [Enter]. Add your purchased additional IP address and put **“/24”** as the subnet mask behind it.

**Important**: All information regarding your additional IP can be found in the email Contabo sent you. We use **“192.51.100.42”** as our example IP address. After switching the Mode to **“Manual”** and adding your address, it should look like this picture:

![Rocky 8.4 Network Address Configuration](/img/products/additional-ips/howto/rocky8.4-config/IP-additional-Rocky-4.png)

Use the arrow keys or the [Tab] key to navigate to **“OK”**. Now navigate to **“Back”**. Use the arrow keys or the [Tab] key to select the second menu option **“Activate a connection”**. Deactivate the selected connection and activate it again. *Important advice*: Sometimes it happens that the console freezes and you get disconnected from your server.

*If you are a Contabo customer*, please login to my.contabo.com and manually restart your server. *If you’re using a different provider*, login to your provider’s dashboard and try to restart your server there or contact your provider directly.

