# Medicare

Medicare is a comprehensive patient management system designed to streamline and optimize the administration of patient information, appointments, and medical records. It caters to healthcare providers looking for efficient ways to securely store their patients sensitive data and improve patient care.

![thumbnail](public/assets/images/medicare-thumbnail.png)

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Features

Medicare offers a wide range of features to enhance healthcare management:

- **Patient Records Storage**: Store comprehensive patient sensitive data.
- **Appointment Scheduling**: Efficiently schedule and manage patient appointments with data validation using Zod.
- **OTP for Admin Access**: Admins can use a One-Time Password (OTP) to access the admin dashboard.
- **SMS Notifications**: Users receive SMS notifications regarding appointment status powered by Twilio.
- **Error Monitoring**: Sentry is integrated to monitor and ensure the security of user data.

## Technology Stack

Medicare is built using the following technologies:

1. **NextJS:** A React framework for building server-side rendered applications.
2. **TypeScript:** A superset of JavaScript that fortifies code integrity through static typing.
3. **Appwrite:** A relational database for storing and managing application data.
4. **shadcn:** A UI component library for building a consistent and responsive user interface.
5. **Tailwind CSS:** A utility-first CSS framework for styling the application.
6. **Twilio:** A cloud communications platform that enables developers to build, scale, and operate real-time communications within their software applications.
7. **Sentry:** An open-source application monitoring and error tracking tool that helps developers identify, diagnose, and fix issues in real-time.
8. **Zod:** A TypeScript-first schema declaration and validation library

## Getting Started

#### Prerequisites

- Node.js installed: https://nodejs.org/en
- Appwrite account: https://appwrite.io/
- Twilio account: https://twilio.com/
- Sentry account: https://www.sentry.io/

#### Installation

1. Clone the repository: `git clone https://github.com/aleksanderpulla/medicare.git`
2. Navigate to the project directory: `cd medicare`
3. Install dependencies: `npm install`
4. Contact aleksanderpulla@gmail.com for a template of ".env" file, containing all the referenced environment variables of the application
5. Start the application: `npm run dev` or `yarn dev` or `pnpm dev`
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

Explore the functionalities of Medicare to make the most out of its functionalities:

1. Open Medicare in your web browser (https://medicare-eight.vercel.app/)
2. Create user.
3. Complete the required fields (data validation with Zod) for creating a successful appointment
4. Login as admin (OTP: 123456)
5. As an admin decide on scheduled appointments (schedule the pending ones or cancel those)
