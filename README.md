<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exelup</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f5f5;
    }

    /* Navbar */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 40px;
      background: white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }

    .logo {
      font-weight: bold;
      font-size: 20px;
      color: #007cc3;
    }

    .nav-links a {
      margin: 0 12px;
      text-decoration: none;
      color: #333;
      font-size: 14px;
    }

    /* Hero */
    .hero {
      height: 80vh;
      background: linear-gradient(120deg, #0a1f44, #007cc3);
      color: white;
      display: flex;
      align-items: center;
      padding: 60px;
    }

    .hero h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }

    .hero p {
      font-size: 18px;
      max-width: 500px;
    }

    .hero button {
      margin-top: 20px;
      padding: 12px 24px;
      border: none;
      background: white;
      color: #007cc3;
      font-weight: bold;
      cursor: pointer;
      border-radius: 4px;
    }

    /* Cards */
    .section {
      padding: 60px 40px;
      background: white;
    }

    .section h2 {
      text-align: center;
      margin-bottom: 40px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .card {
      background: #fafafa;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h3 {
      margin-bottom: 10px;
    }

    /* Footer */
    .footer {
      background: #0a1f44;
      color: white;
      padding: 40px;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="navbar">
    <div class="logo">EXELUP</div>
    <div class="nav-links">
      <a href="#">Services</a>
      <a href="#">Industries</a>
      <a href="#">Insights</a>
      <a href="#">Careers</a>
    </div>
  </div>

  <div class="hero">
    <div>
      <h1>Navigate Your Next</h1>
      <p>Helping businesses transform with digital innovation, cloud, and AI technologies.</p>
      <button>Explore More</button>
    </div>
  </div>

  <div class="section">
    <h2>Our Services</h2>
    <div class="cards">
      <div class="card">
        <h3>Cloud</h3>
        <p>Accelerate your cloud journey with scalable solutions.</p>
      </div>
      <div class="card">
        <h3>AI & Automation</h3>
        <p>Drive efficiency using AI-powered transformation.</p>
      </div>
      <div class="card">
        <h3>Digital Experience</h3>
        <p>Enhance customer engagement across channels.</p>
      </div>
      <div class="card">
        <h3>Cybersecurity</h3>
        <p>Protect your enterprise with robust security systems.</p>
      </div>
    </div>
  </div>

  <div class="footer">
    <p>© 2026 Exelup. All rights reserved.</p>
  </div>

</body>
</html>
