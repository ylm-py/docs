---
title: Lifecycle Policy
sidebar_position: 7
---

# Lifecycle Policy

Contabo's S3 Object Storage supports S3 lifecycle policies that allow you to automatically delete objects after a set amount of time. This might be useful for pruning old backups or log files.

## AWS CLI

Lifecycle policies can be set through [aws cli](/docs/products/Object-Storage/Tools/aws-cli). Make sure to have it set up with your account before you begin. First, you'll need to define the policy as a json file. Here is an example how to delete all files inside a buckup after one year:

```json
{
  "Rules": [
    {
      "ID": "DeleteAll365",
      "Status": "Enabled",
      "Prefix": "",
      "Expiration": {
        "Days": 365
      }
    }
  ]
}
```

Adjust this snippet to your needs and save it as `lifecycle-policy.json` on your local machine. Then apply to a bucket with aws cli like this:

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api put-bucket-lifecycle-configuration --bucket test --lifecycle-configuration file://lifecycle-policy.json
```

Replace the profile and endpoint with your object storage and replace `test` with the actual bucket name.

:::danger Data loss risk
Be careful setting up lifecycle policies. They apply to all objects inside a bucket, irreversibly deleting them if configured so.
:::

## Hint

Tools like [Cyberduck](/docs/products/Object-Storage/Tools/cyberduck) are making these tasks very easy. Just do a `Info` on a bucket and check `Delete files` in the `Lifecycle` section at the bottom.
