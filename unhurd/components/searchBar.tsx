import React from 'react'
import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import ArtistAvatar from './ArtistAvatar';
import Section from './Section';

export default function SearchBar(props) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();

        let artistsData;
        let artistsRes;

        try {
            artistsRes = await fetch(`/api/search/?q=${encodeURIComponent(query)}`);
            artistsData = await artistsRes.json();
            setResults(artistsData.items);
        } catch (error) {
            setResults([]);
        } finally {
            setQuery(' ');
        }
    };

    return (
        <Section eyebrowText={"25,000+ ARTISTS HAVE BEEN HURD"} lgText={"SEARCH YOUR FAVOURITE ARTIST"} comment={"Enter your favourite artists name"}
            children={

                <div className='search_form-block needsclick  kl-private-reset-css-Xuajs1 input-con-div7'>
                    <form className='search_form-wrapper needsclick klaviyo-form klaviyo-form-version-cid_1 kl-private-reset-css-Xuajs1 input-con-div6' onSubmit={handleSearch}>
                        <div className='needsclick  kl-private-reset-css-Xuajs1 input-con-div4'>
                            <div className='needsclick  kl-private-reset-css-Xuajs1 input-con-div3'>
                                <div className='needsclick  kl-private-reset-css-Xuajs1 input-con-div2'>
                                    <div className='needsclick  kl-private-reset-css-Xuajs1 input-con-div'>
                                        <div className='input-div-style needsclick go1800658901 kl-private-reset-css-Xuajs1 input-con input-style'>
                                            <input className='input form-input text-input' placeholder="Enter artists name..." value={query} onChange={(e) => setQuery(e.target.value)} />
                                        </div>
                                        <div className='needsclick  kl-private-reset-css-Xuajs1'>
                                        </div>
                                    </div>
                                    <div className='needsclick  kl-private-reset-css-Xuajs1 continue-button-wrapper'>
                                        <button type='submit' value='Continue' className='button w-button continue-button' >Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="mx-8 my-8 grid grid-cols-1 sm:grid-cols-4 gap-4" className='artists-avatar-wrapper'>
                        {results.length > 0 ? results.map((result) => (
                            // linkHref={`/artist/${result.name}`}
                            <ArtistAvatar click={
                                {
                                    pathname: `/artist/${result.name}`,
                                    query: { artistHref: result.href, artistKey: result.id, artistId: result.id, artistUrl: result?.images?.[0]?.url || '/assets/unhurdlogo.png', artistName: result.name, artistGenres: result?.genres?.[0], artistFollowers: result?.followers?.total.toLocaleString('en-US') },
                                }
                            }
                                key={result.id} id={result.id} url={result?.images?.[0]?.url || '/assets/unhurdlogo.png'} name={result.name} c={console.log("R", result.href)} />
                        )) : query === '' ? <div></div> : <div>No artists found</div>}
                    </div>
                </div>
            } />
    )
}

