---
sidebar_position: 2
---

# Share Object Storage with public

Users have the opportunity to share their object storage with the public (see this section) or to selected users (see [here](/docs/Object-Storage/Tutorial/shareWithUserManagement)).

## How do I share Storage with the public?

Users can give access to buckets, files and folders to the public.
For this, the customer creates a link to the file or folder in their storage to distribute and share it with the public.

### How do I share a Bucket with the public?

To make it accessible to the public a link to a selected bucket can be created.

For this, the following steps need to be followed:

* Log into your Object Storage Panel
* Open the Bucket Overview (see image below)
<p align="center">
<img src="/img/products/object-storage/tutorial/bucketoverview.png?raw=true" alt="Bucket Overview"/>
</p>
* Click on the 'Public Sharing' icon ![xmlexample](/img/products/object-storage/tutorial/share.png) to open the menu for setting properties for public sharing:
<p align="center">
<img src="/img/products/object-storage/tutorial/sharepublic.png?raw=true" alt="Public Sharing"/>
</p>

The slider on  top displays the currently selected public access to this storage.  By sliding to the left the feature is deativated, sliding to the right activates it.

If the access is active, a public link to the bucket is automatically created and appears below.
This link can be distributed and shared with the public (after confirming the settings by 'Save').
All public users can then access the bucket via this link.

The status of a bucket's public access can also be seen in bucket overview (see first image above).

### How do I share a File / Folder with the public?

To share only a specific file or folder from the bucket with the public the following steps need to be taken:
* Open detailed view of the bucket that contains the file / folder you want to share (see image below) via clicking on its name in the storage overview
<p align="center">
<img src="/img/products/object-storage/tutorial/share3.png?raw=true" alt="Bucket detail view"/>
</p>
* Click on 'More' and then 'Public sharing' to open the menu shown under "How do I share a Bucket witht the public?"

The status of a bucket's public access also appears in the bucket overview (see image above).

### Peculiarity for Sharing Folders

Note: Browsers do not support the option to show the content of a folder. Therefore, a XML message appears.
<p align="center">
<img src="/img/products/object-storage/tutorial/xmlfolderexample.png?raw=true" alt=" "/>
</p>

You can open the public folder by using corresponding [Tools](/docs/Object-Storage/Tools/compability) or via the Contabo Object Storage Panel.
