---
sidebar_position: 3
---

# Share Object Storage with selected users
Users have the opportunity to share their object storage with the public (see [here](http://docs.contabo.com/docs/Object-Storage/Tutorial/shareWithPublic)) or with selected users.

### How do I share Object Storage with selected users?
It is possible to give access to buckets, files and folders to selected users rather than to the public. 
For this, access for the selected user needs to be unlocked for the Object Storage Panel and API in User Management, a tool each Contabo customer using the Contabo Object Storage panel has access to.
<p align="center">
<img src="/img/products/object-storage/tutorial/usermanagement2.png?raw=true" alt="usermanagement2"/>
</p>

To create and add a new user to your User Management list, follow these steps: 
* Log into your Object Storage Panel
* Open the menu 'Account' and select 'User Management' (see image above) 
* Select 'Create User'. The following menu appears: 
<p align="center">
<img src="/img/products/object-storage/tutorial/usermanagementoverview.png?raw=true" alt="usermanagement"/>
</p>

By specifying all mandatory information, the user's corresponding role (e.g. S3 Object Storage Read and Write) and confirming with 'Create' you grant access to buckets, files and folders. 

The user will receive an invitation via email. The status of the user is displayed in the account overview (see first image above): 



### How do I recind access to Storage from selected users?
To recind a selected user's access to Storage, you can either delete the user in your User Management or disable user's access by editing the settings (see checkbox in image above).
