import React from 'react';

export function Loader(status) {
    
    return (
        <div className={"loader-container " + status.status}>
            <div className="lds-ellipsis">
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
}


