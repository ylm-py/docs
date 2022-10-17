---
sidebar_position: 15
---

# Plesk

[Plesk](https://www.plesk.com/) is a commercial web hosting and server data center automation software.
With the help of an [extension](https://www.plesk.com/extensions/s3-backup/) it is possible to backup Plesk's data to Object Storage.

You can find more information about Plesk as a Panel [here](https://contabo.com/en/plesk-servers/).

## Required data

* `access_key`
* `secret_key`
* Contabo's S3 URL
* your bucket name
* subfolder path (optional)

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/products/Object-Storage/s3-connection-settings).

### Example data

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com
* bucket name = nextcloud

## Setup

Please follow the instructions in our blog article at the [Contabo Website](https://contabo.com/blog/how-to-use-plesk-for-backups/)
