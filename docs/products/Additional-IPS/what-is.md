---
sidebar_position: 1
---

# Additional IPs Overview

The following guide will give you an overview on how to configure additional [IPv4 addresses](https://en.wikipedia.org/wiki/IP_address#IPv4_addresses) on the most popular operating systems. We designed this article to be helpful not only for our Contabo customers, but also for people using any other provider. In addition to learning how to configure IPv4 addresses, you may need to refer to our related article on how to configure [IPv6 addresses](https://contabo.com/blog/ipv6-now-available-for-all-our-customers/): [https://contabo.com/blog/adding-ipv6-connectivity-to-your-server](https://contabo.com/blog/adding-ipv6-connectivity-to-your-server/)

## Video Guide

[<img src="https://img.youtube.com/vi/x6agdLGjI3M/hqdefault.jpg" width="600" height="300"
/>](https://www.youtube.com/embed/x6agdLGjI3M)

## Getting Started
As an example, we will use **192.51.100.10** as the primary IP address and we will assume that the additional IP address is **192.51.100.42**. As a general rule, we recommend configuring these addresses with a netmask of **255.255.192.0(/18)** respectively **/128** and without adding a new gateway.

If you’re not sure about your admin rights in Linux, always enter the command sudo -i at the beginning of every session:

```sudo -i```

This command will grant you the rights of a power user, so you don’t have to write the command sudo at the beginning of every command line.

## Default IP Configuration for Contabo Customers
Every server comes already pre-configured with one IPv4 and one IPv6 address. Additional IPv4 addresses can be ordered when placing an order for a new server through our homepage or by contacting us at support@contabo.com. Important: Additional IPv4 addresses will not be added to your system automatically but will have to be configured manually.

Additional IPv4 address is always tied to a specific server by default. In case you want to use your IP on a different server, it is necessary to change the IP assignment within the Contabo Customer Control Panel in the section **“IP Management”**

