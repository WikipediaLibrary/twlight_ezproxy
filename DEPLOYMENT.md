# Deployment

After making changes to `expert/ezproxy.cfg` (such as [adding a partner to the library bundle](https://phabricator.wikimedia.org/T432973)), you will need to deploy those changes to the hosted EZproxy environment.

## Authentication
The password (and username) for the account to use during SCPing is stored in the Moderator Tools 1Password vault.

## Deployment steps
After making your changes on a branch/fork and creating a pull request ([ex.](https://github.com/WikipediaLibrary/twlight_ezproxy/pull/58)), follow these steps to deploy your changes to the hosted EZproxy environment.

You will need to be checked out to the branch/fork with your changes before starting the deployment process.

### Pull the current `expert/ezproxy.usr` from the hosted environment

```bash
scp {user}@scp.oclc.org:/{user}/expert/ezproxy.usr expert/ezproxy.usr
```

### Modify `expert/ezproxy.usr` if required
If you have made changes to the `expert/ezproxy.cfg` file that require changes to the `expert/ezproxy.usr` file, such as adding a partner to the bundle and thus removing a group, make those changes now.

To remove a group, modify the `AcceptGroups` line:
```diff
- AcceptGroups Default+BUNDLE+P1+P2+[...]
+ AcceptGroups Default+BUNDLE+P1+[...]
```

### Push the changes to the hosted environment
```bash
scp expert/ezproxy.cfg {user}@scp.oclc.org:/{user}/expert/ezproxy.cfg
```
```bash
scp expert/ezproxy.usr {user}@scp.oclc.org:/{user}/expert/ezproxy.usr
```

### Set the preprod deployment flag
```bash
scp expert/flag.preprod  {user}@scp.oclc.org:/{user}/expert/flag.txt
```
You will then need to wait for the deployment to take place - this can take anywhere between 15 and 30 minutes. You *should* get an email with the subject "OCLC Hosted EZproxy Expert Scripts are complete" once ready.

### Configure and test the changes in the preprod environment
You should then log in to the staging (preprod) environment at https://twlight-staging.wmcloud.org and go to the partners section in the admin interface at [/admin/resources/partner](https://twlight-staging.wmcloud.org/admin/resources/partner/). You will then set the authorization type for the partner you just changed.

Test the partner URL works as expected.

### Set the prod deployment flag
Once you have tested the changes in the preprod environment and are ready to deploy to production, you will need to set the prod deployment flag. You should coordinate with the moderator tools PM and/or a TWL admin to ensure they are ready for the change.

```bash
scp expert/flag.prod  {user}@scp.oclc.org:/{user}/expert/flag.txt
```
You will then need to wait for the deployment to take place - this can take anywhere between 15 and 30 minutes. You *should* get an email with the subject "OCLC Hosted EZproxy Expert Scripts are complete" once ready.

### Configure and test the changes in the prod environment
You should then log in to the production environment at https://wikipedialibrary.wmflabs.org and go to the partners section in the admin interface at [/admin/resources/partner](https://wikipedialibrary.wmflabs.org/admin/resources/partner/). You will then set the authorization type for the partner you just changed.

Test the partner URL still works as expected.

## Validating resource groups
You can validate that the resource groups are correct by logging in to https://wikipedialibrary.idm.oclc.org:9443/groups (preprod) or https://wikipedialibrary.idm.oclc.org/groups (prod).

## Troubleshooting
- You may need to log out of both the preprod and prod environments and then log back in to the one you intend to use before attempting to use the admin interfaces. You can logout from ezp while keeping your TWL session by going to https://wikipedialibrary.idm.oclc.org:9443/logout (preprod) or https://wikipedialibrary.idm.oclc.org/logout (prod).
