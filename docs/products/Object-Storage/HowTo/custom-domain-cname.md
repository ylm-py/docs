---
title: Setup Custom Domain (CNAME)
sidebar_position: 11
---

# Setting up Custom Domain using `CNAME`

Sometimes you want to use your own custom domain name instead of the rather generic ones provided by default for your S3 compatible Object Storage. You can achieve that by setting the so called `CNAME` resource record in your DNS.

The next sections will cover how to set and remove the custom domain name. It will be explained by using Contbo's Customer Panel. If you have other DNS then please proceed accordingly.

## Setting custom domain name

You need to have a zone you can manage in your DNS management. We just assume you would have `example.org`.

In that case please do the following:

1. Choose zone you want to edit, e.g. `example.org`, in [DNS Zone Management](https://my.contabo.com/dns)
2. Fill the fields for a new resource record:
   * `Name` -> please add the domain name you want to use to access the Object Stroage, e.g. `mystorage.example.org`
   * `TTL` -> leave it unchanged (24 hours in seconds)
   * `Type` -> please set it to `CNAME`
   * `Priority` -> leave unchanged
   * `Data` -> please add here the domain name of the S3 Object Stroage you are targeting, e.g. `eu2.contabostorage.com`
3. Click on `create record`

:::info Hint
Using any tool like [Cyberduck](/docs/products/Object-Storage/Tools/cyberduck) with your custom domain is straight forward. Just exchange e.g. `eu2.contabostorage.com` with your custom domain (e.g. `mystorage.example.org`)

Once a custom domain is set you can still use the [defaults](/docs/products/Object-Storage/s3-connection-settings). This is helpful to detect misconfigurations.
:::

## Removing custom domain name

In order to remove the custom domain please do the following:

1. Choose zone you want to edit, e.g. `example.org`, in [DNS Zone Management](https://my.contabo.com/dns)
2. Choose the resource record you've created previously.
3. Click on the delete icon next to the resource record. And cofirm deletion.

:::info Hint
After removal of the DNS resource record any configuration with the custom domain name won't work any longer.

Please note that DNS records do have a Time-To-Live (TTL) which determines how long they are valid without active lookup. If TTL is not yet elapsed the removed custom domain name as `CNAME` might still work. This is only temporary.
:::
