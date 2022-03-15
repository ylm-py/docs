---
sidebar_position: 7
---

# Nextcloud

[Nextcloud](https://nextcloud.com/) can be used provide file hosting service with browser based access but also Desktop Application or Mobile Apps. It can easily be connected to Contabo's Object Storage in order to store and retrieve data.

Please follow the installation instruction like described on [Nextcloud](https://nextcloud.com/).

## Required data

* `access_key`
* `secret_key`
* Contabo's S3 URL
* your bucket name

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/Object-Storage/s3-connection-settings).

### Example data

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com
* bucket name = nextcloud

## Setup

Please follow the steps in order to use Contabo's Object Storage as external storage:

1. Select on the upper right admin user `+ Apps`, see screenshot ![Nextcloud Add App](/img/products/object-storage/tools/nextcloud/add_app.png)
2. Enable `External storage support`, see screenshot ![Nextcloud Add App](/img/products/object-storage/tools/nextcloud/enable_external_storage.png)
3. Go to `Settings` via upper right admin user, see ![Nextcloud Add App](/img/products/object-storage/tools/nextcloud/settings.png)
4. On left hand side via `Adminstration` section, select `External Storage`. See ![Nextcloud Add App](/img/products/object-storage/tools/nextcloud/adminstration_external_storage.png)
5. Specify values for a new external storage, see ![Nextcloud Add App](/img/products/object-storage/tools/nextcloud/external_storage_settings.png)
   * `Folder name` e.g. `Contabo S3 Object Storage`
   * `External Storage` = `Amazon S3`
   * `Authentication` = `Access Key`
   * `Bucket` = `nextcloud`
   * `Hostname` = `eu2.contabostorage.com`
   * `Port` = 443
   * `Region` leave empty
   * check `Enable SSL`
   * check `Enable Path Style`
   * `Access Key` = `82046e8110804a43bf29c1ae426a724d`
   * `Secret Key` = `82e69bd7a52076c527154297a76c2233`
6. Click on Save (the little checkmark icon at the right)
7. You are done. Navigate to files, there you should see the folder "Contabo S3 Object Storage" and being able to upload and download files to the S3 Object Storage
