import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import {} from 'twin.macro';
import { FOOTER_INFO, SOCIAL_LINK } from 'constants/constant';
import InfoBlock from './infoBlock';

const Footer = () => {
  return (
    <div tw="bg-primary1 px-[60px] py-8 mobile:py-16">
      <div tw="flex justify-center flex-col laptop:flex-row gap-y-4 laptop:gap-x-10 desktop:gap-x-40 mx-auto text-primary3">
        <div>
          <h3 tw="font-Cinzel font-semibold mb-2">OWNUS</h3>
          <p>©2023 GeoJungIm All Rights Reserved</p>
        </div>
        <div tw=" gap-x-20 gap-y-4 desktop:gap-x-32 flex flex-col tablet:grid tablet:grid-cols-3">
          <InfoBlock title="About" content={FOOTER_INFO.about} />
          <InfoBlock title="Contact" content={FOOTER_INFO.contact} />
          <div>
            <p tw="font-bold mb-4">Follow Us</p>
            <ul tw="text-xl flex  gap-y-2 tablet:flex-col">
              <li>
                <Link href={SOCIAL_LINK.linkedIn}>
                  <AiFillLinkedin />
                </Link>
              </li>
              <li>
                <Link href={SOCIAL_LINK.github}>
                  <AiFillGithub />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
