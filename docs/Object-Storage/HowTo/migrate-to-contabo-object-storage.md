---
title: Migrate to Contabo Object Storage
sidebar_position: 9
---

# Migrate from another storage provider to Contabo Object Storage

Contabo Object Storage is compatible with the S3 API, which is why migrating from another object storage provider like Amazon S3 or DigitalOcean Spaces is simple and fast using [rclone](https://rclone.org/). With rclone, you can manage your data on different cloud storages directly from your command line.

To get started, make sure you have rclone installed on your system. If you haven't, head over to the [rclone installation guide](https://rclone.org/downloads/) and follow the instructions.

This example shows you how to migrate from Amazon S3 to Contabo Object Storage, but any other cloud storages [compatible with rclone](https://rclone.org/overview/) can be used as well.

## Prepare rclone

Before you can manage external storages with rclone, they must be added to rclone's configuration. That's where all the required information about the storages is stored.

### Configure the source storage

Start the rclone configuration by running `rclone config`. Then select `n` for `New remote`.

1. Choose a name for the remote storage, e.g. `aws-s3`
1. Select the type of storage you want to add, for Amazon S3 that's `Amazon S3 Compliant Storage Providers including AWS, ...`
1. Select your S3 provider: `Amazon Web Services (AWS) S3`
1. Enter your credentials by selecting `Enter AWS credentials in the next step` and type in your `access_key_id` and `secret_access_key` in the upcoming prompts
1. Select the region
1. Specify the endpoint for S3 API. Skip (`return`) this step to use the default AWS endpoint for the region specified in the previous step
1. You can skip (`return`) the following steps `acl`, `server_side_encryption`, and `sse_kms_key_id` because you don't want to create files on your Amazon S3 storage
1. Select your object storage class. If you have a default S3 storage, select `Default` (select `Glacier Storage class` if you have a S3 Glacier storage)
1. If you get prompted to edit the advanced config, select `n` for `No`
1. Verify the information and confirm with `y`

<p align="center">
<img src="/img/products/object-storage/howto/migrate-to-contabo-object-storage/aws-configuration.png?raw=true" alt="Finished rclone configuration for AWS S3"/>
</p>

Now the first remote storage is configured, repeat the process for the storage you want to migrate your data to. In this case, [Contabo Object Storage](https://contabo.com/en/object-storage/).

### Configure Contabo Object Storage

Start the rclone configuration again (`rclone config`) and create a new remote (select `n` for new).

1. Choose a name for the remote storage, e.g. `contabo-storage`
1. Because the object storage is combatible with S3, select `Amazon S3 Compliant Storage Providers including AWS, ...`
1. Select `Ceph Object Storage` as your provider
1. Enter your credentials by selecting `Enter AWS credentials in the next step` and type in your `access_key_id` and `secret_access_key` in the upcoming prompts. If you don't have these keys, [generate them first](/docs/Object-Storage/HowTo/access_secret_key/) in your [Contabo Customer Panel](https://my.contabo.com/object_storage).
1. Skip the region selection by pressing `return`
1. Specify the S3 API Endpoint which you can find in the [Object Storage Overview](https://new.contabo.com/storage/object-storage/buckets) (e.g. `https://eu2.contabostorage.com`)
1. You can skip (`return`) the following steps `acl`, `server_side_encryption`, and `sse_kms_key_id`
1. If you get prompted to edit the advanced config, select `n` for `No`
1. Verify the information and confirm with `y`

For a more detailed guide, please refer to [rclone with Contabo Object Storage](/docs/Object-Storage/Tools/rclone).

Both remote storages are now added to the rclone config. To verify that everything works, use the `rclone ls` command to list the objects inside a bucket:

```bash
# rclone ls remote-name:bucket-name
rclone ls aws-s3:bucket-name
```

<p align="center">
<img src="/img/products/object-storage/howto/migrate-to-contabo-object-storage/file-list.png?raw=true" alt="List of all files in a specific buckets"/>
</p>

You can use `lsf` instead to list both objects and directories.

## Copy the data

With both remote storages added to rclone, copying the data from one to another isn't a big deal anymore. rclone's built-in `copy` command copies all the data inside one bucket to another. Use the following command to copy the data from your Amazon S3 bucket to your new bucket on Contabo Object Storage:

```bash
# rclone copy [source] [destination]
rclone copy aws-s3:bucket-name contabo-storage:bucket-name
```

:::info
If the destination already has content inside, keep the following in mind:

-   Existing files on the destination **that don't exist on the source** are ignored and **won't be deleted**
-   Existing files on the destination **that are identical** to the files on the source **will be ignored**
-   Existing files on the destination **that are not identical** to the files on the source **will be overwritten**
    :::

This may take a while depending on the size of the files needing to be copied. Note that rclone downloads the files to your computer before uploading them to the destination.
