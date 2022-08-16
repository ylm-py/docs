---
title: Using S3 Object Storage programatically
sidebar_position: 12
---

# How to use use S3 Object Storage in your code

:::danger No support
Please note that Contabo doesn't offer any support for coding / programming issues due to its complexity.

Following information are hints on how to achieve it, without meant to be a step by step guide.
:::

## General

The S3 Object Storage API is not documented in Contabo documentation.

* The S3 Object Storage API was defined by Amazon AWS more than 10 years ago and is maintained by them. Please refer to <https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html>
* Not all features of Amazon S3 are obvioulsy supported. Please refer to <https://docs.ceph.com/en/latest/radosgw/s3/>
* The API documented at <https://api.contabo.com/#tag/Object-Storages> is not the S3 Object Storage API. It is mainly about to purchase and enlarge the storage size. For uploading / downloading files and folders and manage buckets please use the S3 Object Storage API.
* It is in general not encouraged to perfrom the S3 Object Storage API calls directly e.g. via curl. As the S3 API is based on [HMAC](https://en.wikipedia.org/wiki/HMAC) please use S3 SDK libraries which are present for many programming language. Please refer to <https://aws.amazon.com/developer/tools/> or perform an internet search for alternatives.

### Examples

Here are some examples where the integration was made:

* [cntb](https://github.com/contabo/cntb) written in [Go](https://go.dev/) and using the [minio](https://github.com/minio/minio-go) library
* External article on [dev.to](https://dev.to/einlinuus/use-contabo-object-storage-with-nodejs-5b9l) using [NodeJS](https://nodejs.org/en/) and [Python](https://www.python.org/)