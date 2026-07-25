const TEXT_EXTENSIONS = new Set([
  ".html",
  ".css",
  ".js",
  ".json",
  ".xml",
  ".txt",
  ".svg",
]);

function extensionFor(pathname) {
  const lastSegment = pathname.split("/").pop() || "";
  const dotIndex = lastSegment.lastIndexOf(".");
  return dotIndex >= 0 ? lastSegment.slice(dotIndex).toLowerCase() : "";
}

function hasFileExtension(pathname) {
  return extensionFor(pathname) !== "";
}

function addResponseHeaders(response, pathname) {
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  const ext = extensionFor(pathname);
  if (ext === ".html" || pathname.endsWith("/")) {
    headers.set("Cache-Control", "public, max-age=300, must-revalidate");
  } else if (TEXT_EXTENSIONS.has(ext) || ext) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function fetchAsset(request, env, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return env.ASSETS.fetch(new Request(url.toString(), request));
}

export default {
  async fetch(request, env) {
    if (!env || !env.ASSETS) {
      return new Response("Static asset binding is unavailable.", { status: 500 });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    }

    const url = new URL(request.url);
    let pathname = decodeURIComponent(url.pathname);
    if (!pathname.startsWith("/")) pathname = `/${pathname}`;

    let response = await fetchAsset(request, env, pathname);
    let servedPath = pathname;

    if (response.status === 404 && pathname.endsWith("/")) {
      servedPath = `${pathname}index.html`;
      response = await fetchAsset(request, env, servedPath);
    }

    if (response.status === 404 && !pathname.endsWith("/") && !hasFileExtension(pathname)) {
      servedPath = `${pathname}/index.html`;
      response = await fetchAsset(request, env, servedPath);
    }

    return addResponseHeaders(response, servedPath);
  },
};
