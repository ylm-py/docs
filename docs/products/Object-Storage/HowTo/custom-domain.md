---
title: Setup Custom Domain
sidebar_position: 11
---

# Setting Up a Custom Domain

Sometimes you might want to use your own custom domain name instead of the rather generic ones provided by default for your S3 compatible Object Storage. The S3 Object Storage is available only via TLS encrypted transport (`https`) in order to improve security. `CNAME` resource records only work with unencrytped transport and are not supported without showing up certificate errors.

Bascially, you'll need to set up a proxy server passing the requests to the S3 Object Storage system and als providing the TLS certificate. You could, for example, use Cloudflare. Please be cautious setting up such a proxy, so that it doesn't change the requests.

## Cloudflare Example

:::info Prerequisites
This guide assumes that you already have a domain on [Cloudflare](https://www.cloudflare.com/).

This only works for publicly shared objects. See: [Share Object Storage with public](/docs/products/Object-Storage/Tutorial/shareWithPublic)
:::

Cloudflare makes it easy to get a bucket publicly accessible on your own domain name.

### Prepare Bucket

First, make sure you have created the bucket and enabled public sharing for the bucket the Contabo Object Storage Panel. Note: When public sharing is enabled for a bucket, all objects inside the first level of the bucket are also automatically publicly shared (even when not shared explicitly). However, this is not true for objects in folders inside the bucket. Enable public sharing for each folder as well if you want their content to be also publicly accessible.

:::note
Take note of the public sharing URL. It contains your unique tenant ID which we will need later. The URL looks like this, for example: https://eu2.contabostorage.com/5b5de0931f634e9096479dbc6e65b207:bucket
:::

### DNS

Once you are set, sign into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and select your domain. Go to the DNS panel first and select _Add record_. Choose _CNAME_ as type, enter a name of your choice ("objects" in this example) and enter the target. This is the first part of the public sharing URL ("eu2.contabostorage.com" here).

![Cloudflare DNS Add record](/img/products/object-storage/howto/cname/Cloudflare_DNS_Add_record.png)

The final DNS record should look like this:

![Cloudflare DNS CNAME](/img/products/object-storage/howto/cname/Cloudflare_DNS_CNAME.png)

### SSL Mode

To avoid infinite redirects, set the SSL mode in Cloudflare. Go to Rules &rarr; Configuration Rules in the Cloudflare Dashboard and select _Create rule_. There, select "Hostname" as _Field_, "equals" as _Operator_ and your hostname as _Value_, "objects.example.com" in our example:

![Cloudflare Configuration Rule](/img/products/object-storage/howto/cname/Cloudflare_Configuration_Rule.png)

Scroll down to add SSL as setting and set it to "Full":

![Cloudflare Configuration Rule SSL](/img/products/object-storage/howto/cname/Cloudflare_Configuration_Rule_SSL.png)

### Rewrite URL

Next up is a rewrite rule to shorten the final URL. Go to Rules &rarr; Transform Rules in the Cloudflare Dashboard, select _Create transform rule_ and _Rewrite URL_:

![Cloudflare Create transform rule](/img/products/object-storage/howto/cname/Cloudflare_Create_transform_rule.png)

We set the rule to match all requests for the newly-added hostname so select "Hostname" as _Field_, "equals" as _Operator_ and your hostname as _Value_, "objects.example.com" in our example.

Select _Rewrite to..._ as _Then..._ action, make sure it is set to "Dynamic" and enter this pattern:

```
concat("/<your unique tenant ID>:<bucket>",http.request.uri.path)
```

![Cloudflare URL Rewrite](/img/products/object-storage/howto/cname/Cloudflare_URL_Rewrite.png)

With this rewrite rule, we won't need to put the tenant ID and bucket name in the URL anymore. Cloudflare will do it for us when proxying the request to the Object Storage. With this, we went from the long original URL `https://eu2.contabostorage.com/5b5de0931f634e9096479dbc6e65b207:bucket/image.jpg` to a much shorter: `https://objects.example.com/image.jpg`
