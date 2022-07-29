---
title: Automate Public Sharing
sidebar_position: 4
---

# Automate Public Sharing via S3 API

This How-To is for those who do want to do public sharing of files by automation tools. This might not be the only way, but the one also used by Contabo's Object Storage Panel. This relies on so called [policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html).

## Setup your S3 tool

The easiest way is to use [aws cli](/docs/products/Object-Storage/Tools/aws-cli). Please make sure to have it installes and configured properly.

## Enable Public Sharing for a file

Create a file `public-sharing-policy.json` with following content

```json title="public-sharing-policy.json"
{
  "Id": "your-fancy-name",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:s3:::foldername/file"
      ],
      "Principal": "*"
    }
  ]
}
```

This basically allows (`Effect`) reading Objects (`s3:GetObject`) by everyone (`Principal`) for the specified file (`Resource`).

### Example for Enabling

#### Example values

* S3 URL = https://eu2.contabostorage.com
* Bucket = foo
* File to share = foo/test.jpg
* Policy file = public-sharing-policy.json with following contents

```json title="public-sharing-policy.json"
{
  "Id": "public-share-example-test",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:s3:::foo/test.png"
      ],
      "Principal": "*"
    }
  ]
}
```

```bash
aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api put-bucket-policy --bucket foo --policy file://public-sharing-policy.json
```

The URL would be <https://eu2.contabostorage.com/{s3TenantId}:foo/test.png>. The `s3TenantId` can be retrieved via the [Contabo API](https://api.contabo.com/#operation/retrieveObjectStorageList).

## Enable Public Sharing for a folder an all its sub items

Create a file `public-sharing-policy.json` with following content

```json title="public-sharing-policy.json"
{
  "Id": "your-fancy-name",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:s3:::foldername/*"
      ],
      "Principal": "*"
    }
  ]
}
```

The only difference is that you put `*` as a wildcard / placeholder for the file name. Of course you can have constucts like `"arn:aws:s3:::foldername1/foldername2/*"`

### Example for Enabling

#### Example values

* S3 URL = https://eu2.contabostorage.com
* Bucket = foo
* Folder to share = foo/*
* Policy file = public-sharing-policy.json with following contents

```json title="public-sharing-policy.json"
{
  "Id": "public-share-example-test",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:s3:::foo/*"
      ],
      "Principal": "*"
    }
  ]
}
```

```bash
aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api put-bucket-policy --bucket foo --policy file://public-sharing-policy.json
```

Please be aware that the S3 Object Storage doesn't support file listing in browser (please refer to [tutorial](/docs/products/Object-Storage/Tutorial/shareWithPublic#peculiarity-for-sharing-folders))

The URL would be <https://eu2.contabostorage.com/{s3TenantId}:foo/bar/filename.ending>. The `s3TenantId` can be retrieved via the [Contabo API](https://api.contabo.com/#operation/retrieveObjectStorageList).

## Disable Public Sharing

To disable the Public Sharing for a file or folder you need first to get the current policy via

```bash
aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api get-bucket-policy --bucket foo
```

Then remove the parts you would like to remove and do the `put-bucket-policy` again with the modified file. If it is the last entry in there you could also delete it completely via

```bash
aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api delete-bucket-policy --bucket foo
```

But be cautious as this will delete __ALL__ policies on that bucket.
