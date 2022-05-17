---
sidebar_position: 2
---

# Migration between Regions

VPS and VDS without additional SSDs can be moved to a different Region upon request. You can start this process in your [Customer Control Panel](https://my.contabo.com/): Switch to “Your Services” and choose the option “Move to other Region” from the Manage menu right next to the VPS or VDS you want to transfer.

## Available Regions

* European Union (Germany)
* United States (Central)
* United States (East)
* United States (West)
* Asia (Singapore)

If your server shall be migrated to one of our Regions in the United States (Central, East, West) or Asia (Singapore), there is a certain Location Fee which you can extract from the overview provided on our website:
 
https://contabo.com/en/location-fees/

## Available options to change the Region

### New Deployment

All data of your current VPS will be deleted and a new instance with a new IP address will be created in a desired Region. This method is free of charge.

### Migration

available at a rate of €30.00 / $35.00 one-time plus VAT (where applicable)

With this option, we will migrate your server including all server data to the desired Location. Your server will stay online after the start of data transfer. The duration of a Migration depends on the amount of data which needs to be transferred and some other technical conditions. We cannot give you an exact estimation, but a Migration should take not longer than 12 hours. Still, keep in mind, you can use your server during the whole Migration process. After the completion of data transfer, the server needs to be rebooted. This causes a downtime of approximately 1 hour. During that downtime we reconfigure the main IP address of your server. Only in seldom cases the downtime can be longer, up to 12 hours in the worst case. Even though this is not likely, we wanted to let you know about the possibility beforehand.
 
#### IP address changes after migration
 
* The main IPv4 address of your server must be changed to a completely different one. In most cases we will undertake this task and thus make sure you can reach your server over the new IPv4 address. In some cases, however, it might be necessary for you to configure the new IP address yourself via VNC once the migration is completed.
* The VNC address of your server must be changed. We will undertake this task and thus make sure you can reach your server over the new VNC address.
* Also, all of your additional IPv4 addresses and all IPv6 addresses will be replaced. We will not undertake the configuration work for these IP addresses.
* We will tell you all new IP addresses right after the Migration.

### Additional configuration for certain services after moving to a different Region

* It will be necessary to adapt the DNS configuration of domains; we will update DNS records on our name servers, while you will have to update DNS records on other name servers. 
* You would have to reconfigure all additional IP addresses 
* Any other service using your IP address statically needs to be reconfigured
 
### Procedure for additional Add-Ons
 
* If you have a Backup-Space Add-On: Data on it will not be available at the new Location. We will delete the Backup Space at the old Location and create a new and empty Backup Space at the new Location. If required, you should temporarily move and store all data elsewhere (not on the Backup Space and not on the server).
* If you have a Full-Monitoring Add-On: The monitored IP will be updated automatically.
* If you have a Floating-IP Add-On: Floating IP addresses will not work across Locations.
