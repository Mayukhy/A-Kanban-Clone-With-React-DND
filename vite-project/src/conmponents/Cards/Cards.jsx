import React, { useState } from 'react'
import './style.scss'
import { v4 } from "uuid";
import _ from "lodash";
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Todos from './Todos';
import { Stack } from '@mui/material';
export default function Cards() {
  const item = {
    img1: '/IMGs/Cardsimages/Ellipse 15.png',
    img2: '/IMGs/Cardsimages/Ellipse 12.png',
    img3: '/IMGs/Cardsimages/Ellipse 13.png',
    banner: '',
    banner2: '',
    id: v4(),
    file: <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3334 7.33333V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66666C1.00008 1.99999 1.66674 1.33333 4.33341 1.33333H5.33341C6.33341 1.33333 6.55341 1.62666 6.93341 2.13333L7.93341 3.46666C8.18674 3.79999 8.33341 3.99999 9.00008 3.99999H11.0001C13.6667 3.99999 14.3334 4.66666 14.3334 7.33333Z" stroke="#787486" stroke-miterlimit="10" />
      <path d="M5.33333 1.33333H11.3333C12.6667 1.33333 13.3333 1.99999 13.3333 3.33333V4.25333" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    </>,
    description: "Brainstorming brings team members' diverse experience into play.",
    fileno: 0,
    msgicon: <>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z" fill="#787486" />
        <path d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z" fill="#787486" />
        <path d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z" fill="#787486" />
        <path d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z" fill="#787486" />
      </svg></>,
    state: 'Low',
    name: "Brainstorming",
    commentsno: 12
  }
  const item2 = {
    img1: '',
    img2: '/IMGs/Cardsimages/Ellipse 12 (1).png',
    img3: '/IMGs/Cardsimages/Ellipse 13 (1).png',
    banner: '',
    banner2: '',
    id: v4(),
    file: <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3334 7.33333V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66666C1.00008 1.99999 1.66674 1.33333 4.33341 1.33333H5.33341C6.33341 1.33333 6.55341 1.62666 6.93341 2.13333L7.93341 3.46666C8.18674 3.79999 8.33341 3.99999 9.00008 3.99999H11.0001C13.6667 3.99999 14.3334 4.66666 14.3334 7.33333Z" stroke="#787486" stroke-miterlimit="10" />
      <path d="M5.33333 1.33333H11.3333C12.6667 1.33333 13.3333 1.99999 13.3333 3.33333V4.25333" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    </>,
    fileno: 3,
    description: 'User research helps you to create an optimal product for users.',
    msgicon: <>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z" fill="#787486" />
        <path d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z" fill="#787486" />
        <path d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z" fill="#787486" />
        <path d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z" fill="#787486" />
      </svg></>,
    state: 'High',
    commentsno: 10,
    name: "Research"
  }
  const item3 = {
    img1: '/IMGs/Cardsimages/Ellipse 15.png',
    img2: '/IMGs/Cardsimages/Ellipse 12.png',
    img3: '/IMGs/Cardsimages/Ellipse 13.png',
    banner: '',
    banner2: '',
    id: v4(),
    file: <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3334 7.33333V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66666C1.00008 1.99999 1.66674 1.33333 4.33341 1.33333H5.33341C6.33341 1.33333 6.55341 1.62666 6.93341 2.13333L7.93341 3.46666C8.18674 3.79999 8.33341 3.99999 9.00008 3.99999H11.0001C13.6667 3.99999 14.3334 4.66666 14.3334 7.33333Z" stroke="#787486" stroke-miterlimit="10" />
      <path d="M5.33333 1.33333H11.3333C12.6667 1.33333 13.3333 1.99999 13.3333 3.33333V4.25333" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    </>,
    fileno: 5,
    description: 'Low fidelity wireframes include the most basic content and visuals.',
    msgicon: <>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z" fill="#787486" />
        <path d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z" fill="#787486" />
        <path d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z" fill="#787486" />
        <path d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z" fill="#787486" />
      </svg></>,
    commentsno: 7,
    state: 'High',
    name: "WireFrames"
  }
  const item4 = {
    img1: '/IMGs/Cardsimages/Ellipse 12.png',
    img2: '/IMGs/Cardsimages/Ellipse 15.png',
    img3: '/IMGs/Cardsimages/Ellipse 13.png',
    banner: '/IMGs/Cardsimages/unsplash_MicqqGyDQ6w.png',
    banner2: '',
    id: v4(),
    state: 'Low',
    file: <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3334 7.33333V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66666C1.00008 1.99999 1.66674 1.33333 4.33341 1.33333H5.33341C6.33341 1.33333 6.55341 1.62666 6.93341 2.13333L7.93341 3.46666C8.18674 3.79999 8.33341 3.99999 9.00008 3.99999H11.0001C13.6667 3.99999 14.3334 4.66666 14.3334 7.33333Z" stroke="#787486" stroke-miterlimit="10" />
      <path d="M5.33333 1.33333H11.3333C12.6667 1.33333 13.3333 1.99999 13.3333 3.33333V4.25333" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    </>,
    fileno: 15,
    msgicon: <>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z" fill="#787486" />
        <path d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z" fill="#787486" />
        <path d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z" fill="#787486" />
        <path d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z" fill="#787486" />
      </svg></>,
    commentsno: 14,
    name: "Onboarding IIIustration"
  }

  const item5 = {
    id: v4(),
    img1: '',
    img2: '/IMGs/Cardsimages/Ellipse 15.png',
    img3: '',
    name: "Moodboard",
    state: 'Low',
    banner: 'IMGs/Cardsimages/unsplash_BS_1XGRkIH4.png',
    banner2: 'IMGs/Cardsimages/unsplash_KIqJfzbII9w.png',
    file: <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3334 7.33333V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66666C1.00008 1.99999 1.66674 1.33333 4.33341 1.33333H5.33341C6.33341 1.33333 6.55341 1.62666 6.93341 2.13333L7.93341 3.46666C8.18674 3.79999 8.33341 3.99999 9.00008 3.99999H11.0001C13.6667 3.99999 14.3334 4.66666 14.3334 7.33333Z" stroke="#787486" stroke-miterlimit="10" />
      <path d="M5.33333 1.33333H11.3333C12.6667 1.33333 13.3333 1.99999 13.3333 3.33333V4.25333" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    </>,
    fileno: 10,
    msgicon: <>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z" fill="#787486" />
        <path d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z" fill="#787486" />
        <path d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z" fill="#787486" />
        <path d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z" fill="#787486" />
      </svg></>,
    commentsno: 9,
  }
  const item6 = {
    id: v4(),
    name: "Mobile App Design",
    state: 'Completed',
    img1: '/IMGs/Cardsimages/Ellipse 13.png',
    img2: '/IMGs/Cardsimages/Ellipse 13 (1).png',
    img3: '',
    banner: 'IMGs/Cardsimages/Plant Care App (Dribbble shot) 1.png',
    banner2: '',
    file: <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3334 7.33333V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66666C1.00008 1.99999 1.66674 1.33333 4.33341 1.33333H5.33341C6.33341 1.33333 6.55341 1.62666 6.93341 2.13333L7.93341 3.46666C8.18674 3.79999 8.33341 3.99999 9.00008 3.99999H11.0001C13.6667 3.99999 14.3334 4.66666 14.3334 7.33333Z" stroke="#787486" stroke-miterlimit="10" />
      <path d="M5.33333 1.33333H11.3333C12.6667 1.33333 13.3333 1.99999 13.3333 3.33333V4.25333" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    </>,
    fileno: 15,
    msgicon: <>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z" fill="#787486" />
        <path d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z" fill="#787486" />
        <path d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z" fill="#787486" />
        <path d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z" fill="#787486" />
      </svg></>,
    commentsno: 12,
  }

  const item7 = {
    id: v4(),
    name: "Design System",
    state: 'Completed',
    img1: '/IMGs/Cardsimages/Ellipse 13.png',
    img2: '/IMGs/Cardsimages/Ellipse 12.png',
    img3: '/IMGs/Cardsimages/Ellipse 15.png',
    description: 'It just needs to adapt the UI from what you did before ',
    banner: '',
    banner2: '',
    file: <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3334 7.33333V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66666C1.00008 1.99999 1.66674 1.33333 4.33341 1.33333H5.33341C6.33341 1.33333 6.55341 1.62666 6.93341 2.13333L7.93341 3.46666C8.18674 3.79999 8.33341 3.99999 9.00008 3.99999H11.0001C13.6667 3.99999 14.3334 4.66666 14.3334 7.33333Z" stroke="#787486" stroke-miterlimit="10" />
      <path d="M5.33333 1.33333H11.3333C12.6667 1.33333 13.3333 1.99999 13.3333 3.33333V4.25333" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    </>,
    fileno: 15,
    msgicon: <>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z" fill="#787486" />
        <path d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z" fill="#787486" />
        <path d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z" fill="#787486" />
        <path d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z" fill="#787486" />
      </svg></>,
    commentsno: 12,
  }

  const [taskState, settaskState] = useState({
    "todo": {
      dot: <> <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">;
        <circle cx="4" cy="4" r="4" fill="#5030E5" />
      </svg></>,
      addicon: <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#5030E5" />
        <path d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z" fill="#5030E5" />
      </svg></>,
      title: "To Do",
      items: [item, item2, item3]
    },
    "in-progress": {
      dot: <><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#FFA500" />
      </svg></>,
      title: "On Progress",
      items: [item4, item5]
    },
    "done": {
      dot: <><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#76A5EA" />
      </svg></>,
      title: "Done",
      items: [item6, item7]
    }
  })

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    // Creating a copy of item before removing it from state
    const itemCopy = { ...taskState[source.droppableId].items[source.index] }
    console.log(itemCopy)
    settaskState(prev => {
      prev = { ...prev }
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1)


      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  return (

    <div className="cardcontainer">
      <DragDropContext onDragEnd={handleDragEnd} >
        {_.map(taskState, (task, idx) => {
          return (
            <div key={idx} className="cardstate">
              <div className="workcardcontainer">
                <div className="headnavigation">
                  <div className="header">
                    <div className="left">
                      <span className="dot">
                        {task.dot} </span>
                      <span className="todo">{task.title}</span>
                      <span className="no">{task.items.length}</span>
                    </div>
                    <div className="right">
                      {task.addicon}

                    </div>
                  </div>
                  <div className={task.title === 'To Do' ? "botttomborder" : task.title === 'On Progress' ? 'botttomborder1' : 'botttomborder2'}></div>
                </div>

                <div style={{
                  overflowY: 'scroll',
                  marginTop: '70px'
                }}>

                  <Droppable droppableId={idx}>
                    {(provided, snapshot) => (
                      <Stack style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',

                        margin: '5px auto',
                      }} ref={provided.innerRef}
                        {...provided.droppableProps}

                      >

                        {task.items.map((Taskcards, idx) => (
                          <div style={{

                            boxSizing: "border-box",
                            height: 'auto',
                            margin: '4px auto',
                            background: snapshot.isDraggingOver ? 'rgba(80, 48, 229, 0.06) ' : '#F5F5F5',
                            border: snapshot.isDraggingOver ? '1px dashed rgba(80, 48, 229, 0.59) ' : 'none',
                            borderRadius: snapshot.isDraggingOver ? '10px' : '0px'
                          }} key={idx}>
                            <Todos task={task} taskState={taskState} todos={Taskcards} idx={idx} />
                          </div>

                        ))}
                        {provided.placeholder}


                      </Stack>

                    )}

                  </Droppable>


                </div>
              </div>
            </div>
          )
        })}
      </DragDropContext>

    </div>

  )
}
