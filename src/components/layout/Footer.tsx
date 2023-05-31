import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from "@material-tailwind/react";

function Footer() {
  return (<>
    <footer className="bg-amber-500 text-white border-t border-blue-gray-50 rounded-t-lg bottom-0 mx-auto w-full mt-20 lg:mt-60 py-8">
      <div className="container mx-auto">
        <div className="sm:w-3/4 lg:w-2/4 mx-auto">
          <div className="flex flex-row items-center justify-center sm:flex-row gap-6 mt-8">
            <Tooltip content="Discord Moderrkowo">
              <a href="https://discord.gg/mBat5Gw2na"><FontAwesomeIcon icon={faDiscord} /></a>
            </Tooltip>
            <Tooltip content="Twitter Moderrkowo">
              <a href="https://twitter.com/ModerrkowoPL"><FontAwesomeIcon icon={faTwitter} /></a>
            </Tooltip>
            <Tooltip content="Facebook Moderrkowo">
              <a href="https://www.facebook.com/moderrkowo"><FontAwesomeIcon icon={faFacebook} /></a>
            </Tooltip>
            <Tooltip content="Instagram Moderrkowo">
              <a href="https://instagram.com/moderrkowo/"><FontAwesomeIcon icon={faInstagram} /></a>
            </Tooltip>
          </div>
          <p className="text-center mt-5 text-gray-900">Copyright © 2023-{new Date().getFullYear()} moderrkowo.pl. Wszelkie prawa zastrzeżone.
            <br />
            Minecraft należy do Mojang Studios.
          </p>
          <p className="text-center mt-5 text-gray-900">Stworzone przez <a href="https://github.com/Moderrek">Tymon Woźniak</a></p>
        </div>
      </div>
    </footer>
  </>);
}

export default Footer;