import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Find Locations"
        description="Project to show spots"
        canonical="https://find-locations.vercel.app"
        openGraph={{
          url: 'https://find-locations.vercel.app',
          title: 'Find Locations',
          description: 'Project to show spots',
          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'Find Locations'
            }
          ],
          site_name: 'Find Locations'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
