import React from 'react'

export const ResolutionInformationContent = () => {
    return (
        <div className="content">
            <div className='resolution-info'>
                <div className='resolution-left'>
                    <span className='related-record-individual'>
                        <label className='related-label'>Close code</label>
                        <select className='related-dropdown'>
                            <option>--None--</option>
                            <option>Awaiting customer confirmation</option>
                            <option>Issue persists-risk agreed</option>
                            <option>Manually Closed</option>
                            <option>Monitoring</option>
                            <option>No fix provided</option>
                            <option>No further action required</option>
                            <option>Permanently resolved</option>
                            <option>Third party fix</option>
                            <option>Workaround provided</option>
                            <option>Duplicate</option>
                            <option>In Person Support</option>
                        </select>
                    </span>
                </div>

                <div className='resolution-right'>
                    <span className='related-record-individual'>
                        <label className='related-label'>Closed by</label>
                        <input type='text' className='related-input' />
                    </span>
                    <span className='related-record-individual'>
                        <label className='related-label'>Closed</label>
                        <input type='text' className='related-input' />
                    </span>
                </div>

                <div className='resolution-close'>
                    <p className='label-close-notes'>Close notes</p>
                    <div className='resolution-area'>
                        <textarea className='resolution-textarea'></textarea>
                    </div>
                </div>
            </div>
            <div className='related-record-buttons'>
                <button className='related-button'>Update</button>
                <button className='related-button'>Resolve</button>
            </div>
        </div>
    )
}
