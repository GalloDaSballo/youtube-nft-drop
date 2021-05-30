import React from 'react';

const VSpacer: React.FC<{height?: number }> = ({height = 12}) => {
    return (
        <div style={{height}} />
    );
}
export default VSpacer;

