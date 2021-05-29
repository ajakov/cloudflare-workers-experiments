addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url);
  const clientIP = request.headers.get("CF-Connecting-IP");
  let variables = ['url', 'ip'];
  let replaces = [url, clientIP];


  let responseHtml = replaceVariablesInTemplate(variables, replaces, html);
  return new Response(responseHtml, {
    headers: { 'content-type': 'text/html;charset=UTF-8' },
  })
}

function replaceVariablesInTemplate(variables, replaces, templateContent) {
  const total = variables.length;
  let responseHtml = templateContent;
  for(let i = 0; i < total; i++) {
    responseHtml = responseHtml.replace('{{ ' + variables[i] + ' }}', replaces[i]);
  }
  return responseHtml;
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
  <p>Your IP address: {{ ip }}</p>
  <p>
    <a href="https://aleksandarjakovljevic.com">Check out my personal website</a></a>
   </p>
</body>`