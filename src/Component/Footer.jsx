import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="pt-16 pb-6 px-8"
        style={{ backgroundColor: "#2563EB", color: "#0F172A" }} // Primary + Text
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>
              Fill It
            </h2>
            <p className="text-sm mb-4" style={{ color: "#0F172A" }}>
              Fill It is your trusted online form-filling platform where verified employees
              help you complete official forms securely, quickly, and correctly.
            </p>
            <p className="text-sm" style={{ color: "#0F172A" }}>
              Making paperwork simple, fast, and stress-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#0F172A" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ color: "#0F172A" }} className="hover:text-[#0EA5E9] transition">Home</a></li>
              <li><a href="#" style={{ color: "#0F172A" }} className="hover:text-[#0EA5E9] transition">About Us</a></li>
              <li><a href="#" style={{ color: "#0F172A" }} className="hover:text-[#0EA5E9] transition">Services</a></li>
              <li><a href="#" style={{ color: "#0F172A" }} className="hover:text-[#0EA5E9] transition">Demo</a></li>
              <li><a href="#" style={{ color: "#0F172A" }} className="hover:text-[#0EA5E9] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#0F172A" }}>
              Contact Us
            </h3>
            <ul className="space-y-3" style={{ color: "#0F172A" }}>
              <li>📍 <span className="ml-2">New Delhi, India</span></li>
              <li>📞 <span className="ml-2">+91 98765 43210</span></li>
              <li>✉️ <span className="ml-2">support@fillit.com</span></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#0F172A" }}>
              Follow Us
            </h3>
            <div className="flex space-x-5 text-2xl" style={{ color: "#0F172A" }}>
              {/* Facebook */}
              <a href="#" className="hover:text-[#0EA5E9] transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                  <path d="M8.94 8.5H7.5V16H5V8.5H3V6h2V4.5C5 2.57 6.12 1 8.44 1H11v2H9.18c-.52 0-.68.25-.68.66V6H11l-.28 2.5z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="hover:text-[#0EA5E9] transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334v-.426A6.673 6.673 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518A3.301 3.301 0 0 0 15.555 2a6.533 6.533 0 0 1-2.084.797A3.286 3.286 0 0 0 7.875 5.03a9.325 9.325 0 0 1-6.767-3.429A3.289 3.289 0 0 0 2.22 6.13 3.323 3.323 0 0 1 .64 5.579v.041A3.283 3.283 0 0 0 3.28 8.864a3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.615-.058 3.284 3.284 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045 9.344 9.344 0 0 0 5.026 1.465z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-[#0EA5E9] transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                  <path d="M8 0C5.744 0 5.47.01 4.65.048c-.82.038-1.38.168-1.875.36a3.63 3.63 0 0 0-1.312.855A3.63 3.63 0 0 0 .608 2.575c-.192.495-.322 1.055-.36 1.875C.21 5.47.2 5.744.2 8c0 2.256.01 2.53.048 3.35.038.82.168 1.38.36 1.875.192.495.454.918.855 1.312.404.401.817.663 1.312.855.495.192 1.055.322 1.875.36.82.038 1.094.048 3.35.048s2.53-.01 3.35-.048c.82-.038 1.38-.168 1.875-.36a3.63 3.63 0 0 0 1.312-.855 3.63 3.63 0 0 0 .855-1.312c.192-.495.322-1.055.36-1.875.038-.82.048-1.094.048-3.35s-.01-2.53-.048-3.35c-.038-.82-.168-1.38-.36-1.875a3.63 3.63 0 0 0-.855-1.312A3.63 3.63 0 0 0 13.425.608c-.495-.192-1.055-.322-1.875-.36C10.53.01 10.256 0 8 0zm0 1.44c2.22 0 2.483.01 3.36.048.71.032 1.095.15 1.35.25.34.13.582.285.84.543.258.258.413.5.543.84.1.255.218.64.25 1.35.038.877.048 1.14.048 3.36s-.01 2.483-.048 3.36c-.032.71-.15 1.095-.25 1.35a2.163 2.163 0 0 1-.543.84 2.163 2.163 0 0 1-.84.543c-.255.1-.64.218-1.35.25-.877.038-1.14.048-3.36.048s-2.483-.01-3.36-.048c-.71-.032-1.095-.15-1.35-.25a2.163 2.163 0 0 1-.84-.543 2.163 2.163 0 0 1-.543-.84c-.1-.255-.218-.64-.25-1.35C1.45 10.483 1.44 10.22 1.44 8s.01-2.483.048-3.36c.032-.71.15-1.095.25-1.35.13-.34.285-.582.543-.84.258-.258.5-.413.84-.543.255-.1.64-.218 1.35-.25C5.517 1.45 5.78 1.44 8 1.44zM8 3.89a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22zM8 10.67a2.67 2.67 0 1 1 0-5.34 2.67 2.67 0 0 1 0 5.34zm4.28-7.41a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          className="border-t mt-10 pt-6 text-center text-sm"
          style={{
            borderColor: "#3B82F6",
            color: "#0F172A",
          }}
        >
          © {new Date().getFullYear()} Fill It. All rights reserved.
        </div>

      </footer>
    </>
  );
};

export default Footer;
