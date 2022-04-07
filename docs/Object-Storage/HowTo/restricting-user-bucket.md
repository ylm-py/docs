---
title: Restricting Users to Buckets
sidebar_position: 7
---

# Restricting Users to Buckets

A common use case is to allow usage of one bucket to one specifc user whereas another bucket should only be accessible to another user. The following How-To describes on how to allow access to buckets to a restricted number of users.

In the following we assume that [aws cli](/docs/Object-Storage/Tools/aws-cli) is installed and properly configured and that you have access to [Contabo's Object Storage Panel](https://my.contabo.com/object_storage) for creating users.

## Scenario

Within the next steps we assume two existing buckets:

* `bucket-for-user-1`
* `bucket-for-user-2`

and two existing users which setup their password to access Contabo's Object Storage Panel:

* `user1@example.com` with `S3 Read and Write` role
* `user2@example.com` with `S3 Read and Write` role

The usage should be restricted like the follows:

* only `user1@example.com` has access to `bucket-for-user-1`
* only `user2@example.com` has access to `bucket-for-user-2`

Of course in your actual scenario bucket names and user names will differ. Please adjust them accordingly. You could have any numbers of buckets or users with different policies and also even have more fine grained control over the actions. But this is not covered here.

## Set policies on buckets

A bucket policy allows or disallows access in form of specific actions to buckets. These are used to control which user will have which access to a bucket. Please refer to [Using bucket policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html) for more detailed information.

Furthermore we will need the internal representation of the users in the S3 Object Storage. To get them please use the [Contabo API](https://api.contabo.com/#operation/retrieveUserList) or the [`cntb` cli](https://github.com/contabo/cntb) via `cntb get users`. Please use the value of the `userId` field.

You will also need the so called `s3TenantId` for the given Object Storage. You can obtain it via `./cntb get objectStorages -o=json`

### Step 1

This step denies any action on any resource in `bucket-for-user-1` for user `user2@example.com`.

With the given data we can build up a policy for `bucket-for-user-1` and store it in file `bucket-for-user-1-policy.json` with following contents:

```json title="bucket-for-user-1-policy.json"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "*",
      "Effect": "Deny",
      "Resource": "*",
      "Principal": {
        "AWS": [
          "arn:aws:iam::5c37e60c3ee04f1eb116c436b1afadca:user/12345:3368c22e-08da-446f-a470-1928e58457a2"
        ]
      }
    }
  ]
}
```

Please note that in here `s3TenantId=5c37e60c3ee04f1eb116c436b1afadca`, `customerId=12345` and `userId=3368c22e-08da-446f-a470-1928e58457a2`. Thus the format is `arn:aws:iam::<s3TenantId>:user/<customerId>:<userId>`.

To apply it, please run:

```bash
aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api put-bucket-policy --bucket bucket-for-user-1 --policy file://bucket-for-user-1-policy.json
```

### Step 2

This step denies any action on any resource in `bucket-for-user-2` for user `user1@example.com`.

```json title="bucket-for-user-2-policy.json"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "*",
      "Effect": "Deny",
      "Resource": "*",
      "Principal": {
        "AWS": [
          "arn:aws:iam::5c37e60c3ee04f1eb116c436b1afadca:user/12345:6299cbdd-ef72-486b-b088-c34181fc20f1"
        ]
      }
    }
  ]
}
```

Please note that in here `s3TenantId=5c37e60c3ee04f1eb116c436b1afadca`, `customerId=12345` and `userId=6299cbdd-ef72-486b-b088-c34181fc20f1`. Thus the format is `arn:aws:iam::<s3TenantId>:user/<customerId>:<userId>`.

To apply it, please run:

```bash
aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api put-bucket-policy --bucket bucket-for-user-2 --policy file://bucket-for-user-2-policy.json
```

## Remove policies

By removing the policies both users will be able to access fully the buckets again. Please perform the following steps:

```bash
aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api delete-bucket-policy --bucket bucket-for-user-1
aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api delete-bucket-policy --bucket bucket-for-user-2
```
