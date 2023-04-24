import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ArtistAvatar(props) {

    return (
        <>
            {/* <Link key={props.id} > */}
                <Link href={props.click}>
                {props.c}
                <div className="artists-avatar-wrapper">
                    <div className="avatar-wrapper">
                        <Image src={props.url} loading="lazy" width="240" height="240" alt="" className="artist-avatar" />
                        <div className="artist-name">
                            <div>{props.name}</div>
                        </div>
                        <div className="avatar-overlay">
                            <div className="avatar-gradient-overlay">
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            {/* </Link> */}
        </>
    )
}