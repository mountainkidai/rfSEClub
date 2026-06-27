# Layer 5: Next.js App Router — The Complete Mental Model

The **App Router** in Next.js 13+ is a file-system based router built around layouts, pages, server components, and streaming. [en.nextjs](https://en.nextjs.im/docs/app)

---

## File-System Routing

```text
app/
├── layout.tsx              → Root layout, wraps every page
├── page.tsx                → Route: "/"
├── globals.css             → Global styles
│
├── hotels/
│   ├── layout.tsx          → Layout for all /hotels/* routes
│   ├── page.tsx            → Route: "/hotels"
│   └── [id]/
│       └── page.tsx        → Route: "/hotels/[any-value]"
│
├── (auth)/                 → Route group, no URL segment
│   ├── login/
│   │   └── page.tsx        → Route: "/login"
│   └── register/
│       └── page.tsx        → Route: "/register"
│
└── api/
    └── hotels/
        └── route.ts        → API endpoint: GET/POST "/api/hotels"
```

> [!NOTE]
> In the App Router, folders define route segments, `page.tsx` makes a segment publicly routable, and `layout.tsx` wraps child routes. [nextjs](https://nextjs.org/docs/app)

---

## Special Files

- `page.tsx` → The page component; creates a public route. [nextjs](https://nextjs.org/docs/app)
- `layout.tsx` → Wraps child routes and persists across navigation; useful for navbars, sidebars, and shared UI state. [nextjs](https://nextjs.org/docs/app)
- `loading.tsx` → UI shown while a route segment is loading or streaming; works with Suspense. [nextjs](https://nextjs.org/docs/app)
- `error.tsx` → Error boundary UI for a route segment; used when rendering throws. [nextjs](https://nextjs.org/docs/app)
- `not-found.tsx` → Rendered when `notFound()` is triggered. [nextjs](https://nextjs.org/docs/app)
- `route.ts` → Route handler for API-style requests; no page UI. [nextjs](https://nextjs.org/docs/app)
- `middleware.ts` → Runs before requests for use cases like auth, rewrites, and redirects. [nextjs](https://nextjs.org/docs)

> [!TIP]
> A good mental model is: `page.tsx` defines content, `layout.tsx` defines persistent structure, and the other special files define fallback behavior around that structure. [nextjs](https://nextjs.org/docs/app)

---

## Server vs Client Components

This is the most important App Router concept: components are **Server Components by default** in the `app/` directory. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)

### Server Component

- Runs on the server, or at build time when statically generated. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Can be `async` and `await` data directly. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Can access databases, the filesystem, and environment variables on the server. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Sends less JavaScript to the browser by default. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Cannot use client-only hooks like `useState` or `useEffect`. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Cannot use browser APIs like `window` or `document`. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Cannot attach event handlers directly. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)

### Client Component

Add `"use client"` at the top of the file.

- Can use React hooks like `useState`, `useEffect`, and `useRef`. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Can use browser APIs and event handlers. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Ships JavaScript to the client, so it increases bundle size. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Should be used only for interactive UI that truly needs the browser. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)

> [!IMPORTANT]
> Default to **Server Components** first, then move to **Client Components** only when you need interactivity. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)

### Example: Server Component

```tsx
// app/hotels/[id]/page.tsx
// No "use client" = Server Component

export default async function HotelPage({ params }) {
  const hotel = await db.query("SELECT * FROM places WHERE id = $1", [
    params.id,
  ]);

  const weather = await fetch("https://api.weather.com/shimla").then((r) =>
    r.json(),
  );

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{weather.temp}°C</p>
      <BookingForm hotelId={hotel.id} />
    </div>
  );
}
```

### Example: Client Component

```tsx
// app/hotels/[id]/BookingForm.tsx
"use client";

import { useState } from "react";

export default function BookingForm({ hotelId }) {
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleBook() {
    setLoading(true);

    await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({ hotelId, date }),
    });

    setLoading(false);
  }

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleBook} disabled={loading}>
        {loading ? "Booking..." : "Book Now"}
      </button>
    </div>
  );
}
```

---

## Composition Rule

The most useful rule is:

- Server Components **can** import and render Client Components. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Client Components **cannot** import Server Components directly. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- Client Components **can** receive Server Component output through `children` or props composition patterns. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)

```tsx
// Server Component
export default async function Page() {
  const data = await fetchData();

  return (
    <ClientWrapper>
      <ServerContent data={data} />
    </ClientWrapper>
  );
}
```

> [!NOTE]
> Keep server logic as high as possible in the tree, and push client interactivity down to the smallest necessary leaf components. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)

---

## Routing and Navigation

Use `Link` for client-side navigation between routes. [nextjs](https://nextjs.org/docs/app)

```tsx
import Link from "next/link";

<Link href="/hotels/shimla">Shimla Hotels</Link>;
```

- `Link` enables client-side transitions instead of full page reloads. [nextjs](https://nextjs.org/docs/app)
- Next.js can prefetch linked routes to make navigation feel instant. [nextjs](https://nextjs.org/docs/app)

For programmatic navigation in Client Components, use `useRouter` from `next/navigation`. [nextjs](https://nextjs.org/docs/app)

```tsx
"use client";

import { useRouter } from "next/navigation";

function SearchForm() {
  const router = useRouter();

  function handleSearch(query: string) {
    router.push(`/search?q=${query}`);
    // router.replace()
    // router.back()
  }
}
```

### Reading Params

**In Server Components**

```tsx
export default function Page({ params, searchParams }) {
  // params: dynamic segments
  // searchParams: query string values
}
```

**In Client Components**

```tsx
"use client";

import { useParams, useSearchParams } from "next/navigation";
```

---

# Layer 6: Data Fetching — Where The Data Actually Runs

The App Router is powerful because fetching often happens on the server, close to your data source, instead of in the browser. [nextjs](https://nextjs.org/docs/app/guides)

## Fetch and Caching

Next.js extends `fetch()` with caching and revalidation behavior. [nextjs](https://nextjs.org/docs/app/guides)

```tsx
// Cached by default in many server rendering contexts
const data = await fetch("https://api.phunsuk.com/hotels");
```

```tsx
// Revalidate every hour
const data = await fetch("https://api.phunsuk.com/hotels", {
  next: { revalidate: 3600 },
});
```

```tsx
// Always fresh
const data = await fetch("https://api.phunsuk.com/hotels", {
  cache: "no-store",
});
```

```tsx
// Tag-based invalidation
const data = await fetch("https://api.phunsuk.com/hotels", {
  next: { tags: ["hotels"] },
});
```

```tsx
import { revalidateTag } from "next/cache";

revalidateTag("hotels");
```

> [!IMPORTANT]
> Think in three modes: cached, revalidated, and always-fresh. Pick the cheapest mode that still matches the product requirement. [nextjs](https://nextjs.org/docs/app/guides)

---

## Direct Database Access

A major App Router advantage is fetching directly inside Server Components without creating an extra internal API layer. [nextjs](https://nextjs.org/docs/app/guides)

```tsx
// app/hotels/page.tsx
import { db } from "@/lib/db";

export default async function HotelsPage() {
  const hotels = await db.query(`
    SELECT 
      p.id,
      p.name,
      p.details->>'description' as description,
      COUNT(o.id) as observation_count,
      AVG((o.value->>'rating')::float) as avg_rating
    FROM places p
    LEFT JOIN observations o ON o.place_id = p.id
    WHERE p.place_type = 'hotel'
    GROUP BY p.id
    ORDER BY avg_rating DESC
    LIMIT 20
  `);

  return (
    <div>
      {hotels.rows.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
```

- The SQL runs on your server, not in the browser. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- The client receives rendered UI, not your raw query implementation. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- This often removes unnecessary JSON hops inside your own app architecture. [nextjs](https://nextjs.org/docs/app/guides)

---

## Parallel Data Fetching

Avoid sequential fetching when requests are independent. [nextjs](https://nextjs.org/docs/app/guides)

```tsx
// Bad: sequential
const hotel = await fetchHotel(id);
const reviews = await fetchReviews(id);
const nearby = await fetchNearby(id);
```

```tsx
// Good: parallel
const [hotel, reviews, nearby] = await Promise.all([
  fetchHotel(id),
  fetchReviews(id),
  fetchNearby(id),
]);
```

> [!TIP]
> If one request does not depend on another, run them in parallel. [nextjs](https://nextjs.org/docs/app/guides)

---

## Streaming With Suspense

Streaming lets fast parts of the page render first while slower parts arrive later. [en.nextjs](https://en.nextjs.im/docs/app)

```tsx
import { Suspense } from "react";

export default function HotelPage({ params }) {
  return (
    <div>
      <HotelHeader id={params.id} />

      <Suspense fallback={<div>Loading reviews...</div>}>
        <Reviews id={params.id} />
      </Suspense>

      <Suspense fallback={<div>Loading nearby...</div>}>
        <NearbyPlaces id={params.id} />
      </Suspense>
    </div>
  );
}
```

This improves perceived performance because the page is not blocked by the slowest query. [nextjs](https://nextjs.org/docs/app)

---

## Server Actions

Server Actions let forms call server-side logic directly without requiring a separate API route in many cases. [en.nextjs](https://en.nextjs.im/docs/app)

```tsx
export default function ObservationForm({ placeId }) {
  async function submitObservation(formData: FormData) {
    "use server";

    const rating = formData.get("rating");
    const comment = formData.get("comment");

    await db.query(
      `INSERT INTO observations (place_id, value, observer_id)
       VALUES ($1, $2, $3)`,
      [placeId, { rating, comment }, currentUserId],
    );

    revalidateTag(`place-${placeId}`);
  }

  return (
    <form action={submitObservation}>
      <input name="rating" type="number" min="1" max="5" />
      <textarea name="comment" />
      <button type="submit">Submit Observation</button>
    </form>
  );
}
```

- The form can still work without client-side JavaScript enhancements. [nextjs](https://nextjs.org/docs/app/guides)
- JavaScript can improve the experience, but the submission logic lives on the server. [nextjs](https://nextjs.org/docs/app/guides)

---

# Layer 7: The Bundle Optimization Arsenal

Even with server rendering, interactive parts still ship JavaScript, so bundle size still matters. [nextjs](https://nextjs.org/docs/app)

## Build Output

Next.js build output shows route sizes and shared JavaScript, which helps you see where your baseline cost comes from. [nextjs](https://nextjs.org/docs/app)

```bash
npm run build
```

Example shape:

```text
Route (app)              Size     First Load JS
┌ ○ /                    4.2 kB   87 kB
├ ○ /hotels              2.1 kB   85 kB
└ ƒ /hotels/[id]         3.8 kB   88 kB

First Load JS shared by all: 83 kB
├ chunks/framework-...js 45 kB
├ chunks/main-...js      28 kB
└ other shared chunks    10 kB
```

> [!WARNING]
> Every unnecessary client dependency makes your slowest users pay for it on every page load. [nextjs](https://nextjs.org/docs/app)

---

## Code Splitting

Use dynamic imports for heavy interactive components that are not immediately needed. [nextjs](https://nextjs.org/docs/app)

```tsx
import dynamic from "next/dynamic";

const ObservationChart = dynamic(
  () => import("@/components/ObservationChart"),
  {
    loading: () => <p>Loading chart...</p>,
    ssr: false,
  },
);

<ObservationChart data={observations} />;
```

This is especially useful for charting, editors, maps, and browser-only libraries. [nextjs](https://nextjs.org/docs/app)

---

## Tree Shaking

Import only what you need, or replace utility libraries with native APIs when practical.

```tsx
// Bad
import _ from "lodash";
_.debounce(fn, 300);
```

```tsx
// Better
import debounce from "lodash/debounce";
debounce(fn, 300);
```

```tsx
// Often best
function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

---

## next/image

`next/image` automatically optimizes image delivery with sizing, lazy loading, and modern formats. [nextjs](https://nextjs.org/docs)

```tsx
import Image from "next/image";

<Image
  src="/hotel-shimla.jpg"
  width={800}
  height={600}
  alt="Hotel in Shimla"
  priority={false}
  placeholder="blur"
  blurDataURL="data:..."
/>;
```

It helps by:

- Serving appropriately sized images for each device. [nextjs](https://nextjs.org/docs)
- Lazy loading off-screen images by default in common cases. [nextjs](https://nextjs.org/docs)
- Reducing layout shift by reserving dimensions. [nextjs](https://nextjs.org/docs)
- Delivering more efficient formats when supported. [nextjs](https://nextjs.org/docs)

---

## next/font

`next/font` self-hosts fonts in your app pipeline so users avoid extra runtime requests to external font CDNs. [nextjs](https://nextjs.org/docs)

```tsx
import { Inter, Noto_Sans_Devanagari } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-devanagari",
});

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${devanagari.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

> [!TIP]
> Fonts are easy to ignore in performance work, but each avoided external request improves startup on weak networks. [nextjs](https://nextjs.org/docs)

---

# Layer 8: Your Actual Build Sequence

Here is a cleaner project structure for **Wangdu**:

```text
wangdu/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── lessons/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── practice/
│   │   └── page.tsx
│   └── api/
│       ├── progress/
│       │   └── route.ts
│       └── subscription/
│           └── route.ts
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── features/
│       ├── LessonPlayer.tsx
│       └── QuizEngine.tsx
├── lib/
│   ├── db.ts
│   ├── koel.ts
│   └── razorpay.ts
└── public/
    └── audio/
```

## Engineering Checklist

- **Zero network waste:** use `next/font`, `next/image`, immutable static asset caching, and sensible API caching where applicable. [nextjs](https://nextjs.org/docs)
- **Minimize bytes:** keep client bundles small, lazy-load heavy components, and remove bloated dependencies. [nextjs](https://nextjs.org/docs/app)
- **Prioritize first paint:** pre-render pages that can be static, avoid blocking scripts, and stream slow sections. [nextjs](https://nextjs.org/docs/app/guides)
- **Build for resilience:** use loading states, error boundaries, and forms that can still work through server-side handling. [nextjs](https://nextjs.org/docs/app/guides)

## Study Sequence

- **Day 1:** Build one lesson page in plain HTML/CSS and inspect the DOM and network requests.
- **Day 2:** Rebuild it in React and understand what moves into the browser runtime.
- **Day 3:** Convert it to Next.js App Router and compare route structure and rendering behavior. [nextjs](https://nextjs.org/docs/app)
- **Day 4:** Add Server Component data fetching from Postgres. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- **Day 5:** Move only the quiz and interaction layer into Client Components. [nextjs](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- **Day 6:** Optimize with `next/image`, `next/font`, and bundle analysis. [nextjs](https://nextjs.org/docs)
- **Day 7:** Deploy and test under throttled network conditions using Lighthouse and real-device inspection. [nextjs](https://nextjs.org/docs)
