"use client";

const WHATSAPP_URL =
  "https://wa.me/393923952415?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20AI%20tools%20or%20services.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MediaNest on WhatsApp"
      title="Chat with us on WhatsApp"
      className="whatsapp-float group fixed bottom-6 right-6 z-[9999] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_12px_rgba(37,211,102,0.4)] transition-all duration-200 hover:bg-[#1EBE5D] hover:scale-[1.08] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-[#25D366] md:bottom-6 md:right-6 max-md:h-14 max-md:w-14 max-md:bottom-5 max-md:right-5"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-[whatsapp-pulse_2s_ease-out_infinite] bg-[#25D366] opacity-0 pointer-events-none" />

      {/* WhatsApp SVG icon */}
      <svg
        className="relative z-10 h-8 w-8 max-md:h-7 max-md:w-7"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.004 2.002C8.28 2.002 2.004 8.278 2.004 15.998c0 2.484.65 4.904 1.888 7.042L2 30l7.18-1.882A13.94 13.94 0 0 0 16.004 30c7.72 0 13.996-6.278 13.996-13.998S23.724 2.002 16.004 2.002Zm0 25.594a11.55 11.55 0 0 1-5.896-1.616l-.424-.252-4.382 1.148 1.168-4.272-.276-.44a11.56 11.56 0 0 1-1.772-6.166c0-6.39 5.2-11.59 11.586-11.59 6.388 0 11.588 5.2 11.588 11.59 0 6.392-5.204 11.598-11.592 11.598Zm6.348-8.676c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.104 1.364-.204.232-.408.262-.756.088-.348-.174-1.468-.54-2.796-1.724-1.034-.92-1.732-2.058-1.936-2.406-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.784-1.89-1.074-2.588-.284-.68-.572-.588-.784-.598l-.668-.012a1.28 1.28 0 0 0-.928.436c-.32.348-1.22 1.192-1.22 2.908s1.248 3.372 1.422 3.604c.174.232 2.456 3.75 5.952 5.26.832.358 1.482.572 1.988.734.836.264 1.596.228 2.198.138.67-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.204-1.656-.088-.146-.32-.232-.668-.406Z"
          fill="white"
        />
      </svg>

      {/* Tooltip — desktop only */}
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 max-md:hidden">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}

export { WHATSAPP_URL };
