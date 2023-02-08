export default async (request) => {
    console.log('hello from edge.')
    return new Response("Hello, World!", {
      headers: { "content-type": "text/html" },
    });
  };