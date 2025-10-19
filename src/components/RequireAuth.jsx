import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../services/auth.services";

export default function RequireAuth({ allowedRoles = [] }) {
  const user = AuthService.getCurrentUser();

  if (!user) {
    // Not logged in → go to login
    return <Navigate to="/login" replace />;
  }

  // No specific role required (just needs to be logged in)
  if (allowedRoles.length === 0) {
    return <Outlet />;
  }

  // Check if user has at least one of the allowed roles
  const hasAccess = user.roles?.some((r) => allowedRoles.includes(r));

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />; // Allowed → render child route
}
