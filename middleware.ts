export function middleware() {
// temporarily do nothing; let all requests pass
}

export const config = {
matcher: ["/(.*)"]
};// Reserved for gating /app and /admin later
