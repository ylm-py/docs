---
title: Setup Custom Domain
sidebar_position: 11
---

# Setting up a Custom Domain

Sometimes you want to use your own custom domain name instead of the rather generic ones provided by default for your S3 compatible Object Storage. The S3 Object Storage is available only via TLS encrypted transport (`https`) in order to improve security. `CNAME` resource records only work with unencrytped transport and are not supported without showing up certificate errors.

Bascially you'll need to setup a proxy server passing the requests to the S3 Object Storage system and als providing the TLS certificate. You could for example use Cloudflare. Please be cautious setting up such a proxy so that it doesn't change the requests.
