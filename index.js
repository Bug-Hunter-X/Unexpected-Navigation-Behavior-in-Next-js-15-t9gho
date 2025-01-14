The issue was caused by using both `Link` and `useRouter` in tandem. While functional, this approach can lead to unexpected behaviors.  For a smoother and more predictable user experience, it is best to use either `Link` or `useRouter`, but not both, for navigation.

**Solution:**

Use only `Link` for navigation:

```javascript
// pages/about.js
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  );
}
```

Or, exclusively use `useRouter`:

```javascript
// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <button onClick={() => router.push('/about')}>Go to About</button>
    </div>
  );
}
```
This approach provides a consistent and reliable way to handle navigation within your Next.js application.