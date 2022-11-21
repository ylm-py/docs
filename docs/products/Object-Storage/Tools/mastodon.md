---
sidebar_position: 16
---

# Mastodon

[Mastodon](https://joinmastodon.org/) is a self-hosted social network platform. Contabo's Object Storage can be used to store users' content such as avatars, images and attachments.

Please follow the installation instructions as described in the [Mastodon docs](https://docs.joinmastodon.org/user/run-your-own/).

## Required data

* `access_key`
* `secret_key`
* Contabo's S3 URL
* your tenant ID
* your bucket name

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/products/Object-Storage/s3-connection-settings). Your tenant ID is shown when enabling public sharing for any object in the Object Storage Control Panel. It is the same for all buckets and objects in your account.

### Example data

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com
* tenant ID = 98d02cad15d64d8491cd5f43f657df78
* bucket name = mastodon

## Setup

Append these lines to your `.env.production` configuration file in the Mastodon directory:

```ini
S3_ENABLED=true
S3_BUCKET=mastodon
AWS_ACCESS_KEY_ID=82046e8110804a43bf29c1ae426a724d
AWS_SECRET_ACCESS_KEY=82e69bd7a52076c527154297a76c2233
S3_REGION=default
S3_PROTOCOL=https
S3_HOSTNAME=eu2.contabostorage.com
S3_ENDPOINT=https://eu2.contabostorage.com
S3_ALIAS_HOST=eu2.contabostorage.com/98d02cad15d64d8491cd5f43f657df78:mastodon
```
