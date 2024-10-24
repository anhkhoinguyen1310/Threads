<div align="center">
  <img src="https://private-user-images.githubusercontent.com/151519281/293174555-a9cd1088-968b-4b1d-b21a-f5f97d0c202b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjk4MDkzMzcsIm5iZiI6MTcyOTgwOTAzNywicGF0aCI6Ii8xNTE1MTkyODEvMjkzMTc0NTU1LWE5Y2QxMDg4LTk2OGItNGIxZC1iMjFhLWY1Zjk3ZDBjMjAyYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAyNFQyMjMwMzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kOTUzYjUwMzU4MzgzNzMxNTlhNzZkMDQ2NTg0ZGE2MGE4MjdmNTM1ZGNhNGYwYjM4MGZjN2M1NDEwMWQ2YWE3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.TdvTvbbq3Lv0JYDK6sXbABzeRWNj7JSitpQ115pxjlM" alt="Threads App Screenshot" width="600"/>
  <h3 align="center">BetterThread: A Thread But Just Better</h3>
</div>

## 📋 Table of Contents

1. ⚙️ [Tech Stack](#tech-stack)
2. 🔋 [Features](#features)
3. 🤸 [Quick Start](#quick-start)
4. 🤖 [Sneak Pics](#sneak-peak)
5. 🚀 [Production](#production)

## <a name="tech-stack"> ⚙️ Tech Stack</a>
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

## <a name="features"> 🔋 Features</a>

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

## <a name="quick-start"> 🤸 Quick Start</a> 

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

## <a name="sneak-peak"> 🤖 Sneak Pics</a> 

<div style="display: flex; overflow-x: auto;">
  <img src="https://github.com/anhkhoinguyen1310/Threads/blob/main/threadPic/profilePhone.png?raw=true" alt="Profile Page" width="300" style="margin-right: 10px;">
  <img src="https://github.com/anhkhoinguyen1310/Threads/blob/main/threadPic/communityPhone.png?raw=true" alt="Community Page" width="300" style="margin-right: 10px;">
  <img src="https://github.com/anhkhoinguyen1310/Threads/blob/main/threadPic/responsive.png?raw=true" alt="Responsive Design" width="300" style="margin-right: 10px;">
  <img src="https://github.com/anhkhoinguyen1310/Threads/blob/main/threadPic/searchPhone.png?raw=true" alt="Search Page" width="300" style="margin-right: 10px;">
</div>

## <a name="production"> 🚀 Production </a>  

Check it Out: [Live Production](https://betterthreads.vercel.app/)

