import { ChevronRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
import healthTurkiyeLogo from "@/assets/health-turkiye-logo.png";
import sheBeautyClinicLogo from "@/assets/she-beauty-clinic-logo.png";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isTurkish = i18n.language === 'tr';

  return (
    <footer className="bg-[#F6F4EF]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
        {/* Logo Header */}
        <div className="flex justify-center mb-8 scale-up-luxury">
          <img
            src={drKaraaltinLogo}
            alt="Dr. Karaaltın Logo"
            className="h-12 lg:h-16 brightness-0"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 mb-10 lg:mb-12"></div>

        {/* Main Grid - 5 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
          {/* Column 1: PROCEDURES */}
          <div className="float-in" style={{ animationDelay: "0s" }}>
            <h3 className="text-xs uppercase tracking-widest font-light mb-4 text-gray-900">
              {t('footer.procedures')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/procedures/face" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t('footer.face')}
                </Link>
              </li>
              <li>
                <Link to="/procedures/body" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t('footer.body')}
                </Link>
              </li>
              <li>
                <Link to="/procedures/breast" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t('footer.breast')}
                </Link>
              </li>
              <li>
                <Link to="/procedures/nose" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t('footer.nose')}
                </Link>
              </li>
              <li>
                <Link to="/procedures/face#future-of-face" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t('footer.futureOfFace')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: GENERAL */}
          <div className="float-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xs uppercase tracking-widest font-light mb-4 text-gray-900">
              {t('footer.general')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/learn-surgery" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {t('footer.learnSurgery')}
                </Link>
              </li>
              {/* Hide Before & Afters for Turkish users */}
              {!isTurkish && (
                <li>
                  <Link to="/gallery" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {t('footer.beforeAfters')}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: SIGNATURE TECHNIQUES */}
          <div className="float-in col-span-2 md:col-span-1" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xs uppercase tracking-widest font-light mb-4 text-gray-900">
              {t('footer.signatureTechniques')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/procedures/face/k-endoscopic-deep-plane" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  K Endoscopic Deep Plane
                </Link>
              </li>
              <li>
                <Link to="/procedures/nose/smart-template-rhinoplasty" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Smart Template Rhinoplasty
                </Link>
              </li>
              <li>
                <Link to="/procedures/face/endochor-face-lift" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  EndoChor® Face Lift
                </Link>
              </li>
              <li>
                <Link to="/procedures/body/advanced-safe-bbl" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Advanced Safe BBL™
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: LOCATION */}
          <div className="float-in col-span-2 md:col-span-1" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xs uppercase tracking-widest font-light mb-4 text-gray-900">
              {t('footer.location')}
            </h3>
            <address className="not-italic text-sm text-gray-600 leading-relaxed mb-4">
              Vişnezade, Balıklı Apt, Bayıldım Cd.
              <br />
              No:14/16 Kat: 1 Apartment:3
              <br />
              34353 Beşiktaş / Istanbul
            </address>
            <a
              href="tel:+902123254242"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors block mb-4"
            >
              +90 212 325 42 42
            </a>
            <a
              href="https://www.google.com/maps/place/Prof.+Dr.+Mehmet+Veli+Karaalt%C4%B1n/@41.0428434,28.9958192,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wide"
            >
              {t('footer.getDirections')}
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* Column 5: SUBSCRIBE */}
          <div className="float-in col-span-2 md:col-span-3 lg:col-span-1" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xs uppercase tracking-widest font-light mb-4 text-gray-900">
              {t('footer.subscribe')}
            </h3>
            
            {/* Email Input */}
            <div className="flex gap-2 mb-6 max-w-xs lg:max-w-none">
              <input
                type="email"
                placeholder={t('footerExtra.emailPlaceholder') || 'Email Address'}
                className="flex-1 border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
              />
              <button
                className="bg-gray-900 text-white p-2 hover:bg-gray-800 transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Book Now Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs uppercase tracking-widest font-light rounded w-full max-w-xs lg:max-w-none justify-center hover:opacity-80 transition-all duration-300 mb-6"
            >
              {t('footer.bookNow')}
              <ChevronRight className="w-4 h-4" />
            </Link>

            {/* Social Media Icons - Solo 3: Instagram, YouTube, WhatsApp */}
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.instagram.com/profdrk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@drkaraaltin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=905465533285&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-8 lg:gap-12 pt-8 pb-8 scale-up-luxury" style={{ animationDelay: "0.6s" }}>
          <img
            src={sheBeautyClinicLogo}
            alt="SHE Beauty Clinic"
            className="h-12 lg:h-16 w-auto"
          />
          <img
            src={healthTurkiyeLogo}
            alt="Health Türkiye"
            className="max-w-[140px] lg:max-w-[180px] h-auto"
          />
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            © {new Date().getFullYear()} Prof. Dr. Mehmet Veli Karaaltın. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
