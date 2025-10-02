# SheLeads - Empowering the Next Generation of Women Leaders
## Hackathon Proposal

---

## 🎯 Pitch Line
"SheLeads" isn't just a platform — it's a movement. We bridge gaps in opportunity, amplify voices, and prepare women to lead the future.

---

## 📋 Problem Statement
Despite progress, women remain underrepresented in leadership roles across industries. A lack of mentorship, limited access to networks, and skill gaps contribute to this disparity.

---

## 💡 Our Solution
A digital platform that combines **mentorship**, **networking**, and **skill-building** to support women aiming for leadership positions.

---

## ✨ Core Features Implemented

### 1. Mentorship Matchmaking Engine ✅
- **AI-powered matching algorithm** that scores mentors based on:
  - Expertise alignment (10 points per matching skill)
  - Location proximity (20 points for same location)
- Filters by industry, goals, and experience
- Returns ranked mentor recommendations

### 2. Mentor Discovery & Profiles ✅
- Browse mentor profiles with expertise, location, and bio
- Filter by interests (Tech, Leadership, Product, etc.)
- Filter by location (Bangalore, Mumbai, Delhi, Remote)
- Click to view detailed mentor profiles

### 3. User-Friendly Interface ✅
- Beautiful, intuitive design built with Wix
- Responsive layout for web and mobile
- Seamless navigation between pages

### 4. Backend API ✅
- **RESTful API** built with Node.js and Express
- **CORS-enabled** for cross-origin requests
- **Production-ready** with error handling and validation

#### API Endpoints:

**1. GET /api/mentors**
- **Purpose**: Retrieve all available mentors
- **Response**: Array of mentor objects with name, role, expertise, location, bio
- **Use Case**: Display mentor directory and profiles

**2. POST /api/match** ⭐
- **Purpose**: AI-powered mentor matching with scoring algorithm
- **Input**: `{ interests: ["tech", "leadership"], location: "Bangalore" }`
- **Output**: Ranked mentors with match scores
- **Scoring Algorithm**:
  - +10 points per matching expertise area
  - +20 points for same location
  - Mentors filtered by score > 0, sorted by relevance
- **Use Case**: Smart mentor recommendations

**3. POST /api/contact**
- **Purpose**: Handle contact form submissions
- **Input**: `{ name, email, message }`
- **Features**: Input validation and error handling
- **Use Case**: User inquiries and career applications

#### Technical Implementation:
- **Middleware**: Express.js for routing and middleware
- **Error Handling**: Comprehensive try-catch blocks
- **Data Validation**: Required field validation
- **Response Format**: JSON with consistent structure
- **Scalability**: Stateless design ready for horizontal scaling
- **Database Integration**: Structured for MongoDB/PostgreSQL migration

---

## 🏗️ Architecture

### Frontend ✅
- **Technology**: Wix (with Velo for custom logic)
- **Status**: **LIVE** and connected to backend
- **Live Website**: https://nehaldesign07.wixsite.com/sheleadstogether
- **Features**: 
  - Home page with mentor discovery
  - Mentor profile pages
  - Filter and search functionality
  - **Backend Integration**: Connected to Node.js API for mentor data

### Backend ✅
- **Technology**: Node.js + Express
- **Architecture**: RESTful API with JSON responses
- **Status**: **DEPLOYED** on Render
- **Live URL**: https://sheleads-backend.onrender.com
- **Features**:
  - **Mentor Listing**: `/api/mentors` - Returns all mentors with full profiles
  - **AI Matching**: `/api/match` - Intelligent mentor recommendations with scoring
  - **Contact Handling**: `/api/contact` - Form submission processing
- **Security**: CORS configuration for cross-origin requests
- **Error Handling**: Comprehensive error responses with status codes
- **Validation**: Input validation for all API endpoints
- **Deployment**: ✅ **Deployed on Render** (cloud hosting)
- **Scalability**: Stateless design supporting horizontal scaling
- **Monitoring**: Console logging for debugging and monitoring

#### API Test Links:
- **Mentor Listing**: https://sheleads-backend.onrender.com/api/mentors
- **Mentor Matching**: POST https://sheleads-backend.onrender.com/api/match
- **Contact Form**: POST https://sheleads-backend.onrender.com/api/contact

#### API Response Examples:

**Mentor Listing Response:**
```json
[
  {
    "id": 1,
    "name": "Aarushi Sharma",
    "role": "Engineering Manager",
    "expertise": ["leadership", "tech", "communication"],
    "location": "Bangalore",
    "bio": "10+ years in tech, passionate about women in leadership."
  }
]
```

**Matching Response:**
```json
[
  {
    "id": 1,
    "name": "Aarushi Sharma",
    "role": "Engineering Manager",
    "expertise": ["leadership", "tech", "communication"],
    "location": "Bangalore",
    "matchScore": 40
  }
]
```

### Database
- **Current**: Wix Data Collections (for MVP)
- **Planned**: MongoDB Atlas or PostgreSQL
- **Data Models**: 
  - Mentors (name, role, expertise, location, bio)
  - Users (for authentication)
  - Mentorship relationships

---

## 🚀 Live Demo & API Testing

### 🌐 Live Website
**Frontend (Wix)**: https://nehaldesign07.wixsite.com/sheleadstogether
- **Status**: ✅ **LIVE** and fully functional
- **Features**: Mentor discovery, profiles, and filtering
- **Backend Integration**: Connected to Node.js API

### 🔌 Backend API
**API Server**: https://sheleads-backend.onrender.com
- **Status**: ✅ **DEPLOYED** and operational
- **Architecture**: RESTful API with JSON responses
- **CORS**: Enabled for cross-origin requests

### 📡 API Endpoints (Testable)

#### 1. Mentor Listing API
**URL**: https://sheleads-backend.onrender.com/api/mentors
**Method**: GET
**Purpose**: Retrieve all available mentors
**Test**: Click the link or use Postman

#### 2. Mentor Matching API
**URL**: https://sheleads-backend.onrender.com/api/match
**Method**: POST
**Purpose**: AI-powered mentor matching with scoring
**Request Body**:
```json
{
  "interests": ["tech", "leadership"],
  "location": "Bangalore"
}
```
**Test**: Use Postman or curl command

#### 3. Contact Form API
**URL**: https://sheleads-backend.onrender.com/api/contact
**Method**: POST
**Purpose**: Handle contact form submissions
**Request Body**:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I'm interested in mentorship"
}
```
**Test**: Use Postman or curl command

### 🧪 Quick Test Commands
```bash
# Test mentor listing
curl https://sheleads-backend.onrender.com/api/mentors

# Test mentor matching
curl -X POST https://sheleads-backend.onrender.com/api/match \
  -H "Content-Type: application/json" \
  -d '{"interests": ["tech"], "location": "Bangalore"}'

# Test contact form
curl -X POST https://sheleads-backend.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "email": "test@example.com", "message": "Hello"}'
```

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | Wix + Velo (JavaScript), React.js (Planned)|
| **Backend** | Node.js + Express |
| **Database** | Wix Data Collections (MVP), MongoDB Atlas (Production) |
| **Authentication** | Wix Users (MVP), OAuth2 (Planned) |
| **Deployment** | Wix (Frontend), Render/AWS (Backend) |
| **AI/ML** | Custom matching algorithm (scoring-based) |

---

## 📊 Current Status

### ✅ Completed
- [x] Frontend UI design and implementation
- [x] Wix database setup with Mentors collection
- [x] Backend API with mentor matching algorithm
- [x] **Backend deployment on Render** ✅
- [x] **Frontend-backend integration** ✅
- [x] Mentor discovery and filtering
- [x] Mentor profile pages
- [x] Matching score algorithm
- [x] **Live website deployment** ✅
- [x] **API endpoints operational** ✅

### 🚧 In Progress
- [ ] User authentication and registration
- [ ] Skill tracker and learning hub
- [ ] Networking pods and events
- [ ] Anonymous support forum

### 📅 Planned for Future
- [ ] Mobile app (Flutter)
- [ ] Advanced AI/ML matching with NLP
- [ ] Email notifications
- [ ] Achievement showcase
- [ ] Integration with external learning platforms

---

## 🎨 Design Highlights
- Clean, modern interface
- Intuitive navigation
- Empowering color scheme
- Mobile-responsive design

---

## 🚀 Deployment Plan

### MVP (Current)
- **Frontend**: Live on Wix (https://nehaldesign07.wixsite.com/sheleadstogether)
- **Backend**: Local development (ready for deployment)
- **Database**: Wix Data Collections

### Production (Next Steps)
1. Deploy backend to Render or AWS EC2
2. Migrate to MongoDB Atlas for scalability
3. Implement OAuth2 authentication
4. Add email notifications
5. Integrate advanced AI/ML features

---

## 👥 Team
- **Designer**: UI/UX design and Wix frontend
- **Backend Developer**: Node.js API and matching algorithm
- **Database**: Wix Data Collections setup

---

## 📈 Impact
SheLeads aims to:
- Connect **1000+ women** with mentors in the first year
- Reduce the leadership gap by providing accessible mentorship
- Create a supportive community for women in tech and beyond

---

## 🔗 Links
- **Live Demo**: https://nehaldesign07.wixsite.com/sheleadstogether
- **GitHub Repository**: [Add your repo link]
- **Presentation**: [Add your presentation link]

---

## 📝 Next Steps
1. Complete user authentication
2. Add skill tracker and learning hub
3. Implement networking pods
4. Deploy backend to production
5. Launch beta with 50 users

---

**SheLeads - Empowering Women to Lead the Future** 🚀
