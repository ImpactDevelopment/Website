import React from 'react'

const comma = '%2C'

export interface Props {
    features?: string[]
}

export default function Polyfill(props: Props): React.ReactElement|null {
    // don't bother for empty feature list
    if (!props.features || props.features.length < 1)
        return null

    return <script
        crossOrigin="anonymous"
        src={
            'https//polyfill.io/v3/polyfill.min.js?unknown=polyfill&flags=gated&features='
            + props.features.join(comma)
        }
    />
}
