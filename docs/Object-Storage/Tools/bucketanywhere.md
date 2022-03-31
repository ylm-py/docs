---
sidebar_position: 10
---

# BucketAnywhere

Using [BucketAnywhere](https://play.google.com/store/apps/details?id=lysesoft.s3anywhere&hl=de&gl=US) is a Android App which allows to access S3 Object Storage on your cell phone.

Here the way to mount a bucket which is not reboot safe is shown. All you will need is:

* `access_key`
* `secret_key`
* Contabo's S3 URL
* your bucket name
* folder (mount point) where you want make your bucket contents available

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/Object-Storage/s3-connection-settings).

## Example data

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com
* bucket name = foo

## Setup

1. Start `BucketAnywhere`. It should show the following screen ![bucketanywhere-start](/img/products/object-storage/tools/bucketanywhere/bucketanywhere-start.jpg)
2. Click on `Add`. The following screen should appear ![bucketanywhere-settings](/img/products/object-storage/tools/bucketanywhere/bucketanywhere-settings.jpg)
3. Please specify the following values
   * For `S3 URL` please specify the S3 URL, e.g. https://eu2.contabostorage.com
   * For `KeyId` please speify he `access_key` , e.g. 82046e8110804a43bf29c1ae426a724d
   * For `SecretKey` please speify he `secret_key` , e.g. 82e69bd7a52076c527154297a76c2233
   * For `Bucket` please specify your bucket name, e.g. foo
4. Click `Save`
5. Click `Connect` then you should see the files.
