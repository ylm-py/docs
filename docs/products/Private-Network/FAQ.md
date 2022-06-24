---
sidebar_position: 1
---

# What is Private Networking?

Private Networking is an optional extension to the functionality of Contabo’s [Cloud VPS (Virtual Private Server)](https://contabo.com/en/vps/) and [Cloud VDS (Virtual Dedicated Servers)](https://contabo.com/en/vds/), allowing the enabled instances in the same Contabo location to communicate within a private network.

Instances within the same private network get assigned private IP addresses and communications in between them is limited to this private network.

### What are the benefits I get from an instance with Private Networking enabled?

- Secure communications between Contabo instances within the same location – connect multiple Cloud VPS / Cloud VDS through a private network to enable secure data transfer between them.
- Auto-assigned private IP addresses for effortless configuration – just choose the regarding Cloud VPS / Cloud VDS and private network, we ‘ll do the rest, no manual choosing network sizes / masks or manual private IP configuration.

### I am new to Contabo, how can I buy the Private Networking?

Please visit www.contabo.com, choose an instance from our Cloud VPS and Cloud VDS line along with the Private Networking add-on and you will be able to add those instances to one or more private networks.

### I have a Cloud VPS / Cloud VDS, how can I get the Private Networking features?

Please visit the Private Networking section in my.contabo.com where through adding instances to a private network, you can directly buy the add-on for existing instances.
[Here](/docs/products/Private-Network/Tutorial/createPrivateNetwork) you find a tutorial about how to create a private network.

### How do I get access to the Private Networking features?

After buying the Private Networking add-on for a Contabo instance, the features are directly available through <https://my.contabo.com/> (see Private Networking section) and the API.

### What are the limitations of the Private Networking features?

The maximum network size is /22, which provides a gross maximum of 1’024 addresses.

### Can I add Private Networking features to any Contabo product?

No, Private Networking features are only available for Cloud VPS and Cloud VDS products.

### Is Private Networking available in all Regions of Contabo?

Yes, you are free to use Private Networking features with Cloud VPS and Cloud VDS in any Contabo Region.

### Is there a downtime / need for migration when activating Private Networking for my Cloud VPS / Cloud VDS?

Activating Private Networking for your Cloud VPS / Cloud VDS is seamless, yet any instance needs to reboot once before adding it to a private network becomes effective.
If you are not yet using Contabo’s DevOps features for your existing VPS a re-installation is necessary.
Please see [this tutorial](/docs/products/Private-Network/Tutorial/restart) or the Private Networking section in <https://my.contabo.com/> for further details.

### Can I add a Cloud VPS / Cloud VDS to more than one private network at the same time?

Yes, a Cloud VPS / Cloud VDS can be added to multiple private networks in parallel.

### How can I control my Private Networking features through the API / CLI?

Instructions on how to use the API & CLI can be found here: <https://api.contabo.com/>

### Can I create a private network across multiple regions?

Private networks can only be created in one region at a time. Only instances in the same region can be added to a private network.

### Is VPN (Virtual Private Network) the same as Private Networking?

No. VPN and private networks are two different things:

- With a VPN (Virtual Private Network) you establish a secured connection between two computers over an unsecure (i.e. public) network.
- Private networks are used to link computers direcly with separate (usually physical) network connection which is completely private. No public nets there.

### Does Private Networking provide a firewall?

Currently there is no firewall feature. Most likely you are looking to have one server being accessible to the internet while others are only part of the private network. In such cases please use the local firewalls of your operating system to turn off internet access for the chosen servers. In future Contabo will make a separate Firewall feature available.
