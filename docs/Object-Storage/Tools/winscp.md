---
sidebar_position: 6
---

# WinSCP

[WinSCP](https://winscp.net/) is a free Desktop Application for Windows which allows to manage remote files for a wide variety of protocols including S3 compatible Object Storage.

Please follow the installation instruction like described on [WinSCP](https://winscp.net/eng/download.php)

All you will need is:

* `access_key`
* `secret_key`
* Contabo's S3 URL

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/Object-Storage/s3-connection-settings).

## Configuration for Contabo's S3 compatible Object Storage

### Example values

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com

### Steps

1. Create a new login via `Session` -> `New Session`, possibly it shown right away and should look like the following screenshot
  ![settings](/img/products/object-storage/tools/winscp/winscp-settings.png)
2. Choose `Amazon S3` as file protocol
3. Specify settings, see screenshot
   * in field `Host name` put `eu2.contabostorage.com` (depending your Object Storage). NOTE: please make sure to enter without `https://`
   * in field `Access key ID` put your access_key, e.g. `82046e8110804a43bf29c1ae426a724d`
   * in field `Secret access Key` put your secret_key, e.g. `82e69bd7a52076c527154297a76c2233`
4. Click on `Advanced` and choose `Advanced`. The following screen should appear ![advanced](/img/products/object-storage/tools/winscp/winscp-advanced-settings.png)
5. Choose `Path` as `URL style`
6. Click `OK`
7. Click `Save`
8. Click `Login` and you are done and have access to your Object Storage
