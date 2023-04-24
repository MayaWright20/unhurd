import React from 'react';

export default function Section(props) {


    return (
        <section className="section">
            <div className="padding-global">
                <div className='container-large'>
                    <div className='padding-vertical padding-xxlarge'>
                        <div className='artists-card'>
                            <div className='vertical-centre'>
                                <div className='margin-bottom margin-large'>
                                    <div className='heading-with-eyebrow'>
                                        <div className='eyebrow-text'>{props.eyebrowText}</div>
                                        <div className='margin-bottom margin-xxsmall'>
                                            <div className='max-width-xlarge is-smaller-tablet'>
                                                <h2>{props.lgText}</h2>
                                            </div>
                                        </div>
                                        <div className='max-width-large'>
                                            <p>
                                                {props.comment}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}