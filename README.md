# 📦 Dropbox Clone

A modern, high-performance Dropbox clone built with **Next.js 14**, **Firebase**, **Clerk**, and **Shadcn/UI**. This application allows users to upload, manage, rename, and delete files securely.

## 🚀 Features

- 🔐 **Secure Authentication**: Managed by [Clerk](https://clerk.com/) (Email, Google, etc.).
- 📁 **File Management**: Upload files of various types to Firebase Storage.
- 📂 **Cloud Firestore**: Real-time file metadata synchronization.
- ✏️ **Rename & Delete**: Easily manage your files with intuitive UI modals.
- 🌓 **Dark Mode**: Seamless theme switching using `next-themes`.
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- ⚡ **Type Safe**: Built with TypeScript for a robust developer experience.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database & Storage**: [Firebase (Firestore & Storage)](https://firebase.google.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/drop-box-clone.git
cd drop-box-clone
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and copy the contents from `.env.example`:

```bash
cp .env.example .env.local
```

Fill in your **Clerk** and **Firebase** credentials.

### 4. Configure Firebase

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** and **Storage**.
3. Set up **Storage Rules** to allow authenticated access (or public for testing).
4. Get your web app configuration and paste it into `.env.local`.

### 5. Configure Clerk

1. Create a new application at [Clerk Dashboard](https://dashboard.clerk.com/).
2. Copy your **Publishable Key** and **Secret Key** to `.env.local`.

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is licensed under the MIT License.

---

Created with ❤️ by [HunterXNB](https://github.com/HunterXNB)
