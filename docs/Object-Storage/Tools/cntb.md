---
sidebar_position: 2
---

# cntb

cntb is an open source command line interface developed by Contabo to allow for easy managing of the products in contabo.
To download cntb please check [https://github.com/contabo/cntb](https://github.com/contabo/cntb).


##Configure
To be able to use cntb with your object storage all you need is the following:
* `client-id`
* `client-secret`
* `api-password`
* `api-username`


To configure the config. 
```shell
cntb config set-credentials --oauth2-clientid=<ClientId from Customer Control Panel> --oauth2-client-secret=<ClientSecret from Customer Control Panel> --oauth2-user=<API User from Customer Control Panel> --oauth2-password=<API Password from Customer Control Panel>
```

##Create Bucket
To be able to create a bucket you will require the following information
* `bucket name`
* `region-name`

```shell
cntb create bucket EU testbucket
```

The above command will create a bucket called `testbucket` in the region `EU`


##Delete Bucket
```shell
cntb delete bucket EU testbucket
```

The above command will delete a bucket called `testbucket` in the region `EU`

## Upload file
```shell
cntb create object --region EU --bucket testbucket --prefix prefix1/ --path  path1 
```
* `region` is the current region where you have bought your object storage the bucket should be set
* `bucket` is the bucket name that the files/folders will be uploaded to
* `prefix` is the prefix which will be expected as the folder name that everything will be inserted into.
To be able to upload folders and files you can use the above command specifying the region which it will be uploaded to it.
The prefix is the path within the bucket where it will be uploaded to
* `path1` is the path from your local machine where you want to upload the files recursively


## Delete file
```shell
cntb delete object --region EU --bucket bucket123 --path path1/fileName
```

* `region` is the current region where you have bought your object storage the bucket should be set
* `bucket` is the bucket name that the files/folders will be uploaded to
* `path1` path to delete from.
