---
sidebar_position: 9
---

# Cloudberry Explorer

[Cloudberry Explorer](https://www.msp360.com/explorer.aspx) is a tool to manage files in desktop application. It runs on Windows and Mac.

Please follow the installation instruction like described on [Cloudberry Explorer](https://www.msp360.com/explorer.aspx).

## Required data

* `access_key`
* `secret_key`
* Contabo's S3 URL

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/products/Object-Storage/s3-connection-settings).

### Example data

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com

## Setup

Start `Cloudberry Explorer` it should open a window `Select Cloud Storage` or click on `File` -> `Add New Account` to get there.

Please follow the steps in order to use Contabo's Object Storage like shown in the screenshot ![S3 Credentials](/img/products/object-storage/tools/cloudberry-explorer/cloudberry-explorer-settings.png)

1. Double-Click  `S3 Compatible`
2. In sthat screen please fill out like the following
   * Specify a `Display name` of your choice
   * Specify `https://eu2.contabostorage.com` as `Service point`
   * Specify `82046e8110804a43bf29c1ae426a724d` as `Access Key`
   * Specify `82e69bd7a52076c527154297a76c2233` as `Secret Key`
   * Check `Use SSL`
   * Check `Use native multipart upload`
3. That's it.
