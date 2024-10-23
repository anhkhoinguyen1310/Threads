<div align="center">
  <h3 align="center">BetterThread: A Thread But Just Better</h3>
  <img src="https://github.com/anhkhoinguyen1310/Threads/blob/main/threadPic/ProfilePage.png?raw=true" alt="Threads App Screenshot" width="600"/>
</div>

## 📋 Table of Contents

1. ⚙️ [Tech Stack](#tech-stack)
2. 🔋 [Features](#features)
3. 🤸 [Quick Start](#quick-start)
4. 🤖 [Sneak Pics](#sneak-peak)
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

## 🤖 [Sneak Pics]

<div style="display: flex; overflow-x: auto;">
  <img src="https://github.com/anhkhoinguyen1310/Threads/blob/main/threadPic/profilePhone.png?raw=true" alt="Profile Page" width="300" style="margin-right: 10px;">
  <img src="https://github.com/anhkhoinguyen1310/Threads/blob/main/threadPic/communityPhone.png?raw=true" alt="Community Page" width="300" style="margin-right: 10px;">
  <img src="https://github.com/anhkhoinguyen1310/Threads/blob/main/threadPic/responsive.png?raw=true" alt="Responsive Design" width="300" style="margin-right: 10px;">
  <img src="https://github.com/anhkhoinguyen1310/Threads/blob/main/threadPic/searchPhone.png?raw=true" alt="Search Page" width="300" style="margin-right: 10px;">
</div>

## 🚀 Production

Check it Out: [Live Production](https://betterthreads.vercel.app/)

