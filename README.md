# Deployed URL
https://ownus.vercel.app/

# Introduction

![image](https://github.com/dgd03146/ownus/assets/84106842/8191bcac-1a5c-40cc-84db-71a2b12a8c27)

I have built the Flower Shop website project, a state-of-the-art, fully responsive e-commerce platform built with Next.js 12 with Cloudinary for images and firebase as database.


# Built With

Built an application using Next.js and React, leveraging the latest version, Next.js 12. Implemented CSS styling using twin.macro, which enabled the use of both Tailwind CSS and styled-components.

# Getting Started

First, run the development server:

`npm run dev or yarn dev`

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.

API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.ts.

The pages/api directory is mapped to /api/\*. Files in this directory are treated as API routes instead of React pages.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details

# What I have considered

## **Server Side Rendering**
Server-side rendering (SSR) was implemented using React Query. During build time, data was pre-fetched and cached. Thus, when using React Query, the application utilizes already cached data, reducing unnecessary network calls and effectively optimizing the SSR process.

## **Twin.macro**

Feeling a bit uncomfortable with implementing code solely using Tailwind CSS, I used a CSS library called Twin.macro, which allows combining Tailwind with Styled Components. Using Twin.macro made it more convenient and easier to style components. After setting the overall structure with Tailwind, I implemented the detailed elements using Styled Components.
