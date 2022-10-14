---
sidebar_position: 2
---

# Migration between Regions

VPS and VDS without additional SSDs can be moved to a different Region upon request. You can start this process in your [Customer Control Panel](https://my.contabo.com/): Switch to “Your Services” and choose the option “Move to other Region” from the Manage menu right next to the VPS or VDS you want to transfer.

## Regions & Location Fees

You can learn about regions available on our website: https://contabo.com/en/locations/

For some Regions there is a Location Fee which you can be seen in this overview: https://contabo.com/en/location-fees/

## Deployment Methods

### New Deployment

All data of your current instance will be deleted and a new instance with a new IP address will be created in a desired Region. This method is free of charge.

### Migration

In this case, we will migrate your server including all server data to the desired Region. Your server will stay online during the data transfer. The duration of a Migration depends on the amount of data which needs to be transferred and some other technical conditions. We cannot give you an exact estimation, but a Migration should take not longer than 12 hours. After the completion of data transfer the server needs to be rebooted and reconfigured. During that downtime we reconfigure the main IP address of your server. This causes a downtime of approximately 1 hour. Only in seldom cases the downtime can be up to 12 hours.

There is an one-time service charge of €33.00 / $38.50 / £33.00 plus VAT (where applicable) for the migration since there is some manual effort on our end required.

#### IP address changes after Migration

* The main IPv4 address of your server must be changed to a completely different one. In most cases we will undertake this task and thus make sure you can reach your server over the new IPv4 address. In some cases, however, it might be necessary for you to configure the new IP address yourself via VNC once the migration is completed.
* The VNC address of your server must be changed. We will undertake this task and thus make sure you can reach your server over the new VNC address.
* Also, all of your additional IPv4 addresses and all IPv6 addresses will be replaced. We will not undertake the configuration work for these IP addresses.
* We will tell you all new IP addresses right after the Migration.
* The PTR record of the main IPv4 address will be set automatically. The configuration of PTR records for additional IPv4 and all IPv6 addresses is up to you.

### Additional configuration for certain services after moving to a different Region

* It will be necessary to adapt the DNS configuration of domains; we will update DNS records on our name servers, while you will have to update DNS records on other name servers.
* You would have to reconfigure all additional IP addresses
* Any other service using your IP address statically needs to be reconfigured

### Procedure for additional Add-Ons

* If you have a Backup-Space Add-On: Data on it will not be available at the new Location. We will delete the Backup Space at the old Location and create a new and empty Backup Space at the new Location. If required, you should temporarily move and store all data elsewhere (not on the Backup Space and not on the server).
* If you have a Full-Monitoring Add-On: The monitored IP will be updated automatically.
* If you have a Floating-IP Add-On: Floating IP addresses will not work across Locations.
