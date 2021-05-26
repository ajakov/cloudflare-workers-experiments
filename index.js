addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let url = request.url;
  let headers = JSON.stringify(request.headers.entries());
  let responseHtml = html.replace('{{ url }}', url);
  return new Response(responseHtml, {
    headers: { 'content-type': 'text/html;charset=UTF-8' },
  })
}

const html = `<!DOCTYPE html>
<head>
    <title>AJ</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>This website is powered by Cloudflare workers!</p>
  <p>Deployed usign GitHub actions</p>
  <p>URL: {{ url }}</p>
  <p>
    <a href="https://aleksandarjakovljevic.com">Check out my personal website</a></a>
   </p>
</body>`