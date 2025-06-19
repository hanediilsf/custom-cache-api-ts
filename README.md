Custom Cache API (Node.js + TypeScript)
This is a simple, functional cache system built in Node.js with TypeScript. It stores key-value pairs with a configurable TTL (Time-To-Live) and exposes a REST API to interact with the cache.

🚀 Features
🔁 In-memory key-value cache using JavaScript Map

⏳ Expiration of entries via TTL (Time-To-Live)

🔓 Simple REST API for reading/writing to cache

✅ Fully tested (unit + integration)

🧪 No external cache libraries or databases used

💡 Implemented with functional programming (no classes)

🛠️ Technologies
Node.js

TypeScript

Express.js

Jest + Supertest (for testing)

⚙️ How It Works
Each cache entry is stored along with an expiration timestamp.

On every get() call, the system checks if the entry has expired.

Expired entries are deleted automatically.

TTL is configurable when creating the cache (default: 10 seconds).

📦 API Endpoints
## POST /api/cache
Cache a new value

Request body:
{
  "key": "username",
  "value": "Hanedi"
}
Response:
{
  "message": "Value cached"
}

##GET /api/cache/:key
Retrieve a cached value

Success response:
{
  "value": "Hanedi"
}
If key not found or expired:
{
  "message": "Cache miss or expired"
}

✅ Test Coverage
Run tests:
       npm test
Test files:

unit.test.ts: Tests core cache logic and TTL expiration

integration.test.ts: Simulates full API flow with Express

✏️ How to Configure TTL
Inside src/routes/cacheRoutes.ts:

const cache = createCache(10000); // TTL in milliseconds
You can change 10000 to any TTL value you want.




