import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataProvider } from './../../services/TableDataContext.jsx';
import ColumnGroupingTable from './../../Components/Table.jsx';


const voter_application = [
    { id: 'applicationID', label: 'Application ID', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'address', label: 'Address', minWidth: 170 },
    { id: 'houseNo', label: 'House No', minWidth: 170 },
    { id: 'nic', label: 'NIC', minWidth: 170 }
];

const title = "Upcoming Election";

export const VoterApplicationsVerificationOfficer = () => {

    return (
        <DataProvider link={"/verification_officer/get_voter_applications"} tableData={voter_application}>
            <ColumnGroupingTable link={"/verification_officer/form_review/"} title={title} />
            {/* Uncomment to display the fetched party list */}
        </DataProvider>
    );
};


