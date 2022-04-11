---
title: Versioning
sidebar_position: 6
---

# Bucket Versioning

Wit S3 compatible Object Storage you can use versioning. This enables to keep multiple versions of an object. So that if you upload a object / file with the same name the S3 Object Storage system will store a version from the previous contents. This version will be also stored in the bucket and will not be directly visible.

This How-To shows how to enable it via [aws cli](/docs/products/Object-Storage/Tools/aws-cli) tool and how to list and retrieve older versions of files. Of course disabling it will also be shown.

Please keep in mind that this feature is not enabled for a specific file but for an entire bucket.

## Enable Bucket Versioning

In order to enable Bucket Versioning please exectute e.g. the following:

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api put-bucket-versioning --bucket bucket-with-versioning --versioning-configuration Status=Enabled
```

## List and Retrieve old Versions

### Check Versioning State

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api get-bucket-versioning --bucket bucket-with-versioning
```

If result is empty, then versioning is disabled.

### List versioned objects

For all objects simply invoke:

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api list-object-versions --bucket bucket-with-versioning
```

For a specific file / object, in this case `image003.png` for example:

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api list-object-versions --bucket bucket-with-versioning --prefix image003.png
```

Sample output would be:

```json
{
    "Versions": [
        {
            "ETag": "\"8f92d5c306c850b5081eab5c6090a0ea\"",
            "Size": 470117,
            "StorageClass": "STANDARD",
            "Key": "image003.png",
            "VersionId": "qhV3FW5iRSu1i1d2ahPerBUe5CLLRKS",
            "IsLatest": true,
            "LastModified": "2022-04-05T12:24:29.707000+00:00",
            "Owner": {
                "DisplayName": "12345",
                "ID": "5c37e60c3ee04f1eb116c436b1afadca$12345"
            }
        },
        {
            "ETag": "\"13785d0138c0ce23b6104743684e96dc\"",
            "Size": 457745,
            "StorageClass": "STANDARD",
            "Key": "image003.png",
            "VersionId": "L-6oXdYnuAF1orfDEAHV3mDIliEoB9.",
            "IsLatest": false,
            "LastModified": "2022-04-05T12:23:45.488000+00:00",
            "Owner": {
                "DisplayName": "12345",
                "ID": "5c37e60c3ee04f1eb116c436b1afadca$12345"
            }
        }
    ]
}
```

The current version which is also returned in regular file listings is the one where `IsLatest` is `true`.

### Get a specific version

In order to access and older version of the file `image003.png` please use the `VersionId` from the output above:

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api get-object --bucket bucket-with-versioning --version-id 'L-6oXdYnuAF1orfDEAHV3mDIliEoB9.' --key image003.png image003.png
```

## Disable Bucket Versioning

To disable or suspend the Bucket Versioning please proceed as follows:

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api put-bucket-versioning --bucket bucket-with-versioning --versioning-configuration Status=Suspended
```

Please note that old versions won't be deleted if you turn off Bucket Versioning. No new versions will be created, that's all.

## Hint

Tools like [Cyberduck](/docs/products/Object-Storage/Tools/cyberduck) are making these tasks very easy. Just do a `Info` on a bucket and check `Bucket Versioning`. Please also enable via `View` -> `Show Hidden Files` the display of all versions.
