addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('<html>' +
      '<head><title>AJ</title></head><body><p>This website is powered by Cloudflare workers!</p><p><a href="https://aleksandarjakovljevic.com">Check out my personal website</a></a></p></body></html>', {
    headers: { 'content-type': 'text/html' },
  })
}
