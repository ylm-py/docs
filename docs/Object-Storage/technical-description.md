---
sidebar_position: 4
---

# Technical Description

Some more technical details to Contabo's S3 compatible Object Storage.

## Technology

We are using [Ceph](https://ceph.com/) for providing S3 compatible Object Storage.

* Virtual Hosted Buckets are not supported. Path based buckets are being used.
  so e.g. `eu2.contabostorage.com/bucketname` is used instead of `bucketname.eu2.contabostorage.com`
* `CNAME` for custom domain names are not supported yet.
* No server side encryption yet.
* Transport is encrypted via TLS

## Limits

Limitation is performed to assure good and fair performance for all users of the Object Storage system. Limitiations can be adjusted anytime depending current usage.

* max. file size is 5 TB
* number of objects is currently limited to 3 millions per customer
* number of S3 API requests is limited to 250 requests / second
* every data stored has additional 3 times redundancy
* no additional backup is performed
* bandwidth is limited and regularily adjusted. Limit should be at least 10 MByte/s (=80 Mbit/s)
* max. chunksize is 5 MB
