---
sidebar_position: 14
---

# Velero

[Velero](https://velero.io/) is a free Backup and Desaster Recovery tool for [kubernetes (k8s)](https://kubernetes.io/) supporting S3 compatible Object Storage as destination.

Please follow the installation instruction like described on [Velero](https://velero.io/docs/v1.9/basic-install/)

All you will need is:

* `access_key`
* `secret_key`
* Contabo's S3 URL

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/products/Object-Storage/s3-connection-settings).

## Configuration for Contabo's S3 compatible Object Storage

### Example values

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* `bucket` = mybucket
* S3 URL = <https://eu2.contabostorage.com>

### Steps

1. create secrets file with name `secrets` with following content

   ```ini
   [default]
   aws_access_key_id = 82046e8110804a43bf29c1ae426a724d
   aws_secret_access_key = 82e69bd7a52076c527154297a76c2233
   ```

2. Perform `velero install` to apply settings.<br/>
   For example: you could use the following configuration, in case you are having kubernetes running at aws

   ```sh
   velero install \
   --provider aws \
   --plugins velero/velero-plugin-for-aws:v1.5.0 \
   --bucket mybucket \
   --use-volume-snapshots=false \
   --secret-file ./secrets \
   --backup-location-config \
   region=eu,s3ForcePathStyle="true",s3Url=https://eu2.contabostorage.com
   ```
