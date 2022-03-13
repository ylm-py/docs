---
sidebar_position: 3
---

# aws cli

[aws cli](https://aws.amazon.com/cli/) is a free tool from Amazon supporting also S3 compatible Object Storage. It covers most all aspects of S3 API management and supports Windows, MacOS, Linux. For buying, managing and canceling Contabo's S3 Object Storage please refer to [cntb](https://github.com/contabo/cntb) or [Contabo API](https://api.contabo.com/).

Please follow the installation instruction like described on [aws cli](https://aws.amazon.com/cli/)

All you will need is:

* `access_key`
* `secret_key`
* Contabo's S3 URL

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/Object-Storage/s3-connection-settings).

## Configuration for Contabo's S3 compatible Object Storage

### Example values

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com

### Steps

1. run `aws configure --profile eu2` (you may choose any profile name)
2. specify your access_key, e.g. `82046e8110804a43bf29c1ae426a724d` for `AWS Access Key ID`
3. specify your secret_key, e.g. `82e69bd7a52076c527154297a76c2233` for `AWS Secret Access Key`
4. press `return` to skip `Default region name`
5. press `return` to skip `Default output format`

### aws cli config

```conf
[eu2]
aws_access_key_id=82046e8110804a43bf29c1ae426a724d
aws_secret_access_key=82e69bd7a52076c527154297a76c2233
```

## Sample Usage

```bash
# Lists your buckets
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3 ls
# invoke s3api directly
aws --profile eu2 --region default --endpoint-url https://eu1-s3.contabo.com s3api get-bucket-policy --bucket test
```
