## AEON - Frontend Developer Test

### Introduction

This document serves as a comprehensive setup guide to help you get started with the developer assignment application built with **Next.Js**. It will walk you through the installation process and provide tips on how to make the most of the application.

### Installation

- Clone the Github repository
- Navigate to Project directory
- Install dependencies by running `npm install`

### Run the application locally

- To run the application locally run the command `npm run dev`
- Launch `http://localhost:3000`

### Instructions of functionality

This assignment contains of three different implementations and following are the sections,

- Calculator
- Navigation bar
- Two Sum function

#### Calculator

- Run the application locally, you can see the link to **Challenge 1: Calculator** 
- The main functionality is to accept two numbers; the calculator will add them and provide the total as the result.
- This implementation is type-safe, so the input fields will only accept numbers.
Note: This interface is not responsive on smaller devices.

#### Navigation bar

- When you run the application locally, the landing page will display the implemented menu.
- The search input is static and non-functional (as per the given requirements).
- The navigation bar is responsive and works well on mobile devices.
- You will see a hamburger button and a close button to toggle the main menu.
- On mobile you can click on the search icon to reveal the search input field.

#### Two Sum function

- This implementation does not have a visible interface.
- This function is designed to solve a specific problem or algorithm.
- You can see the link to **Challenge 3: Two Sum Sorted Array**  Since this is a server-side function, you will need to check the console of the server running the application, not the browser’s developer tools console.
- Given the assumptions in the requirements:
- The array of integers is sorted in ascending order.
- The array of numbers and the target number are guaranteed to have exactly one pair of numbers that add up to the target. There will be no test cases with multiple pairs that add up to the target, nor any cases with no pairs that add up to the target.
