---
sidebar_position: 7
---

# OpenSUSE Leap 15.2: Configuring Additional IP

To add additional IP addresses to OpenSUSE, you need to use the pre-installed tool YaST. Login as root and use the following command to access the YaST interface:

```yast2 lan```

It will look like this picture:

![OpenSUSE Leap Network Address Configuration](/img/products/additional-ips/howto/opensuse-leap-config/IP-additional-OpenSuse-pic1.png)

Now, use the [Tab] key to select you interface. Press [Alt+I] to edit the interface. You should see this menu now:

![OpenSUSE Leap Network Address Configuration](/img/products/additional-ips/howto/opensuse-leap-config/IP-additional-OpenSuse-pic2.png)

Use the [Tab] key to navigate to the [Add] button. This menu will pop up:

![OpenSUSE Leap Network Address Configuration](/img/products/additional-ips/howto/opensuse-leap-config/IP-additional-OpenSuse-pic3.png)

Ignore the **“Address Label”** field and use the [Tab] key to navigate to **“IP Address”**. Fill in the additional IP you purchased at Contabo. All information needed can be found in the email Contabo sent you. For the Netmask, fill in number 24

It should look like this picture:

![OpenSUSE Leap Network Address Configuration](/img/products/additional-ips/howto/opensuse-leap-config/IP-additional-OpenSuse-pic4.png)

Now, use the [Tab] key again and select **“OK“**. Use the [Tab] key to navigate to **“Next”**.

![OpenSUSE Leap Network Address Configuration](/img/products/additional-ips/howto/opensuse-leap-config/IP-additional-OpenSuse-pic5.png)

Select **“OK”** on the next page as well. Your changes will be saved and YaST will automatically close. After completing the instructions use this command to reboot your server: ```reboot```