---
sidebar_position: 1
---

# What is S3 compatible Object Storage?

Simple Storage Service (S3) Object Storage is a scalable storage service. This kind of service was introduced by Amazon AWS in 2006. Since then S3 compatible Object Storage is the defacto standard for Object Storage. It provides a high level of durability and high availability. Data can be accessed from anywhere via regular Internet connection. S3 Object Storage can be accessed via it's API or by a wide variaty of tools. Please refer to [Tools](/docs/Object-Storage/Tools/compatibility).

S3 compatible Object Storage storage provides the following key features:

* **Buckets**: data is stored in buckets. Each bucket can store so called objects, i.e. files and folders.
* **Scalability**: there are virtually no storage limits. Individual objects can be up to 5TB in size.
* **Sharing**: Share objects with selected persons or publicly with everyone via Internet.
* **Metadata-Support**: Each object is identified by an unique key and metadata can be used for more organizational control.
* **S3 compatible API**: supports S3 compatible APIs so that you can rely on huge number of existing tools. Please refer to [Tools](/docs/Object-Storage/Tools/compatibility).

## S3 Compatibility

The Contabo Object Storage is based on [Ceph](https://ceph.com/). It is not fully compatible with AWS S3 API. E.g. logging is not supported. For the very most use cases you shouldn't notice any difference.
