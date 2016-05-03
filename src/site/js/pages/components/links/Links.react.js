import React from 'react';

import BlueLink from '~/pages/components/links/BlueLink.react';
import ColourfulLinks from '~/pages/components/links/ColourfulLinks.react';
import LightLink from '~/pages/components/links/LightLink.react';
import LightLinkReversed from '~/pages/components/links/LightLinkReversed.react';
import NegativeLink from '~/pages/components/links/NegativeLink.react';
import PageTitle from '~/components/PageTitle.react';
import SnowBackgroundLink from '~/pages/components/links/SnowBackgroundLink.react';

export default function Links() {
    return (
        <div>
            <PageTitle title="Links" />
            <BlueLink />
            <LightLink />
            <LightLinkReversed />
            <NegativeLink />
            <SnowBackgroundLink />
            <ColourfulLinks />
        </div>
    );
}