---
sidebar_position: 1
---

# What is Cloud VPS and VDS?

Contabo offers [Cloud VPS (Virtual Private Server)](https://contabo.com/en/vps/) and [Cloud VDS (Virtual Dedicated Servers)](https://contabo.com/en/vds/). Basically they are virtual machines being so called root servers. This means that you as a customer have full adminstrative privileges to the virtual machine. I.e. for Cloud VPS or VDS with Linux/BSD you have root access and with Windows adminstrator access.

## Difference between Cloud VPS and VDS

Before starting with the differences the common things between a Cloud VPS and VDS are:

* both are virtual machines based on virtualization, i.e. the virutal machines are as isolated as different physical servers ([bare metal servers](https://contabo.com/en/dedicated-servers/))
* both are root servers having complete administrative control over the Operating System
* many virtual machines may run on a single physical server ([bare metal server](https://contabo.com/en/dedicated-servers/))

The difference between a VPS (Virtual Private Server) and a VDS (Virtual Dedicated Servers) are basically how the resources of the physical server are shared:

* VPS: resources like CPU, memory, disk and networking of the physical server are fairly shared across multiple VPS'.
* VDS: resources like CPU, memory, disk and networking of the physical server are reserved according to the sizing and are not shared across multiple VDS

So basically VPS are cheaper than VDS whereas VDS offer more power than VPS.

## Why **Cloud** VPS and VDS?

The term **Cloud** is not about having a total different concept than using virtual machines. In fact all so called Cloud offering for compute power are virtual machines.

We are using that term to denote that automation in terms of DevOps features are available. Most prominently the [Contabo APIs](https://api.contabo.com/), the [`cntb` CLI (Command Line Interface)](https://github.com/contabo/cntb) and [cloud-init](https://cloudinit.readthedocs.io/en/latest/) support. These allow a degree of automation and usage which is required  to match modern needs of cloud computing.
