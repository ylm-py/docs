---
sidebar_position: 2
---

# cntb

[cntb](https://github.com/contabo/cntb) is an open source command line interface developed by Contabo to allow easy managing of the Contabo products. This includes the S3 Object Storage. Please follow the intructions to download and install `cntb`

## Configuration

To be able to use `cntb` with your S3 Object Storage, all you need is the following data. You get it via <https://my.contabo.com/api/details>

* `client-id`
* `client-secret`
* `api-password`
* `api-username`

No need for S3 specific credentials.

For configuration of `cntb` please execute once:

```bash
cntb config set-credentials --oauth2-clientid=<ClientId from Customer Control Panel> --oauth2-client-secret=<ClientSecret from Customer Control Panel> --oauth2-user=<API User from Customer Control Panel> --oauth2-password=<API Password from Customer Control Panel>
```

## Examples

### Create Bucket

The command below will create a bucket called `testbucket` in the region `EU`.

```shell
cntb create bucket EU testbucket
```

### Delete Bucket

The command below will delete a bucket called `testbucket` in the region `EU`

```shell
cntb delete bucket EU testbucket
```

### Upload file(s)

```bash
cntb create object --region EU --bucket testbucket --prefix prefix1/ --path path1
```

* `region` is the current region where you have bought your S3 Object Storage
* `bucket` is the bucket name that the files/folders will be uploaded to
* `prefix` is the folder name where everything will be uploaded to
* `path1` is the local path (from your local machine) where you want to upload files recursively

### Delete file

```bash
cntb delete object --region EU --bucket bucket123 --path path1/fileName
```

* `region` is the current region where you have bought your S3 Object Storage
* `bucket` is the bucket name
* `path` is the path to the file to be deleted
