---
sidebar_position: 3
---

# How can I restart and reinstall my Instance(s) after adding to a private Network

After adding a server to a private network, the server needs to be reinstalled if it is located on a vhost that does not support private network. Thus, also the ip-address of the server changes and all data will permanently be deleted. 

If the server is already on a vHost that supports private network a reinstallation is not required but a restart is sufficient. All data and its ip-adress remain. 


## Reinstallation Reinstallation my server  
If your server needs to be reinstalled to be added to a private network, it is represented by the status "requires reinstallation" in the private network detail view for the corresponding server.
<p align="center">
<img src="/img/products/private-network/tutorial/privateNetworkDetailItem.png" alt="Private Network Detail One Item With Restart and Reinstallation"/>
</p>

### How can I reinstall my server after adding to a private network? 
The restart can be started by clicking on the corresponding symbol in the quick action (<img src="/img/products/private-network/tutorial/reinstallationIcon.png"/>).
Then, the reinstallation screen for VPS and VDS appears: 

The Customer needs to select an Image (Choice between selection of one various standard images or selection or creation of a custom image), select a password for user admin and / or upload their ssh-key. After reinstallation, this data will be used for connection and authorization to the corresponding server. 

Alternatively, the reinstallation process can also be started - as before - via the VPS Control Menu. To do this, however, you must exit the private network menu.

## Restart of Server 
If your server needs a restart, it is represented by the status "requires restart" in the private network detail view for the corresponding server.
<p align="center">
<img src="/img/products/private-network/tutorial/privateNetworkDetailItem2.png" alt="Private Network Detail One Item With Restart and Reinstallation"/>
</p>

### How can I restart my server after adding it to a private network. 
The restart can be started by clicking on the corresponding symbol in the quick action (<img src="/img/products/private-network/tutorial/restartIcon.png"/>) . The user is informed about the progress of the restart via the status.

After a successful restart, the server is finally and completely added to the private network.

Alternatively, the restart of the server can also be done - as before - via the VPS Control Menu. To do this, however, you must exit the private network menu.