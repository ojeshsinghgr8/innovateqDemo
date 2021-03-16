# InnovateqProtoype

Its an single page application in Angular,Material Design and Sass. API is mocked using https://jsonplaceholder.typicode.com/.

## Project Structure

- AppModule
  - Shared Module
    - Header Component
    - Sidebar Component
  - Material Design Module
  - Home Module
    - Container
    - Models
      - Summary
      - Blog
    - Service
      - HomeService
    - Views
      - Header
      - blogs
      - Card for Show summary
  - User Management module
    - Container
    - Models
      - User
    - Service
      - UserService
    - Views
      - Header
      - CardView
      - ListView

## APIs

- blogs:http://my-json-server.typicode.com/ojeshsinghgr8/innovateqDemo/blogs
- users:http://my-json-server.typicode.com/ojeshsinghgr8/innovateqDemo/users
- Summary:http://my-json-server.typicode.com/ojeshsinghgr8/innovateqDemo/CardData

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
