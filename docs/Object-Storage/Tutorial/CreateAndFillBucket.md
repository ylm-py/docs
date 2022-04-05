---
sidebar_position: 1
---

# Create and Fill Buckets in Object Storage

User can use their object storage capacity to store so calles objects, i.e. files and folders. For this they need to create buckets in the corrensponding storage and fill them with data.

## How can I create a new bucket?

Each data is stored in buckets. To create a new bucket in your object storage, the following steps need to be followed:

* Log into your Object Storage Panel. You see a list of all of your buckets.
* Click the button 'Create Bucket'. The following menu appears:
<p align="center">
<img src="/img/products/object-storage/tutorial/createbucket.png" alt="Create new Bucket"/>
</p>
* Name your bucket and select the region where the bucket should be placed at. This is possible in every region you own object storage.
* Confirm the settings by hitting 'Create Bucket.'
* The bucket then appears in the overview of all your active buckets and can be filled with files and folders.


## Where can I see all my active buckets?

In your Object Storage Panel you find an overview of all your current buckets (see image below):
<p align="center">
<img src="/img/products/object-storage/tutorial/bucketoverview.png?raw=true" alt="Bucket Overview"/>
</p>

This table includes the following properties:

* Name of the bucket
* Bucket URL
* Region of Object Storage the bucket was created in
* Last modification date of the bucket
* Status of public access. If active, the bucket is public.

Further, you can execute the following actions:
* Enable / Disable public sharing (see [here](/docs/Object-Storage/Tutorial/shareWithPublic)).
* Delete the bucket. This action is only possible if bucket empty. All objects in bucket must be removed first.

## Where can I see the objects in my bucket?

In your Object Storage Panel you find an overview of all your current buckets (see image above). To get an overview about all objects (i.e. files and folders) in a specific bucket go to its detail view by clicking on its name. This action leads you to the bucket detail view where all objects in this bucket are listed.
<p align="center">
<img src="/img/products/object-storage/tutorial/bucketdetailview.png" alt="Bucket Detail View"/>
</p>

The table includes the following properties:

* Name of object
* Type of object
* Date of last modification
* Size
* Status of public sharing. If active, the object is public.

On each object you can execute the following actions:
* Public sharing. If active, the file / folder can be shared with a link to the public (see [here](/docs/Object-Storage/Tutorial/shareWithPublic)).
* Delete object
* Download (only for files)
* Detail view (only for files)
* Copy To. Copies the object to another selected bucket.

## How can I add new objects to a Bucket?

To add new objects (i.e. files and folders) to a bucket go to its detail view.

For uploading files in the bucket click the button 'Upload File'. This opens the following menu to upload files by drag and drop or file 3selection.
<p align="center">
<img src="/img/products/object-storage/tutorial/uploadFileToBucket.png" alt="Bucket File Upload"/>
</p>

For creating a new folder in your bucket click on the button 'Create Folder'. This opens the following menu:
<p align="center">
<img src="/img/products/object-storage/tutorial/createFolderinBucket.png" alt="Bucket Folder Upload"/>
</p>
