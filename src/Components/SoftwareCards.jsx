import React from 'react';
import SoftwareDetailsComponent from './SoftwareDetailsComponent';
import FontAwesome from './FontAwesome';
import InputChecked from './InputChecked';

function SoftwareCardList({ softwares, emptyMessage, fromPage }) {
    return (
        <>
            {softwares && softwares.length === 0 ? (
                <p>{emptyMessage}</p>
            ) : (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-0">
                    {softwares && softwares.map(software => (
                        <div key={software.id} className="card mx-4 mb-3" style={{ width: "18rem" }}>
                            <img src={software.img} className="card-img-top" alt={software.title} />
                            <div className="card-body">
                                <h5 className="card-title">{software.title}</h5>
                                <p className="card-text">{software.category}</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <SoftwareDetailsComponent software={software} fromPage={fromPage} />
                                <FontAwesome software={software} />
                                <InputChecked software={software} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default SoftwareCardList;