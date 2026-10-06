// Launch switch. The site is a static export, so this is read at BUILD time:
// set NEXT_PUBLIC_SITE_LIVE=true (Amplify → Environment variables) and redeploy to launch.
// Anything else (unset, "false") builds the "coming soon" page and tells search engines to stay away.
export const SITE_LIVE = process.env.NEXT_PUBLIC_SITE_LIVE === 'true'
