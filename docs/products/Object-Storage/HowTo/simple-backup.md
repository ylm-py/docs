---
title: Simple Backup
sidebar_position: 5
---

# Simple Backup with rclone

Here is a very simple way to perform backup of files you are caring. Here only [rclone](/docs/products/Object-Storage/Tools/rclone) is being used. Of course you could use more specific tools to create e.g. archives of the files you want to backup and use rclone to store them safely on Contabo's S3 Object Storage.

## Simple Scenario

1. We assume that the files and folder you want to backup are in folder `/home/user/backup`
2. setup rclone like described [here](/docs/products/Object-Storage/Tools/rclone)
3. We assume the S3 Object Storage to have a bucket called `backup`
4. run the following command to store the files on your Object Storage

  ```bash
  rclone sync -P /home/user/backup eu2:backup/ --s3-no-head
  ```

5. You can of course run this command on a recurring schedule with crontab or Windows Task Scheduler
