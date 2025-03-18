// Import design SVGs
import loginDesign from '../assets/designs/login-design.svg';
import signupDesign from '../assets/designs/signup-design.svg';
import forgotPasswordDesign from '../assets/designs/forgot-password-design.svg';
import resetPasswordDesign from '../assets/designs/reset-password-design.svg';
import otpDesign from '../assets/designs/otp-design.svg';
import profileDesign from '../assets/designs/profile-design.svg';
import notificationsDesign from '../assets/designs/notifications-design.svg';
import login2Design from '../assets/designs/login2-design.svg';

// Sample SVGs for the designs - these would be loaded from the actual files in production
const loginSvg = `<svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" rx="8" fill="#FAFAFA" />
  <text x="90" y="55" font-family="Inter" font-weight="600" font-size="15" fill="#000000">Login</text>
</svg>`;

const signupSvg = `<svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" rx="8" fill="#FAFAFA" />
  <text x="85" y="55" font-family="Inter" font-weight="600" font-size="15" fill="#000000">Signup</text>
</svg>`;

const forgotPasswordSvg = `<svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" rx="8" fill="#FAFAFA" />
  <text x="50" y="55" font-family="Inter" font-weight="600" font-size="15" fill="#000000">Forgot Password</text>
</svg>`;

const resetPasswordSvg = `<svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" rx="8" fill="#FAFAFA" />
  <text x="40" y="55" font-family="Inter" font-weight="600" font-size="15" fill="#000000">Reset Password 🔒</text>
</svg>`;

const otpSvg = `<svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" rx="8" fill="#FAFAFA" />
  <text x="90" y="55" font-family="Inter" font-weight="600" font-size="15" fill="#000000">OTP</text>
</svg>`;

const profilePaneSvg = `<svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" rx="8" fill="#FAFAFA" />
  <text x="60" y="55" font-family="Inter" font-weight="600" font-size="15" fill="#000000">Profile Pane</text>
</svg>`;

const notificationsSvg = `<svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" rx="8" fill="#FAFAFA" />
  <text x="50" y="55" font-family="Inter" font-weight="600" font-size="15" fill="#000000">Notifications 🔒</text>
</svg>`;

const login2Svg = `<svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" rx="8" fill="#FAFAFA" />
  <text x="75" y="55" font-family="Inter" font-weight="600" font-size="15" fill="#000000">Login 2</text>
</svg>`;

// Export the designs data
export const designsData = [
  {
    id: 1,
    name: 'Login',
    description: 'A simple login page for web and mobile',
    image: loginDesign,
    svg: loginSvg,
    tags: ['Web', 'Mobile', 'Free']
  },
  {
    id: 2,
    name: 'Signup',
    description: 'User registration form with clean design',
    image: signupDesign,
    svg: signupSvg,
    tags: ['Web', 'Saas', 'Free']
  },
  {
    id: 3,
    name: 'Forgot Password',
    description: 'Password recovery request form',
    image: forgotPasswordDesign,
    svg: forgotPasswordSvg,
    tags: ['Web', 'Mobile', 'Free']
  },
  {
    id: 4,
    name: 'Reset Password',
    description: 'Form for setting a new password',
    image: resetPasswordDesign,
    svg: resetPasswordSvg,
    tags: ['Web', 'Saas', 'Pro']
  },
  {
    id: 5,
    name: 'OTP',
    description: 'One-time password verification screen',
    image: otpDesign,
    svg: otpSvg,
    tags: ['Mobile', 'Saas', 'Pro']
  },
  {
    id: 6,
    name: 'Profile Pane',
    description: 'User profile management panel',
    image: profileDesign,
    svg: profilePaneSvg,
    tags: ['Web', 'Mobile', 'Pro']
  },
  {
    id: 7,
    name: 'Notifications',
    description: 'Notification center with status indicators',
    image: notificationsDesign,
    svg: notificationsSvg,
    tags: ['Mobile', 'AI', 'Pro']
  },
  {
    id: 8,
    name: 'Login 2',
    description: 'Alternative login design with social options',
    image: login2Design,
    svg: login2Svg,
    tags: ['Web', 'Landing Page', 'Free']
  },
]; 