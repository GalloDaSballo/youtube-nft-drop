import React from 'react';

const HSpacer: React.FC<{width?: number }> = ({width = 8}) => {
    return (
        <div style={{width}} />
    );
}
export default HSpacer;

