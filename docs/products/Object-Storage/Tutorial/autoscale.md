---
sidebar_position: 2
---
# Auto-Scale of Storage Capacity

When purchasing Object Storage its capacity needs to be specified during the order process.
By activating the Auto Scaling feature the size of a specific storage increases automatically up to a preselected limit (in TB) as soon as the initially purchased limit is reached.

## Where can I see the Auto-Scale Status of my individual Storage?

In your object storage overview you can find the column 'Auto-Scaling Status' (see image below):
<p align="center">
<img src="/img/products/object-storage/tutorial/autoscaleOverview.png?raw=true" alt="AutoScale Overview"/>
</p>

* If the status is 'ON' (green) auto scaling for this specific storage is activated. The current limit can be seen and edited via Auto-Scaling Settings.
* If the status is 'OFF' (red) auto scaling for this specific storage is deactivated.

## How can I edit my Auto-Scale Settings?

To activate auto-scaling:

* Log into your Object Storage Panel
* Open the tab 'Storage Settings' (see also in image above)
* Select a storage, go to 'more' and click on 'Auto-Scaling Settings'

The following menu opens:
<p align="center">
<img src="/img/products/object-storage/tutorial/autoscaleSettings.png?raw=true" alt="AutoScale Settings"/>
</p>

The slider on top displays the current state of auto-scale for this storage. By a sliding to the left the feature is deativated, sliding to the right activates it.

If the feature is active, you can select the maximum amount to which your object storage will be automatically expanded every month if needed. When the purchased space is at capacity your space will be expanded in steps of 250GB up to your pre-defined limit. The setting needs to be confirmed by selecting 'Save Settings'.

## Where can I find more Product and Pricing Information about Auto-Scaling?

For general product and pricing information please see [here](https://contabo.com/en/object-storage).

## How can I add more space to my Storage without Auto-Scaling?

If you want to expand the memory of your storage permanently and immediately please use the 'Add more GB' option in your storage settings instead (see [here](/docs/products/Object-Storage/Tutorial/manualscale).).