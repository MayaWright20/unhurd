import React from 'react';
import { useRouter } from 'next/router';
import ArtistAvatar from '@/components/ArtistAvatar';

export default function Artist() {
  const router = useRouter();
  const { artistUrl, artistName, artistGenres, artistFollowers } = router.query;

  return (
    <section className='padding-global'>
      <ArtistAvatar click="/" url={artistUrl} />
      <div className="logos-container artist-stats">
        {artistName} | {artistGenres} | {artistFollowers} followers
      </div>
      <div>
        <h2></h2>
      </div>
    </section>
  );
}


