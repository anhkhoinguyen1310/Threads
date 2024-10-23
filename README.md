<div align="center">
  <h3 align="center">BetterThread: A Thread But Just Better</h3>
  <img src="/mnt/data/Screenshot%202024-10-23%20at%203.55.29%20PM.png" alt="Threads App Screenshot" width="600"/>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🚀 [Production](#Production)

## ⚙️ Tech Stack

- Next.js
- MongoDB
- Shadcn UI
- TailwindCSS
- Clerk
- Webhooks
- Serverless APIs
- React Hook Form
- Zod
- TypeScript

## 🔋 Features

- **Authentication**: Login with Clerk for email, Google, and GitHub.
- **Home Page**: Engaging display of latest threads.
- **Create Thread**: Dedicated page to post new threads.
- **Commenting**: Discuss threads with nested comments.
- **User Search**: Find users easily with pagination.
- **Activity Notifications**: Get notified about comments.
- **Profile Management**: Customize user profile settings.
- **Community Creation**: Make new communities, invite via email.
- **Admin Tools**: Create admin-only threads for communities.
- **Community Search**: Find and explore different communities.
- **Real-Time Updates**: Webhooks for event updates.
- **File Uploads**: Upload media with UploadThing.

## 🤸 Quick Start

**Cloning the Repository**

```bash
git clone https://github.com/anhkhoinguyen1310/Threads.git
cd threads
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
CLERK_WEBHOOK_SECRET
NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
MONGODB_URL
UPLOADTHING_TOKEN
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up for the corresponding websites on [MongoDB](https://www.mongodb.com/), [Clerk](https://clerk.com/), and [Uploadthing](https://uploadthing.com/).

**Running the Project**

```bash
npm run dev
```

## 🚀 Production

Check it Out: [Live Production](https://betterthreads.vercel.app/)

