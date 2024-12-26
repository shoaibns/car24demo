import React from "react";

function Layout({ children }) {
  return (
    <div>
      <div className="mb-11">
        <h1 className="mt-11 text-3xl font-bold text-gray-900">Add Listings</h1>
        <p className="text-gray-600 pt-2">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
      <div>
        <nav>
          <ul>
            <li>Car Details</li>
            <li>Price</li>
            <li>Features</li>
            <li>Media</li>
            <li>Locatio</li>
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
