---
sidebar_position: 11
---

# Virtualmin

[Virtualmin](https://www.virtualmin.com/) is a Open Source web hosting control panel for Linux and BSD systems. Backups of Virtualmin can stored to Contabo's Object Storage.

Please follow the installation instruction like described on [Virtualmin](https://www.virtualmin.com/).

## Required data

* `access_key`
* `secret_key`
* Contabo's S3 URL
* your bucket name

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/products/Object-Storage/s3-connection-settings).

### Example data

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com
* bucket name = virtualmin

## Setup

Please follow the steps in order to use Contabo's Object Storage as backup storage for Vitualmin:

1. Select `Cloud Storage Providers` under `Virtualmin` -> `Backup and Restore`. You should see something like ![Virtualmin Cloud Storage Providers](/img/products/object-storage/tools/virtualmin/virtualmin-storage-providers.png)
2. Click on  `Amazon S3`. You should see the configuration page, see screenshot ![Virtualmin S3 Config](/img/products/object-storage/tools/virtualmin/virtualmin-s3-config.png)
3. Do the following settings:
   * For `Default S3 login` choose `Entered below ...`
   * `Access key` = `82046e8110804a43bf29c1ae426a724d`
   * `Secret Key` = `82e69bd7a52076c527154297a76c2233`
   * For `S3-compatible server hostname` specify `eu2.contabostorage.com` by not choosing `Use Amazon S3`
4. Click `Save`
5. Either via `Backup Virtual Server` (=manual Backup) or via `Scheduled Backups` (=automated backups) you will be able to see `Destination and format` like in follwing screenshot ![Virtualmin Destination Backup](/img/products/object-storage/tools/virtualmin/virtualmin-destination.png)
6. Specify following values:
   * `Backup destinations` = `Amazon S3 bucket`
   * `Bucket and path` = `virtualmin/backups`
7. Click `Backup now` or `Create Schedule` depending of you are coming from manual or automated backups
