import styles from "../styles/Footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className={styles.footer}>
      <footer className="flex flex-col gap-10 md:gap-28 md:flex-row flex-wrap lg:gap-28">
        <div>
          <h1 className="text-sm font-semibold">BROWSE</h1>
          <div className="flex flex-col md:flex-row gap-6 mt-5 md:gap-20">
            <div className="grid grid-cols-1 space-y-1 text-sm text-gray-600">
              <a href="">Streaming Library</a>
              <a href="">Live Tv</a>
              <a href="">Live News</a>
              <a href="">Live Sports</a>
            </div>

            <div className="grid grid-cols-1 space-y-1 text-sm text-gray-600">
              <a href="">TV Shows</a>
              <a href="">Movies</a>
              <a href="">Originals</a>
              <a href="">Networks</a>
              <a href="">Kids</a>
              <a href="">FX</a>
            </div>

            <div className="grid grid-cols-1 space-y-1 text-sm text-gray-600">
              <a href="">HBO Max</a>
              <a href="">Cinemax</a>
              <a href="">Showtime</a>
              <a href="">STARZ</a>
            </div>

            <div className="grid grid-cols-1 space-y-1 text-sm text-gray-600">
              <a href="">Hulu,Disney+,and ESPN+</a>
              <a href="">Hulu (No Ads),Disney+,and ESPN+</a>
              <a href="">Student Discount</a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-sm font-semibold">HELP</h1>
          <div className="grid grid-cols-1 space-y-1 text-sm text-gray-600 mt-5">
            <a href="">Account & Billing</a>
            <a href="">Plans & Pricing</a>
            <a href="">Supported Devices</a>
            <a href="">Accessbility</a>
          </div>
        </div>
        <div>
          <h1 className="text-sm font-semibold">ABOUT US</h1>
          <div className="grid grid-cols-1 space-y-1 text-sm text-gray-600 mt-5">
            <a href="">Shop Hulu</a>
            <a href="">Press</a>
            <a href="">Jobs</a>
            <a href="">Contact</a>
          </div>
        </div>
      </footer>
      <div className="border-b border-gray-300 w-full my-4"></div>
      <div className="space-x-6">
        <FacebookOutlinedIcon />
        <TwitterIcon />
        <YouTubeIcon />
        <InstagramIcon />
      </div>
      <div className="text-xs text-gray-600 flex  flex-wrap items-center justify-start my-7 gap-6">
        <a href="">&#169; 2021 Hulu,LLC</a>
        <a href="">About Ads</a>
        <a href="">Terms of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">Do Not Sell My Personal Information</a>
        <a href="">Your California Privacy Rights</a>
        <a href="">TV Parental Guidelines</a>
        <a href="">Sitemap</a>
      </div>
    </div>
  );
}

export default Footer;
