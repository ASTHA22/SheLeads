# SheLeads Backend API

This is a Node.js (Express) backend for the SheLeads Mentor Match MVP. It provides REST API endpoints for mentor matchmaking and is designed to integrate with your Wix frontend.

## Features
- List all mentors (`GET /api/mentors`)
- Mentor matchmaking (`POST /api/match`)
- Contact form handler (`POST /api/contact`, optional)
- CORS enabled for Wix

## Quickstart

### 1. Install dependencies
```
npm install
```

### 2. Run locally
```
npm start
```

The API will run on [http://localhost:4000](http://localhost:4000) by default.

### 3. Deploy
- Deploy to Render, Heroku, AWS EC2, or any Node.js hosting platform.
- Ensure the deployed URL is accessible from your Wix site.

## API Endpoints

### `GET /api/mentors`
Returns a list of all mentors (for displaying mentor cards and map pins).

### `POST /api/match`
Request body example:
```json
{
  "interests": ["leadership", "tech"],
  "location": "Bangalore"
}
```
Returns a list of matching mentors.

### `POST /api/contact` (optional)
Request body example:
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message here"
}
```

## Wix Integration
- Use `fetch()` in your Wix site code to call these endpoints and display results.

## Next Steps
- Update mentor data or connect to MongoDB for persistence.
- Add authentication if needed.

---
Built for SheLeads Hackathon 2025 🚀
