---
sidebar_position: 2
---

# How can I manage the servers in an existing private network?
User have the opportunity to add / remove servers from an existing private network. 
For this the following steps need to be followed:

* Log into your Contabo customer panel. 
* Open the menu "Private Networking." You see a list of all of your private networks.
* Click in the name of the private network you want to edit their servers. The following site appears: 

<p align="center">
<img src="/img/products/private-network/tutorial/privateNetworkDetail.png" alt="Private Network Detail"/>
</p>

You see a list of all VPS/VDS you added to this private network before, including their status (must be ok if the server is connected to the private network) as well as their private and public IP. 

To start the manage process, hit the button "Manage VPS / VDS in this Private Network". 
This opens a list with all possible servers for this private network (aka which are in the same data region as this private network is defined in). Servers which have been added to the network are selected. 

By selecting / deselecting items, you edit the list of servers in the private network. After confirmation of the settings by hitting 'Confirm' the edition of the private network is done and the updated server list appear in the detail view of the private network. 

Note that the affiliation of new added instances will be active only after a reinstallation or restart of the corresponding server (see [here](/docs/Private-Network/Tutorial/restart) ). 
