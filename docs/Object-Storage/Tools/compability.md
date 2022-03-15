---
sidebar_position: 1
---

# General Compatibility

Contabo's S3 compatible Object Storage is widely compatible with Amazon's AWS S3 Object Storage. Not all features of AWS S3 are fully supported. E.g. logging is not supported.

Contabo is using [Ceph](https://ceph.com/) to provide the S3 functionality. Some tools like [rclone](https://rclone.org/) do offer direct support for Ceph. Other tools don't. But they usually offer support for other S3 compatible Object Storage providers. We have compiled a list of popular tools and show how to perform the configuration.

For tools not covered in the list, please consider the following information:

* For S3 URL and credentials. Please refer to [S3 Connection Settings](/docs/Object-Storage/s3-connection-settings)
* specify Contabo specific S3 URLs
* sometimes `access_key` is named `aws_access_key_id`
* sometimes `secret_key` is named `aws_secret_access_key`
* you may specify the S3 region `default`
* path style buckets are used

## Tools with descriptions

* [cntb](/docs/Object-Storage/Tools/cntb)
* [aws cli](/docs/Object-Storage/Tools/aws-cli)
* [rclone](/docs/Object-Storage/Tools/rclone)
* [Cyberduck](/docs/Object-Storage/Tools/cyberduck)
* [s3fs-fuse](/docs/Object-Storage/Tools/s3fs-fuse)

## Tools known to work

* Veeam (To be checked)
* Synology (To be checked)
* Amazon S3 Cloudberry Explorer (To be checked)
* cpanel / whm (To be checked)
* Jetbackup (To be checked)
* Nextcloud (To be checked)

## Tools known NOT to work

These tools are -- _to our knowledge_ -- not working with Contabo's Object Storage

* FileZillaPro: Seems like the issue is that FileZillaPro forces to use virtual bucket host name, i.e. bucket names in the domain name.
  As an alternative please use [Cyberduck](/docs/Object-Storage/Tools/cyberduck).
