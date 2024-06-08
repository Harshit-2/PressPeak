import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const firebaseConfig = {
  apiKey: "yourApiKey",
  authDomain: "yourAuthDomain",
  projectId: "yourProjectId",
  storageBucket: "yourStorageBucket",
  messagingSenderId: "yourmessagingSenderId",
  appId: "yourAppId",
  measurementId: "yourMeasurementId"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON data sent in the request body
app.use(express.json());

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about-us.html'));
});

app.get('/business.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'business.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.post('/contact', (req, res) => {
    const { name, phone, email, message } = req.body;
  
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Invalid phone number. Please enter a 10-digit phone number.' });
    }
  
    const contactData = { name, phone, email, message };
  
    const contactsRef = collection(db, 'contacts');
    addDoc(contactsRef, contactData)
     .then((docRef) => {
        res.json({ message: 'Contact data saved successfully!' });
      })
     .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Error saving contact data' });
      });
  });

app.get('/error-404.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'error-404.html'));
});

app.get('/footer.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'footer.html'));
});

app.get('/lifestyle.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'lifestyle.html'));
});

app.get('/nav.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'nav.html'));
});

app.get('/sports.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'ports.html'));
});

app.get('/team.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'team.html'));
});

app.get('/technology.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'technology.html'));
});

app.get('/under-construction.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'under-construction.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/post-format-audio.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-format-audio.html'));
});

app.get('/post-format-gallery.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-format-gallery.html'));
});

app.get('/post-format-quote.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-format-quote.html'));
});

app.get('/post-format-standard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-format-standard.html'));
});

app.get('/post-format-text-only.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-format-text-only.html'));
});

app.get('/post-format-video.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-format-video.html'));
});

app.get('/post-layout-five.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-layout-five.html'));
});

app.get('/post-layout-four.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-layout-four.html'));
});

app.get('/post-layout-three.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-layout-three.html'));
});

app.get('/post-layout-two.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-layout-two.html'));
});

app.get('/post-layout-one.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'post-layout-one.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});