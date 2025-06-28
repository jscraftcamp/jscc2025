# AsyncLocalStorage

## Motivation of using local storage
	
- Passing through cross-cutting data that's annoying to pass through many different layers / scopes
 
## Existing use
- Providing logging and tracing context
- Request-specific caching
- Permissions system
- Injecting request-specific dependencies, e.g. database connection per user that's relevant to that request
 
## Typical implementation notes
- Added in some middleware, e.g. express
- Different objects for different purposes, e.g. caching, permissions, logging context
- Handle when the context is undefined
 
## Similar things in other languages
- Go context
- Java thread local storage
