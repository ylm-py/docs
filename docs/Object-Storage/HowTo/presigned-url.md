---
title: Pre-signed URL
sidebar_position: 4
---

# Pre-signed URL

A pre-signed URL is special S3 compliant URL in order to share an object for a specific duration for everyone who has the URL. Thus the URL contains some more query parameters holding that specific information.

## Create a pre-signed URL

The easiest way is to use a tool as creating such pre-signed URLs requires coding skills. E.g. using [Cyberduck](/docs/Object-Storage/Tools/cyberduck) makes that task very easy.

* Naviagte to a file of your choice
* Select `Edit` -> `Copy URL` and choose one of the pre-signed URLs which are matching your duration
* You can alternatively right-click  and select either `Copy URL` or `Open URL`

## Format of supported pre-signed URLs

`https://<region>.contabostorage.com/<bucketname>/path/to/file?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=<credential>&X-Amz-Date=<datetime>&X-Amz-Expires=<duration>X-Amz-SignedHeaders=host&X-Amz-Signature=<signature>`
