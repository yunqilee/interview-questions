function parseDynamicLink(url) {
  const path = new URL(url).pathname;
  const pattern = /\/([^\/]+)\/([^\/]+)/g;
  const resp = {};
  let match;
  while ((match = pattern.exec(path)) !== null) {
    const key = match[1];
    const value = match[2];
    console.log(key, value);
    resp[key] = value;
  }
  return resp;
}
const url1 = "https://www.d.com/project/12345/item/67890";
const url2 = "https://www.d.com/project/12345/dock/9876/item/67890";

const result1 = parseDynamicLink(url1);
const result2 = parseDynamicLink(url2);

console.log(result1);
console.log(result2);
