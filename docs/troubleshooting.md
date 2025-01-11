# Troubleshooting Guide

## Authentication Errors

### Login Issues

**Error Message:**  
<span class="error-message">Error: Invalid identifier or password</span>

**Checklist:**
1. Username and Password Entry
   - Check for any accidental spaces
   - If copying and pasting, ensure no extra characters were included

2. Username Format
   - Correct format: `your-username.bsky.social`
   - Common mistake: `your-username` (missing .bsky.social)

3. Password Information
   - We strongly recommend using an [App Password](https://bsky.app/settings/app-passwords) instead of your regular password
   - App Password format: `xxxx-xxxx-xxxx-xxxx` (19 characters)
   
::: tip Helpful Tips
Don't confuse the App Password with the "password name" shown in settings.
How to create a new App Password:
2. [Navigate to App Passwords section](https://bsky.app/settings/app-passwords)
3. Click "Add App Password"
4. Click "Create App Password"
4. Copy the generated 19-character password
:::

--- 

### Two-Factor Authentication Required

**Error Message:**  
<span class="error-message">Error: Two-factor authentication required</span>

**Solution:**
1. Check your email for the authentication code
2. Enter the code in the 2FA input field
3. Try logging in again

## Rate Limit Errors

**Error Message:**  
<span class="error-message">Error: Rate limit error</span>

**Solution:**
1. Bluesky API has the following limits ([official documentation](https://docs.bsky.app/docs/advanced-guides/rate-limits)):
   - Up to 5,000 points per hour (approximately 1,666 new actions)
   - Up to 35,000 points per day
   - Points per action:
     - Create: 3 points
     - Update: 2 points
     - Delete: 1 point
2. If you hit the limit, wait until the limit resets
3. Click the "Restart" button to try again

::: warning
The version published on Firefox frequently encounters rate limit errors. If you encounter an error, please try it on Chrome.
:::

::: tip
Most users won't hit these limits during normal usage. However, be mindful when performing bulk actions like following many users or liking many posts in a short period.
:::




## Page Errors

### Invalid Page

**Error Message:**  
<span class="error-message">Error:  Invalid active page. Use the extension with a valid web page active.</span>

**Solution:**
Only use the extension on these 𝕏 (Twitter) pages:
- Following page ([x.com/following](https://x.com/following))
- Blocking page ([x.com/settings/blocked/all](https://x.com/settings/blocked/all))
- List members page (`x.com/i/lists/<list_id>/members`)

or check your extension permissions on extension page.
Site permissions should be like below:

<img src="/images/site_permissions.png" alt="site permissions" width="500"/>

## Scanning Issues

### View Detected Users button does not work

Due to some reason, the View Detected Users button may not work.

**Solution:**
1. Right-click the extension icon and select "Options"
2. The results page will be displayed

<img src="/images/click-option.png" alt="click option" width="500"/>

### Scan Stops Early

Scanning stops before reaching the bottom of the page

**Solution:**
1. Click "Resume Scanning" to continue
2. The scan will automatically stop when it reaches the bottom of the page
3. You can click "Stop Scanning and View Results" at any time

### No Users Found

No Bluesky users detected after scanning

**Solution:**
1. Make sure you're logged in correctly
2. Try scanning again - some users may not be detected on first pass
3. Check if the 𝕏 users have linked their Bluesky accounts in their profiles

## Other Issues

If you encounter any unexpected errors:

1. Reload the page
2. Try the operation again
3. If the problem persists, you can either:
   - [Create an issue](https://github.com/kawamataryo/sky-follower-bridge/issues) with:
     - The exact error message
     - What you were trying to do
     - Your browser type and version
     - Any relevant screenshots
   - Or mention [@kawamataryo.bsky.social](https://bsky.app/profile/kawamataryo.bsky.social) on Bluesky
