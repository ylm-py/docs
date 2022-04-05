---
title: Use Object Locking
sidebar_position: 6
---

# Use Object Locking

With Object Locking you can protect files from being deleted or overwritten. You can also make the protection last for a specific amount of time. Please refer to [Using S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html).

The following example requires [aws cli](/docs/Object-Storage/Tools/aws-cli) to be installed and configured.

## Enable Object Locking

1. A bucket needs to support Object Locking. By default a bucket does not support it. Thus the first step is to create a bucket with object locking enabled. Here an example:

  ```bash
  aws --profile eu2 --region default --endpoint-url  https://eu2.contabostorage.com s3api create-bucket --bucket bucket-with-locking --object-lock-enabled-for-bucket
  ```

  As you might notice the option  `--object-lock-enabled-for-bucket` is the relevant part.
2. The next step consists of setting the object locking configuration. Here an example:

  ```bash
  aws  --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api put-object-lock-configuration --bucket bucket-with-locking --object-lock-configuration '{ "ObjectLockEnabled": "Enabled", "Rule": { "DefaultRetention": { "Mode": "GOVERNANCE", "Days": 3 } } }'
  ```

3. You can check the current settings e.g. by using:

  ```bash
  aws  --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api get-object-lock-configuration --bucket bucket-with-locking
  ```

  This example sets the retention time for 3 days. Fore more details please refer to [How S3 Object Lock works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html).

## Disable Object Locking

In order to disable the object locking you can do the following:

```bash
aws  --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api put-object-lock-configuration --bucket test-is-lock --object-lock-configuration '{ "ObjectLockEnabled": "Enabled" }'
```
