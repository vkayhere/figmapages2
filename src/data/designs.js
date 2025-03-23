// Import design SVGs
import loginDesign from '../assets/designs/login-design.svg';
import signupDesign from '../assets/designs/signup-design.svg';
import forgotPasswordDesign from '../assets/designs/forgot-password-design.svg';
import resetPasswordDesign from '../assets/designs/reset-password-design.svg';
import otpDesign from '../assets/designs/otp-design.svg';
import profileDesign from '../assets/designs/profile-design.svg';
import notificationsDesign from '../assets/designs/notifications-design.svg';
import login2Design from '../assets/designs/login2-design.svg';

// Import SVG icons
import loginIcon from '../assets/svg/login-icon.svg';
import signupIcon from '../assets/svg/signup-icon.svg';
import forgotPasswordIcon from '../assets/svg/forgot-password-icon.svg';
import resetPasswordIcon from '../assets/svg/reset-password-icon.svg';
import otpIcon from '../assets/svg/otp-icon.svg';
import profileIcon from '../assets/svg/profile-icon.svg';
import notificationsIcon from '../assets/svg/notifications-icon.svg';
import login2Icon from '../assets/svg/login2-icon.svg';

// SVG content for the designs - these would be loaded from the actual files in production
const loginSvg = `<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="10" fill="#F5F5F5"/>
  <rect x="150" y="120" width="300" height="60" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="160" font-family="Arial" font-size="22" fill="#999">Username</text>
  <rect x="150" y="200" width="300" height="60" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="240" font-family="Arial" font-size="22" fill="#999">Password</text>
  <rect x="150" y="280" width="300" height="60" rx="5" fill="#4F46E5" stroke="none"/>
  <text x="250" y="320" font-family="Arial" font-weight="bold" font-size="22" fill="white">Login</text>
  <circle cx="300" cy="70" r="30" fill="#4F46E5"/>
  <path d="M290 70 L310 70 M300 60 L300 80" stroke="white" stroke-width="4"/>
</svg>`;

const signupSvg = `<svg width="600" height="500" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="500" rx="10" fill="#F5F5F5"/>
  <rect x="150" y="100" width="300" height="50" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="135" font-family="Arial" font-size="20" fill="#999">Full Name</text>
  <rect x="150" y="160" width="300" height="50" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="195" font-family="Arial" font-size="20" fill="#999">Email</text>
  <rect x="150" y="220" width="300" height="50" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="255" font-family="Arial" font-size="20" fill="#999">Password</text>
  <rect x="150" y="280" width="300" height="50" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="315" font-family="Arial" font-size="20" fill="#999">Confirm Password</text>
  <rect x="150" y="350" width="300" height="60" rx="5" fill="#22C55E" stroke="none"/>
  <text x="245" y="390" font-family="Arial" font-weight="bold" font-size="22" fill="white">Sign Up</text>
  <circle cx="300" cy="60" r="25" fill="#22C55E"/>
  <path d="M290 60 L310 60 M300 50 L300 70" stroke="white" stroke-width="4"/>
</svg>`;

const forgotPasswordSvg = `<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="10" fill="#F5F5F5"/>
  <rect x="150" y="150" width="300" height="60" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="190" font-family="Arial" font-size="22" fill="#999">Email Address</text>
  <rect x="150" y="230" width="300" height="60" rx="5" fill="#F59E0B" stroke="none"/>
  <text x="185" y="270" font-family="Arial" font-weight="bold" font-size="22" fill="white">Reset Password</text>
  <path d="M300 60 C280 60 260 75 260 95 L260 110 L240 110 C237 110 235 112 235 115 L235 175 C235 178 237 180 240 180 L360 180 C363 180 365 178 365 175 L365 115 C365 112 363 110 360 110 L340 110 L340 95 C340 75 320 60 300 60 Z" fill="#F59E0B"/>
</svg>`;

const resetPasswordSvg = `<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="10" fill="#F5F5F5"/>
  <rect x="150" y="120" width="300" height="50" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="155" font-family="Arial" font-size="22" fill="#999">New Password</text>
  <rect x="150" y="190" width="300" height="50" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="225" font-family="Arial" font-size="22" fill="#999">Confirm Password</text>
  <rect x="150" y="260" width="300" height="60" rx="5" fill="#EF4444" stroke="none"/>
  <text x="180" y="300" font-family="Arial" font-weight="bold" font-size="22" fill="white">Save New Password</text>
  <circle cx="300" cy="70" r="40" fill="none" stroke="#EF4444" stroke-width="4"/>
  <path d="M280 70 L290 80 L320 50" stroke="#EF4444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const otpSvg = `<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="10" fill="#F5F5F5"/>
  <text x="240" y="80" font-family="Arial" font-weight="bold" font-size="26" fill="#333">Verification</text>
  <text x="200" y="110" font-family="Arial" font-size="18" fill="#666">Enter the 4-digit code sent to</text>
  <text x="230" y="140" font-family="Arial" font-size="18" fill="#666">your mobile number</text>
  <rect x="120" y="170" width="70" height="100" rx="5" fill="white" stroke="#8B5CF6" stroke-width="2"/>
  <rect x="210" y="170" width="70" height="100" rx="5" fill="white" stroke="#8B5CF6" stroke-width="2"/>
  <rect x="300" y="170" width="70" height="100" rx="5" fill="white" stroke="#8B5CF6" stroke-width="2"/>
  <rect x="390" y="170" width="70" height="100" rx="5" fill="white" stroke="#8B5CF6" stroke-width="2"/>
  <text x="140" y="235" font-family="Arial" font-weight="bold" font-size="40" fill="#333">5</text>
  <text x="230" y="235" font-family="Arial" font-weight="bold" font-size="40" fill="#333">9</text>
  <text x="320" y="235" font-family="Arial" font-weight="bold" font-size="40" fill="#333">3</text>
  <text x="410" y="235" font-family="Arial" font-weight="bold" font-size="40" fill="#333">7</text>
  <rect x="225" y="300" width="150" height="60" rx="5" fill="#8B5CF6" stroke="none"/>
  <text x="270" y="340" font-family="Arial" font-weight="bold" font-size="22" fill="white">Verify</text>
</svg>`;

const profilePaneSvg = `<svg width="600" height="500" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="500" rx="10" fill="#F5F5F5"/>
  <circle cx="300" cy="120" r="70" fill="#3B82F6"/>
  <path d="M300 200 C250 200 210 230 210 270 L390 270 C390 230 350 200 300 200 Z" fill="#3B82F6"/>
  <rect x="100" y="300" width="150" height="30" rx="5" fill="#E2E8F0"/>
  <rect x="100" y="350" width="400" height="30" rx="5" fill="#E2E8F0"/>
  <rect x="100" y="400" width="250" height="30" rx="5" fill="#E2E8F0"/>
  <rect x="450" y="300" width="50" height="50" rx="5" fill="#3B82F6"/>
  <path d="M460 325 L490 325 M475 310 L475 340" stroke="white" stroke-width="4" stroke-linecap="round"/>
</svg>`;

const notificationsSvg = `<svg width="600" height="500" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="500" rx="10" fill="#F5F5F5"/>
  <path d="M300 70 C270 70 245 95 245 125 L245 150 C245 170 235 190 220 210 L210 220 C205 225 210 235 218 235 L382 235 C390 235 395 225 390 220 L380 210 C365 190 355 170 355 150 L355 125 C355 95 330 70 300 70 Z" fill="#EC4899"/>
  <circle cx="300" cy="265" r="25" fill="#EC4899"/>
  <rect x="100" y="320" width="110" height="110" rx="5" fill="white" stroke="#E2E8F0" stroke-width="2"/>
  <circle cx="120" cy="340" r="10" fill="#EC4899"/>
  <rect x="140" y="335" width="60" height="15" rx="3" fill="#E2E8F0"/>
  <rect x="140" y="360" width="40" height="10" rx="2" fill="#E2E8F0"/>
  <rect x="100" y="320" width="8" height="110" rx="4" fill="#EC4899"/>
  <rect x="245" y="320" width="110" height="110" rx="5" fill="white" stroke="#E2E8F0" stroke-width="2"/>
  <circle cx="265" cy="340" r="10" fill="#3B82F6"/>
  <rect x="285" y="335" width="60" height="15" rx="3" fill="#E2E8F0"/>
  <rect x="285" y="360" width="40" height="10" rx="2" fill="#E2E8F0"/>
  <rect x="390" y="320" width="110" height="110" rx="5" fill="white" stroke="#E2E8F0" stroke-width="2"/>
  <circle cx="410" cy="340" r="10" fill="#10B981"/>
  <rect x="430" y="335" width="60" height="15" rx="3" fill="#E2E8F0"/>
  <rect x="430" y="360" width="40" height="10" rx="2" fill="#E2E8F0"/>
</svg>`;

const login2Svg = `<svg width="600" height="450" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="450" rx="10" fill="#F5F5F5"/>
  <rect x="150" y="120" width="300" height="60" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="160" font-family="Arial" font-size="22" fill="#999">Email or Phone</text>
  <rect x="150" y="200" width="300" height="60" rx="5" fill="white" stroke="#E0E0E0"/>
  <text x="185" y="240" font-family="Arial" font-size="22" fill="#999">Password</text>
  <rect x="150" y="280" width="300" height="60" rx="5" fill="#0EA5E9" stroke="none"/>
  <text x="265" y="320" font-family="Arial" font-weight="bold" font-size="22" fill="white">Login</text>
  <text x="240" y="60" font-family="Arial" font-weight="bold" font-size="28" fill="#0EA5E9">Login 2.0</text>
  <rect x="200" y="370" width="50" height="50" rx="25" fill="#4267B2"/>
  <text x="220" y="403" font-family="Arial" font-weight="bold" font-size="26" fill="white">f</text>
  <rect x="275" y="370" width="50" height="50" rx="25" fill="#1DA1F2"/>
  <text x="295" y="403" font-family="Arial" font-weight="bold" font-size="26" fill="white">t</text>
  <rect x="350" y="370" width="50" height="50" rx="25" fill="#DB4437"/>
  <text x="370" y="403" font-family="Arial" font-weight="bold" font-size="26" fill="white">g</text>
</svg>`;

// Export the designs data
export const designsData = [
  {
    id: 1,
    name: 'Login',
    description: 'A simple login page for web and mobile',
    image: loginIcon,
    svg: loginSvg,
    tags: ['Web', 'Mobile', 'Free']
  },
  {
    id: 2,
    name: 'Signup',
    description: 'User registration form with clean design',
    image: signupIcon,
    svg: signupSvg,
    tags: ['Web', 'Saas', 'Free']
  },
  {
    id: 3,
    name: 'Forgot Password',
    description: 'Password recovery request form',
    image: forgotPasswordIcon,
    svg: forgotPasswordSvg,
    tags: ['Web', 'Mobile', 'Free']
  },
  {
    id: 4,
    name: 'Reset Password',
    description: 'Form for setting a new password',
    image: resetPasswordIcon,
    svg: resetPasswordSvg,
    tags: ['Web', 'Saas', 'Pro']
  },
  {
    id: 5,
    name: 'OTP',
    description: 'One-time password verification screen',
    image: otpIcon,
    svg: otpSvg,
    tags: ['Mobile', 'Saas', 'Pro']
  },
  {
    id: 6,
    name: 'Profile Pane',
    description: 'User profile management panel',
    image: profileIcon,
    svg: profilePaneSvg,
    tags: ['Web', 'Mobile', 'Pro']
  },
  {
    id: 7,
    name: 'Notifications',
    description: 'Notification center with status indicators',
    image: notificationsIcon,
    svg: notificationsSvg,
    tags: ['Mobile', 'AI', 'Pro']
  },
  {
    id: 8,
    name: 'Login 2',
    description: 'Alternative login design with social options',
    image: login2Icon,
    svg: login2Svg,
    tags: ['Web', 'Landing Page', 'Free']
  },
]; 