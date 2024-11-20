import React from 'react'

export const RelatedRecordsContent = () => {
    return (
        <div className="content">
            <div className='related-records-fields'>
                <div className='related-record-left'>
                    <span className='related-record-individual'>
                        <label className='related-label'>Problem</label>
                        <input type='text' className='related-input1' />
                    </span>
                    <span className='related-record-individual'>
                        <label className='related-label'>Vendor Reference Number</label>
                        <input type='text' className='related-input1' />
                    </span>
                    <span className='related-record-individual'>
                        <label className='related-label'>Gateway ID</label>
                        <input type='text' className='related-input1' />
                    </span>
                    <span className='related-record-individual'>
                        <label className='related-label'>Source Tool</label>
                        <input type='text' className='related-input1' />
                    </span>
                </div>

                <div className='related-record-right'>
                    <span className='related-record-individual'>
                        <label className='related-label'>Change Request</label>
                        <input type='text' className='related-input1' />
                    </span>
                    <span className='related-record-individual'>
                        <label className='related-label'>Caused by Change</label>
                        <input type='text' className='related-input1' />
                    </span>
                    <span className='related-record-individual'>
                        <label className='related-label'>Customer ticket id</label>
                        <input type='text' className='related-input1' />
                    </span>
                </div>
            </div>

            <div className='related-record-buttons'>
                <button className='related-button'>Update</button>
                <button className='related-button'>Resolve</button>
            </div>
        </div>
    )
}
