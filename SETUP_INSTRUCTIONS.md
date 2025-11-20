# SafeMulator Role-Based Navigation Setup

## Overview
I've implemented a complete role-based navigation system with the following features:

1. **Middleware** - Validates authentication and redirects based on role
2. **Parallel Routes** - Uses Next.js parallel routes (@admin, @dean, @student) to render different UIs
3. **User Actions** - Comprehensive user management functions
4. **Dean Profile Update** - Limited to firstName, lastName, email, and image only
5. **Webhook Handler** - Automatically creates users when they sign up via Clerk

## Setup Steps

### 1. Generate Prisma Client
Run this command to generate the Prisma client with your updated schema:
```bash
npx prisma generate
```

### 2. Push Schema to Database (if needed)
If you haven't already migrated your database:
```bash
npx prisma db push
```

### 3. Configure Clerk Webhook
In your Clerk Dashboard:
1. Go to Webhooks
2. Add endpoint: `https://your-domain.com/api/webhooks/clerk`
3. Subscribe to `user.created` event
4. Copy the signing secret
5. Add to `.env`:
```env
WEBHOOK_SECRET=your_webhook_secret_here
JWT_SECRET=your_jwt_secret_here
```

### 4. Set User Roles in Clerk
When creating users in Clerk, set their role in public metadata:
```json
{
  "role": "DEAN",
  "department": "Computer Science"
}
```

Valid roles: `ADMIN`, `STAFF`, `DEAN`, `STUDENT`

## How It Works

### Role-Based Routing
The `(root)/layout.tsx` checks the user's role from the database and renders the appropriate parallel route:

- **ADMIN** → `@admin` slot (full admin features)
- **DEAN** → `@dean` slot (dean dashboard with limited profile editing)
- **STAFF** → `@dean` slot (same as dean for now)
- **STUDENT** → `@student` slot (student interface)

### Dean Profile Restrictions
Deans can only update these fields:
- First Name
- Last Name
- Email
- Profile Image

They **cannot** update:
- Username
- Role
- Department
- Active status

Access the dean settings page at: `/settings`

### Middleware Protection
The middleware (`middleware.ts`) handles:
- Redirects unauthenticated users to sign-in
- Allows public routes (landing page, sign-in, sign-up)
- Redirects users without roles to onboarding
- Protects all authenticated routes

## File Structure

```
app/
├── (root)/
│   ├── layout.tsx              # Main layout with role-based routing
│   ├── page.tsx                # Landing page
│   ├── @admin/
│   │   ├── layout.tsx          # Admin layout
│   │   ├── default.tsx         # Default fallback
│   │   └── dashboard/
│   │       └── page.tsx        # Admin dashboard
│   ├── @dean/
│   │   ├── layout.tsx          # Dean layout with sidebar
│   │   ├── default.tsx         # Default fallback
│   │   ├── dashboard/
│   │   ├── users/
│   │   ├── analytics/
│   │   ├── drillLogs/
│   │   └── settings/
│   │       └── page.tsx        # Dean profile settings
│   └── @student/
│       ├── layout.tsx          # Student layout
│       ├── default.tsx         # Default fallback
│       └── page.tsx            # Student dashboard
├── api/
│   └── webhooks/
│       └── clerk/
│           └── route.ts        # Clerk webhook handler
└── (auth)/
    └── onboarding/
        └── page.tsx            # Onboarding page

lib/
└── actions/
    └── user.actions.ts         # All user management functions

components/
└── forms/
    └── DeanProfileForm.tsx     # Dean-specific profile form

middleware.ts                   # Authentication & role validation
```

## Key Functions

### User Actions (`lib/actions/user.actions.ts`)

- `fetchUser(clerkId)` - Get user with all relations
- `createUser(params)` - Create user with role-specific record
- `updateDeanProfile(params)` - Update dean profile (limited fields)
- `updateUser(params)` - Update any user (admin only)
- `toggleUserStatus(clerkId)` - Activate/deactivate user
- `getAllUsers()` - Get all users
- `getUsersByRole(role)` - Get users by specific role

## Testing

1. **Create a Dean User**:
   - Sign up via Clerk
   - Set public metadata: `{ "role": "DEAN", "department": "Engineering" }`
   - User will be created automatically via webhook

2. **Test Dean Profile Update**:
   - Login as dean
   - Navigate to `/settings`
   - Update firstName, lastName, email, or image
   - Verify other fields are not editable

3. **Test Role-Based Navigation**:
   - Login with different roles
   - Verify correct dashboard is shown
   - Check that navigation is role-appropriate

## Troubleshooting

### "Module has no exported member 'UserRole'"
Run: `npx prisma generate`

### Users not being created
- Check webhook is configured in Clerk
- Verify WEBHOOK_SECRET in .env
- Check webhook logs in Clerk dashboard

### Wrong dashboard showing
- Verify user role in database
- Check that user record exists
- Ensure middleware is running

## Next Steps

1. Run `npx prisma generate` to fix TypeScript errors
2. Configure Clerk webhook
3. Test with different user roles
4. Customize each role's dashboard as needed
5. Add more role-specific features

## Notes

- The admin dashboard already has user management features
- Dean navigation is defined in `constants/deanNavigation.ts`
- Toast notifications are set up for user feedback
- All layouts include the Toaster component for notifications
