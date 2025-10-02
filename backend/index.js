const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for Wix domain
app.use(cors({
  origin: [
    'https://nehaldesign07.wixsite.com', // Wix published domain
    'http://localhost:3000', // For local testing
    'https://editor.wix.com' // Wix Editor
  ]
}));

app.use(bodyParser.json());

// In-memory mentor data (replace with DB later)
const mentors = [
  {
    id: 1,
    name: 'Aarushi Sharma',
    role: 'Engineering Manager',
    expertise: ['leadership', 'tech', 'communication'],
    location: 'Bangalore',
    lat: 12.9716,
    lng: 77.5946,
    bio: '10+ years in tech, passionate about women in leadership.'
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Product Lead',
    expertise: ['product', 'negotiation', 'decision-making'],
    location: 'Mumbai',
    lat: 19.0760,
    lng: 72.8777,
    bio: 'Product management expert and mentor.'
  },
  {
    id: 3,
    name: 'Neha Verma',
    role: 'Data Scientist',
    expertise: ['data', 'ai', 'leadership'],
    location: 'Delhi',
    lat: 28.6139,
    lng: 77.2090,
    bio: 'Data science leader and advocate for diversity.'
  }
];

// GET /api/mentors - List all mentors
app.get('/api/mentors', (req, res) => {
  res.json(mentors);
});

// POST /api/match - Mentor matchmaking with scoring
app.post('/api/match', (req, res) => {
  const { interests, location } = req.body;
  if (!interests || !Array.isArray(interests)) {
    return res.status(400).json({ error: 'Missing or invalid interests array.' });
  }

  // Calculate match score for each mentor
  const scoredMentors = mentors.map(mentor => {
    let score = 0;
    
    // Score based on expertise match (10 points per match)
    const expertiseMatches = mentor.expertise.filter(e => interests.includes(e)).length;
    score += expertiseMatches * 10;
    
    // Score based on location match (20 points)
    if (location && mentor.location.toLowerCase() === location.toLowerCase()) {
      score += 20;
    }
    
    return {
      ...mentor,
      matchScore: score
    };
  });

  // Filter mentors with score > 0 and sort by score (highest first)
  const matches = scoredMentors
    .filter(m => m.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore);
  
  res.json(matches);
});

// (Optional) POST /api/contact - Handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // For MVP: just log, in prod send email or store in DB
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing name, email, or message.' });
  }
  console.log('Contact form submitted:', { name, email, message });
  res.json({ success: true });
});

app.get('/', (req, res) => {
  res.send('SheLeads Backend API is running.');
});

app.listen(PORT, () => {
  console.log(`SheLeads Backend API listening on port ${PORT}`);
});
