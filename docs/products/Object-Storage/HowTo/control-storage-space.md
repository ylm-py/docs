---
title: Control Storage Space
sidebar_position: 10
---

# Control Storage Space

Sometimes you may encounter with S3 compatible Object Storage in general that more storage space is reported as being used than you obviously have. In practice it has the following reasons:

* Aborted multipart uploads
* Enabled Versioning

The next sections will cover the different topics in more detail. In the following we assume [aws cli](/docs/products/Object-Storage/Tools/aws-cli) to be installed and configured properly.

## Aborted multipart uploads

Usually uploads of larger files are chunked into smaller pieces e.g. 10 MB and uploaded one by one. Those pieces of files are not shown by default but of course occupy storage space. Multipart uploads are managed by buckets.

### Display multipart uploads

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api list-multipart-uploads --bucket mybucket
```

This will return a JSON output containing files currently being uploaded or having been aborted. If you get nothing back then there are no multipart uploads going on.

### Aborting / Deleting multipart uploads

In order to abort a single upload please copy the key (file name) and the upload id and invoke, e.g.

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api abort-multipart-upload --bucket mybucket --key filename.ext --upload-id 2~Pw5t8pu1uBnxu_qMyJRnjnZKYvav41c
```

### Aborting all multipart uploads of a bucket

The following script automates the process of deleting every multipart upload in progress or which has been aborted.

```bash
BUCKETNAME=mybucket
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api list-multipart-uploads --bucket $BUCKETNAME \
| jq -r '.Uploads[] | "--key \"\(.Key)\" --upload-id \(.UploadId)"' \
| while read -r param; do
    eval "aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api abort-multipart-upload --bucket $BUCKETNAME $param";
done
```

## Versioning

Enabled or once enabled Versioning holds also storage space as there are many versions of a file. Those files are usually not visible.

Please refer to [Versioning](/docs/products/Object-Storage/HowTo/versioning) for how to enable and disable it. In the following we will just handle the deletion of older versions to reclaim storage space.

### Delete an old version of a file

```bash
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api list-object-versions --bucket mybucket
aws --profile eu2 --region default --endpoint-url https://eu2.contabostorage.com s3api delete-object --bucket mybucket --key file-to-delete.ext --version-id 3424sadfds2344
```

:::info Hint
Tools like [Cyberduck](/docs/products/Object-Storage/Tools/cyberduck) are making these tasks very easy. Just do a `Info` on a bucket and check `Bucket Versioning`. Please also enable via `View` -> `Show Hidden Files` the display of all versions. You might also delete older versions very easily.
:::
