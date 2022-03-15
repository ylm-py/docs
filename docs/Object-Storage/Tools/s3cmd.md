---
sidebar_position: 8
---

# s3cmd

[s3cmd](https://s3tools.org/s3cmd) is a quite low level tool to control aspects via the S3 API. You can achieve similar action with [aws cli](/docs/Object-Storage/Tools/aws-cli). `s3cmd` runs on Linux and Mac.

Please follow the installation instruction like described on [s3cmd](https://s3tools.org/s3cmd),

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

## Setup

Please follow the steps in order to use Contabo's Object Storage:

1. `s3cmd --configure`
2. Specify `82046e8110804a43bf29c1ae426a724d` as `Access Key`
3. Specify `82e69bd7a52076c527154297a76c2233` as `Secret Key`
4. Press return for `Default Region`
5. Specify `eu2.contabostorage.com` for `S3 Endpoint`
6. Specify `eu2.contabostorage.com` for `DNS-style bucket+hostname:port template for accessing a bucket`
7. Specify as password of your choice for `Encryption password`
8. Press return for `Path to GPG program`
9. Press return for `Use HTTPS protocol`
10. Press return for `HTTP Proxy server name`
11. Confirm by specifying `y`
12. Confirm again by specifying `y`

## Sample Usage

```bash
# Lists your buckets
s3cmd s3 ls
# Delete Bucket CORS of bucket named BUCKETNAME
s3cmd delcors s3://BUCKETNAME
```
