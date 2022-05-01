---
sidebar_position: 2
---

# Creating Custom Images

While it is possible to create a Custom Image completely from scratch, the following example will build upon an existing Debian cloud image. Most Linux distributions are providing compatible images in the qcow2 format that are ready to be used on a Contabo VPS or VDS.

:::info Prerequisites
The following commands are meant to be run on a Linux VPS or VDS. A new and empty instance installed with Debian 11 was used here.
:::

Refer to the official [libguestfs documentation](https://www.libguestfs.org/virt-customize.1.html) to see all options that are available with the `virt-customize` command. This example is only covering the basic functionality.

```bash
# Install libguestfs-tools
sudo apt install -y --no-install-recommends libguestfs-tools

# Create a new directory and cd into it
mkdir deb11custom
cd deb11custom

# Download the official Debian 11 cloud image
wget -O deb11custom.qcow2 https://cloud.debian.org/images/cloud/bullseye/latest/debian-11-genericcloud-amd64.qcow2 

# Optional: Resize the image from its default 2 GB to 10 GB
qemu-img resize deb11custom.qcow2 10G

# Customize the image
# Note: growpart and resize2fs are only required if the image was resized
virt-customize -a deb11custom.qcow2 \
  --run-command 'growpart /dev/sda 1' \
  --run-command 'resize2fs /dev/sda1' \
  --update \
  --install ca-certificates,git,htop,rsync,vim

# Spin up a temporary HTTP server to serve the image, CTRL+C to stop
python3 -m http.server
```

Your Custom Image is now ready to be downloaded to your Contabo Custom Image repository. You may either use the [Customer Control Panel](https://my.contabo.com/) or for example our CLI tool on your local machine:

```
cntb create image --name 'Debian 11 Custom' \
  --description 'Includes common packages' \
  --url http://<SERVER_IPV4>:8000/deb11custom.qcow2 \
  --osType Linux \
  --version 11
```

Replace `SERVER_IPV4` with the public IPv4 address of the instance you built the image on. Don't forget to stop the temporary HTTP server once the image has finished downloading.
