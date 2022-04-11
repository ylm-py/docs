---
sidebar_position: 5
---

# Cyberduck

[Cyberduck](https://cyberduck.io/) is a free Desktop Application for MacOS and Windows which allows to manage remote files for a wide variety of protocols including S3 compatible Object Storage.

Please follow the installation instruction like described on [Cyberduck](https://cyberduck.io/download/)

All you will need is:

* `access_key`
* `secret_key`
* Contabo's S3 URL

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/products/Object-Storage/s3-connection-settings).

## Configuration for Contabo's S3 compatible Object Storage

### Example values

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com

### Steps

1. Create a new bookmark, see screenshot
  ![new bookmark](/img/products/object-storage/tools/cyberduck/new_bookmark.png)
2. Choose `Amazon S3` as type, see screenshot
  ![new bookmark](/img/products/object-storage/tools/cyberduck/choose_s3.png)
3. Specify settings, see screenshot
   * in field `Server` put `eu2.contabostorage.com` (depending your Object Storage). NOTE: please make sure to enter without `https://`
   * in field `Access Key ID` put your access_key, e.g. `82046e8110804a43bf29c1ae426a724d`
   * in field `Secret Access Key` put your secret_key, e.g. `82e69bd7a52076c527154297a76c2233`
  ![new bookmark](/img/products/object-storage/tools/cyberduck/s3-settings.png)
4. You are done
