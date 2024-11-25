import React from 'react';
import { Route,Routes } from 'react-router-dom';
import ProtectedRoute from "../services/ProtectedRoute.jsx";
import OpHome from "../Pages/OfficePortal/OpHome.jsx";
import {ReportView}  from "../Pages/ReportGeneration/ReportView.jsx";
import {Applications} from "../Pages/OfficePortal/Applications.jsx";

const GovernmentOfficerPortalRoutes = () => {
    return (
<>
                    <Route path="abc" element={<OpHome />} />
                    <Route path="abcd" element={<Applications />} />

</>
    );
};

export default GovernmentOfficerPortalRoutes;