/\*\*

- SWR Usage Examples
-
- SWR (Stale-While-Revalidate) provides automatic background refresh,
- caching, and request deduplication out of the box.
  \*/

import { useFetch, useMutate } from '@/hooks/useFetch';

// ============================================
// 1. BASIC DATA FETCHING (Default Config)
// ============================================
function UserProfile() {
const { data, isLoading, error } = useFetch('/api/user');

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error loading user</div>;

return <div>Welcome, {data?.name}</div>;
}

// ============================================
// 2. REAL-TIME DATA (Fast Background Refresh)
// ============================================
function LiveNotifications() {
// Refreshes every 5 seconds
const { data: notifications } = useFetch(
'/api/notifications',
{ mode: 'realtime' }
);

return (
<div>
{notifications?.map((notif) => (
<p key={notif.id}>{notif.message}</p>
))}
</div>
);
}

// ============================================
// 3. STATIC DATA (No Auto Refresh)
// ============================================
function StaticContent() {
// No automatic refresh, perfect for static pages
const { data: content } = useFetch(
'/api/static/about',
{ mode: 'static' }
);

return <article>{content?.body}</article>;
}

// ============================================
// 4. CONDITIONAL FETCHING
// ============================================
function UserDetails({ userId }: { userId: string | null }) {
// Only fetch when userId exists
const { data: user } = useFetch(userId ? `/api/users/${userId}` : null);

if (!userId) return <p>Select a user</p>;
return <div>{user?.email}</div>;
}

// ============================================
// 5. CUSTOM CONFIG OVERRIDE
// ============================================
function DashboardStats() {
const { data, isLoading, mutate } = useFetch(
'/api/stats',
{
mode: 'default',
refreshInterval: 30000, // Override: refresh every 30 seconds
revalidateOnFocus: false, // Disable focus revalidation
}
);

const handleRefresh = () => mutate(); // Manual refresh

return (
<div>
{isLoading && <span>Updating...</span>}
<p>Stats: {data?.value}</p>
<button onClick={handleRefresh}>Refresh Now</button>
</div>
);
}

// ============================================
// 6. MUTATION (POST/PUT/DELETE)
// ============================================
function UpdateProfile() {
const { mutate } = useMutate('/api/user');

const handleUpdate = async () => {
try {
await mutate({ name: 'New Name', email: 'new@email.com' });
alert('Profile updated!');
} catch (error) {
alert('Update failed');
}
};

return <button onClick={handleUpdate}>Update Profile</button>;
}

// ============================================
// 7. MULTIPLE REQUESTS (Request Deduplication)
// ============================================
function MultipleQueries() {
// If called simultaneously, SWR deduplicates requests
const { data: user } = useFetch('/api/user');
const { data: settings } = useFetch('/api/user/settings');
const { data: preferences } = useFetch('/api/user/preferences');

return (
<div>
<h3>{user?.name}</h3>
<p>Theme: {settings?.theme}</p>
<p>Language: {preferences?.language}</p>
</div>
);
}

// ============================================
// KEY FEATURES
// ============================================
/\*\*

- ✅ Background Refresh - Data refreshes automatically in the background
- ✅ Cache Management - Smart caching with stale-while-revalidate pattern
- ✅ Request Deduplication - Multiple requests to same URL are merged
- ✅ Error Handling - Built-in retry logic (3 retries, 5s interval)
- ✅ Focus Revalidation - Data refreshes when window regains focus
- ✅ Offline Support - Shows stale data if offline
- ✅ Type Safe - Full TypeScript support
- ✅ Minimal Bundle - ~2kb gzipped
  \*/
