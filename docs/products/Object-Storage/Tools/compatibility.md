---
sidebar_position: 1
---

# General Compatibility

Contabo's S3 compatible Object Storage is widely compatible with Amazon's AWS S3 Object Storage. Not all features of AWS S3 are fully supported. E.g. logging is not supported.

Contabo is using [Ceph](https://ceph.com/) to provide the S3 functionality. Some tools like [rclone](https://rclone.org/) do offer direct support for Ceph. Other tools don't. But they usually offer support for other S3 compatible Object Storage providers. We have compiled a list of popular tools and show how to perform the configuration.

For tools not covered in the list, please consider the following information:

* For S3 URL and credentials. Please refer to [S3 Connection Settings](/docs/products/Object-Storage/s3-connection-settings)
* specify Contabo specific S3 URLs
* sometimes `access_key` is named `aws_access_key_id`
* sometimes `secret_key` is named `aws_secret_access_key`
* you may specify the S3 region `default`
* path style buckets are used

## Tools with descriptions

* [cntb](/docs/products/Object-Storage/Tools/cntb)
* [aws cli](/docs/products/Object-Storage/Tools/aws-cli)
* [rclone](/docs/products/Object-Storage/Tools/rclone)
* [Cyberduck](/docs/products/Object-Storage/Tools/cyberduck)
* [goofys](/docs/products/Object-Storage/Tools/goofys)
* [s3fs-fuse](/docs/products/Object-Storage/Tools/s3fs-fuse)
* [Nextcloud](/docs/products/Object-Storage/Tools/nextcloud)
* [s3cmd](/docs/products/Object-Storage/Tools/s3cmd)
* [WinSCP](/docs/products/Object-Storage/Tools/winscp)
* [Cloudberry Explorer](/docs/products/Object-Storage/Tools/cloudberry-explorer)
* [BucketAnywhere](/docs/products/Object-Storage/Tools/bucketanywhere)
* [Virtualmin](/docs/products/Object-Storage/Tools/virtualmin)
* [Velero](/docs/products/Object-Storage/Tools/velero)
* [Plesk](docs/products/Object-Storage/Tools/plesk)

## Tools known NOT to work

These tools are -- _to our knowledge_ -- not working with Contabo's Object Storage

* FileZillaPro: Seems like the issue is that FileZillaPro forces to use virtual bucket host name, i.e. bucket names in the domain name.
  As an alternative please use [Cyberduck](/docs/products/Object-Storage/Tools/cyberduck).
* cPanel / WHM: the `S3Compatible` is not compatible. As cPanel / WHM supports specifying a backup destination folder [mounting](/docs/products/Object-Storage/HowTo/mount) the Object Storage to that backup folder could be a workaround.
