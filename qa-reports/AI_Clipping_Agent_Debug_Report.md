# AI Clipping Agent - Debug Report

**Date:** Dec 20, 2024  
**Module:** AI Clipping Agent  
**URL:** https://creator.viewcreator.ai/ai-clipping-agent

---

## Issue Summary

**Error Message:** "YouTube is temporarily blocking this request. Please try again in a few moments, or try a different video URL."

**Root Cause:** YouTube rate limiting / bot detection on server-side video fetching.

---

## Evidence

| Job | Time | Status | Error |
|-----|------|--------|-------|
| youtube.com | 1 min ago | ✅ Complete | - |
| youtube.com | 2 hours ago | ❌ Failed | YouTube blocking |
| youtube.com | 11 hours ago | ❌ Failed | YouTube blocking |
| Processing... | 14 hours ago | ✅ Complete | - |
| youtube.com | 3 days ago | ✅ Complete | - |

**Key Observation:** Failures are intermittent. Same video URL works sometimes, fails other times.

---

## Diagnosis

**NOT a code bug.** This is external rate limiting from YouTube.

YouTube detects and blocks:
- High request frequency from same IP
- Non-browser User-Agent headers
- Known yt-dlp/youtube-dl patterns

---

## Recommended Fixes

| Priority | Fix | Effort |
|----------|-----|--------|
| **P0** | Add exponential backoff retry (1s, 2s, 4s, 8s) | 2 hours |
| **P1** | Rotate User-Agent headers | 1 hour |
| **P1** | Add request throttling (1 req/5 sec) | 1 hour |
| **P2** | Implement proxy rotation | 1 day |
| **P2** | Use YouTube Data API for metadata | 2 days |

---

## Quick Win Code

```javascript
// Add to video fetch function
const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fetchVideo(url);
    } catch (e) {
      if (e.message.includes('blocking')) {
        await delay(Math.pow(2, i) * 1000); // 1s, 2s, 4s
        continue;
      }
      throw e;
    }
  }
  throw new Error('Max retries exceeded');
}
```

---

## Additional UX Bug Found

**Issue:** History tab doesn't switch content when clicked via browser automation.  
**Impact:** Low (works for real users clicking center of button)  
**Cause:** Radix UI tab component requires precise click targeting.

---

**Report by:** QA Agent  
**Status:** Ready for dev handoff
