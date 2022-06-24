---
sidebar_position: 1
title: No Access
---

# No access to Object Storage or Buckets

Possible other questions:

* Why can't I see my buckets?
* Why do I get the message `We are unable to perform the request. Please retry or contact the support.` in Contabo's Object Storage Panel?
* Why can't I create buckets?

## How to check if you are affected

You can easily check if you are affected by blacklisting. Assuming your S3 Object Storage is located in region EU you can do both of the following:

```sh
ping eu2.contabostorage.com
# if you get an error response or 100% packet loss then you are getting blocked
curl https://eu2.contabostorage.com
# if you don't get back `{"message":"Unauthorized"}` then you are getting blocked
```

For other regions please refer to [S3 Connection Settings](/docs/products/Object-Storage/s3-connection-settings) to get the corresponding URL.

## Solutions

:::info Blacklisted Object Storage URL
The most frequent cause for that problem is that the Object Storage URLs like `eu2.contabostorage.com` are being blacklisted as some users upload viruses of phishing content there. Even though they are blocked / banned very fast the URL might reach blacklists.

Please ensure that the URLs are not blacklisted on your:

* internet security software
* (home) router
:::
