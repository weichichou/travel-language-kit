# :steam_locomotive: Travel Language Kit :ramen: 

## Introduction

This is my project for Hackathon. 
The APP is designed for travellers in foreign countries to communicate with the locals, especially when **ordering or buying food**. 

## Table of Contents

- **Demo**
- **[Main Functions](#main-functions)**
  - [Translating](#translating)
  - [Locating](#locating)
  - [Drawing](#drawing)
- **[Technologies Used](#technologies-used)**

## Main Functions

### Translating

- You can point to a food image, and get the translation in both text and speech formats.
- You can choose from several frequently used sentences. (Ordering, asking for price, paying by card / in cash, etc.)
- You can customize the sentences. For example, let the chef / shop owner know about your food allergy before ordering. 

### Locating

- You can get the current location (detected by GPS).
- You can choose a location from the map.
- The targeted language for translation will be changed instantly based on the location you've chosen.

### Drawing

- You can also describe to the locals what you'd like to buy by drawing a picture.

## Technologies Used

- Google Cloud Translation API
- Web Speech API
- Geolocation API

This project was scaffolded using the create-react-app cli. [See the standard create-react-app docs](./create-react-app-docs.md).
