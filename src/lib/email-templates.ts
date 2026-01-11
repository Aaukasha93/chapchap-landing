export const getWaitlistEmail = (name: string = 'VIP Member') => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to ChapChap Waitlist</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', Helvetica, Arial, sans-serif;
            background-color: #030014;
            margin: 0;
            padding: 0;
        }
        
        .email-wrapper {
            background-color: #030014;
            padding: 20px;
        }

        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #111029; /* Solid fallback for glass */
            border-radius: 16px;
            border: 1px solid #2a2a40;
            overflow: hidden;
        }
        
        /* Header without complex gradients/absolute positioning */
        .header {
            background-color: #7042f8; /* Fallback */
            background-image: linear-gradient(135deg, #1a0b40 0%, #030014 100%);
            padding: 30px 20px;
            text-align: center;
            border-bottom: 3px solid #00ffa3;
        }
        
        .logo {
            font-size: 32px;
            font-weight: 900;
            color: #ffffff;
            margin-bottom: 5px;
            letter-spacing: -1px;
        }
        
        .tagline {
            color: #00ffa3;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .content {
            padding: 30px 20px;
            color: #e0e0e0;
        }
        
        .greeting {
            color: #ffffff;
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 20px;
        }
        
        .message {
            font-size: 16px;
            line-height: 1.6;
            color: #c0c0c0;
            margin-bottom: 20px;
        }
        
        .highlight-box {
            background-color: #0a2e20; /* Dark green background */
            border-left: 4px solid #00ffa3;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
        }
        
        .highlight-box h3 {
            color: #00ffa3;
            font-size: 18px;
            margin: 0 0 10px 0;
        }
        
        .highlight-box p {
            color: #e0e0e0;
            font-size: 14px;
            margin: 0;
            line-height: 1.5;
        }
        
        /* Simplify benefits for email compatibility */
        .benefit-item {
            margin-bottom: 15px;
            padding: 15px;
            background-color: #1a1a2e;
            border-radius: 8px;
            border: 1px solid #2a2a40;
        }
        
        .benefit-title {
            color: #ffffff;
            font-weight: bold;
            display: block;
            margin-bottom: 4px;
        }
        
        .cta-button {
            display: inline-block;
            background-color: #7042f8;
            color: #ffffff !important;
            text-decoration: none;
            padding: 15px 35px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 16px;
            margin: 20px 0;
        }

        .footer {
            background-color: #000000;
            padding: 30px 20px;
            text-align: center;
        }
        
        .footer-text {
            color: #666666;
            font-size: 12px;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <div class="email-container">
            <!-- Header -->
            <div class="header">
                <div class="logo">ChapChap</div>
                <div class="tagline">Next-Gen Quick E-Commerce</div>
            </div>
            
            <!-- Content -->
            <div class="content">
                <h1 class="greeting">🎉 Hi ${name}, You're on the List!</h1>
                
                <p class="message">
                    Thank you for joining the <strong>ChapChap Waitlist</strong>. You've secured your spot to be among the first to experience lightning-fast delivery in Kano.
                </p>
                
                <!-- Highlight Box -->
                <div class="highlight-box">
                    <h3>🌟 VIP Status Confirmed</h3>
                    <p>
                        As an early supporter, you'll get exclusive access, special launch discounts, and priority service when we go live.
                    </p>
                </div>
                
                <!-- Benefits -->
                <div class="benefit-item">
                    <span class="benefit-title">⚡ Early Access</span>
                    Be the first to order when we launch.
                </div>
                
                <div class="benefit-item">
                    <span class="benefit-title">🎁 Exclusive Perks</span>
                    Special discounts reserved just for you.
                </div>
                
                <div class="benefit-item">
                    <span class="benefit-title">📦 10-Minute Delivery</span>
                    Get your orders delivered in record time.
                </div>
                
                <div style="height: 1px; background-color: #333; margin: 30px 0;"></div>
                
                <center>
                    <a href="https://chapchap.com.ng" class="cta-button">Visit Our Website</a>
                </center>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <p class="footer-text">
                    <strong>ChapChap</strong><br>
                    Built for Kano, Nigeria 🇳🇬
                </p>
                <p class="footer-text" style="opacity: 0.5;">
                    © 2026 ChapChap Quick E-Commerce Platform
                </p>
            </div>
        </div>
    </div>
</body>
</html>`;
